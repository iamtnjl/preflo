"""
Reddit Scraper — Collects demand signals from relevant subreddits.

Extracts:
  - Post frequency (how often a topic is discussed)
  - Comment density (depth of engagement)
  - Sentiment patterns (excited, frustrated, indifferent)
  - Pain signal intensity (problems needing solutions)
  - Temporal distribution (increasing/decreasing discussion)

Rate limit: 60 requests/min, 1s delay between requests.
"""

import logging
import time
from typing import Any

import praw
from praw.models import Subreddit

from config.settings import settings
from config.subreddits import DOMAIN_SUBREDDITS

logger = logging.getLogger(__name__)

# ─── Sentiment keywords ───

POSITIVE_KEYWORDS = frozenset([
    "love", "amazing", "great", "awesome", "excited", "fantastic",
    "perfect", "excellent", "recommend", "success", "profitable",
    "growing", "opportunity", "breakthrough", "worth it",
])

NEGATIVE_KEYWORDS = frozenset([
    "hate", "terrible", "awful", "frustrating", "scam", "dead",
    "saturated", "waste", "impossible", "difficult", "struggling",
    "declining", "oversaturated", "don't bother", "not worth",
])

PAIN_KEYWORDS = frozenset([
    "help", "struggling", "how do i", "problem", "issue", "stuck",
    "can't figure", "advice", "need", "challenge", "difficult",
    "frustrated", "confused", "lost", "failing", "no traffic",
])


def _get_reddit_client() -> praw.Reddit:
    return praw.Reddit(
        client_id=settings.REDDIT_CLIENT_ID,
        client_secret=settings.REDDIT_CLIENT_SECRET,
        user_agent=settings.REDDIT_USER_AGENT,
    )


def _analyze_sentiment(text: str) -> str:
    lower = text.lower()
    pos = sum(1 for kw in POSITIVE_KEYWORDS if kw in lower)
    neg = sum(1 for kw in NEGATIVE_KEYWORDS if kw in lower)
    if pos > neg:
        return "positive"
    if neg > pos:
        return "negative"
    return "neutral"


def _has_pain_signal(text: str) -> bool:
    lower = text.lower()
    return any(kw in lower for kw in PAIN_KEYWORDS)


def _search_subreddit(
    subreddit: Subreddit,
    keyword: str,
    limit: int = 50,
) -> list[dict[str, Any]]:
    """Search a single subreddit for posts matching the keyword."""
    posts = []

    for submission in subreddit.search(keyword, sort="relevance", time_filter="year", limit=limit):
        text = f"{submission.title} {submission.selftext}"
        sentiment = _analyze_sentiment(text)
        pain = _has_pain_signal(text)

        posts.append({
            "id": submission.id,
            "title": submission.title,
            "score": submission.score,
            "num_comments": submission.num_comments,
            "created_utc": submission.created_utc,
            "subreddit": str(submission.subreddit),
            "sentiment": sentiment,
            "has_pain_signal": pain,
            "upvote_ratio": submission.upvote_ratio,
        })

        # Rate limit: 1s between requests
        time.sleep(1)

    return posts


def scrape(keyword: str, domain: str = "SEO") -> dict[str, Any]:
    """
    Scrape Reddit for demand signals related to a keyword.

    Returns a dict matching the demand_signals DB schema, plus raw_data.
    """
    logger.info(f"Reddit scrape: keyword='{keyword}', domain='{domain}'")

    reddit = _get_reddit_client()
    subreddit_names = DOMAIN_SUBREDDITS.get(domain, DOMAIN_SUBREDDITS["SEO"])
    all_posts: list[dict[str, Any]] = []

    for sub_name in subreddit_names:
        try:
            subreddit = reddit.subreddit(sub_name)
            posts = _search_subreddit(subreddit, keyword, limit=30)
            all_posts.extend(posts)
            logger.info(f"  r/{sub_name}: {len(posts)} posts found")
        except Exception as e:
            logger.warning(f"  r/{sub_name}: scrape failed — {e}")
            continue

    if not all_posts:
        logger.info(f"Reddit scrape: no posts found for '{keyword}'")
        return _empty_result(keyword)

    # ─── Aggregate signals ───

    post_count = len(all_posts)
    avg_comments = sum(p["num_comments"] for p in all_posts) / post_count
    avg_score = sum(p["score"] for p in all_posts) / post_count

    # Sentiment distribution
    sentiments = [p["sentiment"] for p in all_posts]
    pos_ratio = sentiments.count("positive") / post_count
    neg_ratio = sentiments.count("negative") / post_count
    # sentiment_score: -1 (all negative) to +1 (all positive)
    sentiment_score = pos_ratio - neg_ratio

    # Pain signal intensity: fraction of posts with pain signals
    pain_count = sum(1 for p in all_posts if p["has_pain_signal"])
    pain_intensity = pain_count / post_count

    # Temporal distribution — split posts into two halves by time
    sorted_posts = sorted(all_posts, key=lambda p: p["created_utc"])
    mid = len(sorted_posts) // 2
    if mid > 0:
        recent_half = sorted_posts[mid:]
        older_half = sorted_posts[:mid]
        recent_avg_score = sum(p["score"] for p in recent_half) / len(recent_half)
        older_avg_score = sum(p["score"] for p in older_half) / len(older_half) if older_half else 0
        # recency_score > 0.5 means discussion is increasing
        recency_score = 0.5 + 0.5 * (
            (recent_avg_score - older_avg_score) / max(recent_avg_score + older_avg_score, 1)
        )
    else:
        recency_score = 0.5

    return {
        "source": "reddit",
        "post_count": post_count,
        "avg_comments": round(avg_comments, 2),
        "sentiment_score": round(sentiment_score, 4),
        "recency_score": round(recency_score, 4),
        "raw_data": {
            "posts": all_posts,
            "avg_score": round(avg_score, 2),
            "pain_intensity": round(pain_intensity, 4),
            "sentiment_distribution": {
                "positive": sentiments.count("positive"),
                "neutral": sentiments.count("neutral"),
                "negative": sentiments.count("negative"),
            },
        },
    }


def _empty_result(keyword: str) -> dict[str, Any]:
    return {
        "source": "reddit",
        "post_count": 0,
        "avg_comments": 0.0,
        "sentiment_score": 0.0,
        "recency_score": 0.5,
        "raw_data": {"posts": [], "keyword": keyword},
    }
