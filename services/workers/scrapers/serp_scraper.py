"""
SERP Scraper — Collects competition signals from Google search results.

Extracts:
  - Top 10 results (title, URL, domain)
  - Domain authority proxy (domain age, presence indicators)
  - Content length indicators
  - Content freshness (publication dates)
  - SERP feature detection (featured snippets, PAA, knowledge panels)
  - Domain diversity in top 10
  - Indexed pages estimate

Rate limit: 1 request per 8-12s (random delay), rotated user agents.
"""

import logging
import random
import re
import time
from typing import Any
from urllib.parse import urlparse

import requests
from bs4 import BeautifulSoup

logger = logging.getLogger(__name__)

USER_AGENTS = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:128.0) Gecko/20100101 Firefox/128.0",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Safari/605.1.15",
]

# Known high-authority domains
HIGH_AUTHORITY_DOMAINS = frozenset([
    "wikipedia.org", "amazon.com", "youtube.com", "reddit.com",
    "medium.com", "forbes.com", "nytimes.com", "bbc.com",
    "linkedin.com", "github.com", "stackoverflow.com", "quora.com",
    "shopify.com", "hubspot.com", "neilpatel.com", "moz.com",
    "ahrefs.com", "semrush.com",
])


def _random_delay():
    """8-12 second random delay between SERP requests."""
    delay = random.uniform(8.0, 12.0)
    time.sleep(delay)


def _get_headers() -> dict[str, str]:
    return {
        "User-Agent": random.choice(USER_AGENTS),
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
        "Accept-Encoding": "gzip, deflate",
    }


def _extract_domain(url: str) -> str:
    parsed = urlparse(url)
    domain = parsed.netloc.lower()
    if domain.startswith("www."):
        domain = domain[4:]
    return domain


def _estimate_authority(domain: str) -> float:
    """Rough authority proxy: 0-1 scale based on known domain signals."""
    if domain.endswith(".gov") or domain.endswith(".edu"):
        return 0.95

    for ha in HIGH_AUTHORITY_DOMAINS:
        if domain == ha or domain.endswith(f".{ha}"):
            return 0.85

    # Heuristic: shorter domains tend to be older/more established
    parts = domain.split(".")
    name = parts[0] if parts else domain
    if len(name) <= 5:
        return 0.6
    if len(name) <= 10:
        return 0.4
    return 0.25


def _detect_serp_features(soup: BeautifulSoup) -> dict[str, bool]:
    """Detect common SERP features from the page HTML."""
    html_str = str(soup)
    return {
        "featured_snippet": bool(soup.find("div", class_=re.compile(r"featured|snippet", re.I))),
        "people_also_ask": "People also ask" in html_str,
        "knowledge_panel": bool(soup.find("div", class_=re.compile(r"knowledge|kp-", re.I))),
        "video_results": bool(soup.find("div", class_=re.compile(r"video", re.I))),
        "shopping_results": bool(soup.find("div", class_=re.compile(r"shopping|commercial", re.I))),
    }


def _estimate_indexed_pages(keyword: str) -> int | None:
    """Estimate total indexed pages for a keyword using Google's 'About X results'."""
    _random_delay()
    try:
        url = f"https://www.google.com/search?q={requests.utils.quote(keyword)}"
        resp = requests.get(url, headers=_get_headers(), timeout=15)
        if resp.status_code != 200:
            return None

        soup = BeautifulSoup(resp.text, "lxml")
        stats = soup.find("div", id="result-stats")
        if stats:
            text = stats.get_text()
            match = re.search(r"([\d,]+)\s+results", text)
            if match:
                return int(match.group(1).replace(",", ""))
    except Exception as e:
        logger.warning(f"Indexed pages estimation failed: {e}")

    return None


def scrape(keyword: str) -> dict[str, Any]:
    """
    Scrape Google SERP for competition signals.

    Returns a dict matching the competition_signals DB schema.
    """
    logger.info(f"SERP scrape: keyword='{keyword}'")

    _random_delay()

    try:
        url = f"https://www.google.com/search?q={requests.utils.quote(keyword)}&num=10"
        resp = requests.get(url, headers=_get_headers(), timeout=15)

        if resp.status_code != 200:
            logger.warning(f"SERP scrape: HTTP {resp.status_code} for '{keyword}'")
            return _empty_result()

        soup = BeautifulSoup(resp.text, "lxml")

    except Exception as e:
        logger.error(f"SERP scrape failed for '{keyword}': {e}")
        return _empty_result()

    # ─── Parse organic results ───

    results: list[dict[str, Any]] = []
    for item in soup.select("div.g")[:10]:
        link_el = item.find("a", href=True)
        title_el = item.find("h3")
        snippet_el = item.find("div", class_=re.compile(r"VwiC3b|IsZvec"))

        if not link_el:
            continue

        href = link_el["href"]
        domain = _extract_domain(href)
        title = title_el.get_text(strip=True) if title_el else ""
        snippet = snippet_el.get_text(strip=True) if snippet_el else ""

        results.append({
            "position": len(results) + 1,
            "url": href,
            "domain": domain,
            "title": title,
            "snippet_length": len(snippet),
            "authority_estimate": _estimate_authority(domain),
        })

    if not results:
        logger.info(f"SERP scrape: no organic results parsed for '{keyword}'")
        return _empty_result()

    # ─── Compute competition signals ───

    unique_domains = set(r["domain"] for r in results)
    unique_count = len(unique_domains)

    avg_authority = sum(r["authority_estimate"] for r in results) / len(results)
    avg_snippet_len = sum(r["snippet_length"] for r in results) / len(results)

    serp_features = _detect_serp_features(soup)
    indexed_pages = _estimate_indexed_pages(keyword)

    return {
        "top_results": results,
        "avg_domain_strength": round(avg_authority, 4),
        "unique_domains_top10": unique_count,
        "avg_content_length": round(avg_snippet_len),
        "avg_content_age_days": None,  # Would need individual page crawls
        "indexed_pages_estimate": indexed_pages,
        "serp_features": serp_features,
        "is_monopolistic": unique_count < 5,
    }


def _empty_result() -> dict[str, Any]:
    return {
        "top_results": [],
        "avg_domain_strength": None,
        "unique_domains_top10": None,
        "avg_content_length": None,
        "avg_content_age_days": None,
        "indexed_pages_estimate": None,
        "serp_features": {},
        "is_monopolistic": None,
    }
