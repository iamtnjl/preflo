import type {
  AnalyzeRequest,
  AnalysisParams,
  IntentResult,
  ContentFrequency,
  Domain,
  EffortLevel,
} from "@preflo/shared";

// ─── Domain detection keyword map ───

const DOMAIN_KEYWORDS: Record<string, Domain> = {
  blog: "SEO",
  seo: "SEO",
  article: "SEO",
  rank: "SEO",
  ranking: "SEO",
  backlink: "SEO",
  keyword: "SEO",
  "search engine": "SEO",
  "organic traffic": "SEO",
  "niche site": "SEO",
  affiliate: "SEO",

  youtube: "content",
  video: "content",
  podcast: "content",
  tiktok: "content",
  channel: "content",
  streaming: "content",
  creator: "content",
  newsletter: "content",

  store: "ecommerce",
  shop: "ecommerce",
  dropship: "ecommerce",
  dropshipping: "ecommerce",
  product: "ecommerce",
  amazon: "ecommerce",
  ecommerce: "ecommerce",
  "e-commerce": "ecommerce",
  shopify: "ecommerce",
  sell: "ecommerce",
  selling: "ecommerce",

  app: "saas",
  saas: "saas",
  tool: "saas",
  platform: "saas",
  subscription: "saas",
  software: "saas",
  startup: "saas",

  instagram: "social",
  twitter: "social",
  influencer: "social",
  "social media": "social",
  followers: "social",
  audience: "social",
};

// ─── Effort level keyword map ───

const EFFORT_KEYWORDS: Record<string, EffortLevel> = {
  "side project": "low",
  "side hustle": "low",
  "part time": "low",
  "part-time": "low",
  hobby: "low",
  casual: "low",
  spare: "low",

  "full time": "high",
  "full-time": "high",
  dedicated: "high",
  serious: "high",
  "all in": "high",
  professional: "high",
  quit: "high",
};

// ─── Content frequency keyword map ───

const FREQUENCY_KEYWORDS: Record<string, ContentFrequency> = {
  daily: "daily",
  "every day": "daily",
  "once a day": "daily",

  weekly: "weekly",
  "once a week": "weekly",
  "every week": "weekly",
  "per week": "weekly",

  "twice a month": "biweekly",
  biweekly: "biweekly",
  "bi-weekly": "biweekly",
  "every two weeks": "biweekly",

  monthly: "monthly",
  "once a month": "monthly",
  "every month": "monthly",
  "per month": "monthly",
};

// ─── Defaults ───

const DEFAULTS: AnalysisParams = {
  domain: "SEO",
  niche: "",
  effort_level: "medium",
  budget: 0,
  time_horizon: 6,
  content_frequency: "weekly",
};

// ─── Extraction helpers ───

function normalize(text: string): string {
  return text.toLowerCase().trim().replace(/\s+/g, " ");
}

function detectDomain(text: string): { domain: Domain; matched: string[] } {
  const lower = normalize(text);
  const hits: Record<string, number> = {};
  const matchedKeywords: string[] = [];

  for (const [keyword, domain] of Object.entries(DOMAIN_KEYWORDS)) {
    if (lower.includes(keyword)) {
      hits[domain] = (hits[domain] || 0) + 1;
      matchedKeywords.push(keyword);
    }
  }

  if (Object.keys(hits).length === 0) {
    return { domain: DEFAULTS.domain, matched: [] };
  }

  const best = Object.entries(hits).sort((a, b) => b[1] - a[1])[0][0] as Domain;
  return { domain: best, matched: matchedKeywords };
}

function extractEffort(text: string): EffortLevel | null {
  const lower = normalize(text);
  for (const [keyword, level] of Object.entries(EFFORT_KEYWORDS)) {
    if (lower.includes(keyword)) return level;
  }
  return null;
}

function extractBudget(text: string): number | null {
  // Match patterns: $500, $1,000, $2k, 500 dollars, 1000/month, $500/mo
  const patterns: [RegExp, boolean][] = [
    [/\$\s?([\d,]+)\s?k/i, true],        // $2k
    [/\$\s?([\d,]+)/, false],             // $500
    [/([\d,]+)\s?(?:dollars|usd)/i, false],
    [/([\d,]+)\s?(?:\/\s?(?:mo|month))/i, false],
  ];

  for (const [pattern, isK] of patterns) {
    const match = text.match(pattern);
    if (match) {
      const raw = match[1].replace(/,/g, "");
      let value = parseInt(raw, 10);
      if (isNaN(value)) continue;
      if (isK) value *= 1000;
      return value;
    }
  }
  return null;
}

function extractTimeHorizon(text: string): number | null {
  const lower = normalize(text);

  // "X years"
  const yearMatch = lower.match(/(\d+)\s*years?/);
  if (yearMatch) return parseInt(yearMatch[1], 10) * 12;

  // "X months"
  const monthMatch = lower.match(/(\d+)\s*months?/);
  if (monthMatch) return parseInt(monthMatch[1], 10);

  // "this year"
  if (lower.includes("this year")) {
    const remaining = 12 - new Date().getMonth();
    return remaining;
  }

  // "next year"
  if (lower.includes("next year")) return 12;

  return null;
}

function extractFrequency(text: string): ContentFrequency | null {
  const lower = normalize(text);
  for (const [keyword, freq] of Object.entries(FREQUENCY_KEYWORDS)) {
    if (lower.includes(keyword)) return freq;
  }
  return null;
}

function extractNiche(text: string, domainKeywords: string[]): string {
  let cleaned = normalize(text);

  // Remove common filler phrases
  const fillers = [
    /^(i want to|i'd like to|help me|can i|should i|how to|is it worth)\s+/,
    /^(start|launch|create|build|open|run|begin|make)\s+(a|an|my|the)\s+/,
    /^(start|launch|create|build|open|run|begin|make)\s+/,
    /\s+(business|venture|project|website|site|online)\s*$/,
    /\s+with\s+.*$/,       // "with $500 budget"
    /\s+in\s+\d+\s+.*$/,  // "in 6 months"
    /\s+for\s+\d+\s+.*$/, // "for 12 months"
    /\s+(as a|as my)\s+.*$/,
  ];

  for (const filler of fillers) {
    cleaned = cleaned.replace(filler, "");
  }

  // Remove matched domain keywords
  for (const kw of domainKeywords) {
    cleaned = cleaned.replace(new RegExp(`\\b${kw}\\b`, "gi"), "");
  }

  // Remove effort keywords
  for (const kw of Object.keys(EFFORT_KEYWORDS)) {
    cleaned = cleaned.replace(new RegExp(kw, "gi"), "");
  }

  // Remove budget patterns
  cleaned = cleaned.replace(/\$\s?[\d,]+\s?k?/gi, "");
  cleaned = cleaned.replace(/[\d,]+\s?(?:dollars|usd)/gi, "");

  // Remove time patterns
  cleaned = cleaned.replace(/\d+\s*(?:months?|years?)/gi, "");
  cleaned = cleaned.replace(/(?:this|next)\s+year/gi, "");

  // Remove frequency keywords
  for (const kw of Object.keys(FREQUENCY_KEYWORDS)) {
    cleaned = cleaned.replace(new RegExp(kw, "gi"), "");
  }

  // Clean up whitespace and trim
  cleaned = cleaned.replace(/\s+/g, " ").trim();

  // Remove leading/trailing common words
  cleaned = cleaned.replace(/^(a|an|the|about|on|in|for|my)\s+/i, "");
  cleaned = cleaned.replace(/\s+(a|an|the|about|on|in|for)$/i, "");

  cleaned = cleaned.trim();

  // Reject if the remaining text is just a stop word or too short to be a real niche
  const STOP_WORDS = new Set([
    "it", "this", "that", "i", "me", "we", "you", "they", "them",
    "is", "are", "was", "were", "be", "been", "do", "does", "did",
    "to", "of", "and", "or", "but", "so", "if", "not", "no", "yes",
    "up", "out", "off", "on", "at", "by", "from", "into", "with",
    "what", "how", "why", "when", "where", "who", "which",
    "good", "bad", "best", "worth", "money", "online", "internet",
    "thing", "things", "something", "anything", "nothing",
  ]);

  if (STOP_WORDS.has(cleaned.toLowerCase()) || cleaned.length < 2) {
    return "";
  }

  return cleaned;
}

// ─── Main parsing functions ───

export function parseNaturalLanguage(query: string): IntentResult {
  const { domain, matched: domainMatched } = detectDomain(query);
  const effort = extractEffort(query);
  const budget = extractBudget(query);
  const timeHorizon = extractTimeHorizon(query);
  const frequency = extractFrequency(query);
  const niche = extractNiche(query, domainMatched);

  // Calculate confidence based on how many params were explicitly provided
  let confidence = 1.0;

  if (domainMatched.length === 0) confidence -= 0.15;
  if (!effort) confidence -= 0.1;
  if (budget === null) confidence -= 0.05;
  if (timeHorizon === null) confidence -= 0.05;
  if (frequency === null) confidence -= 0.05;
  if (!niche) confidence -= 0.3;

  confidence = Math.max(0, Math.round(confidence * 100) / 100);

  const params: AnalysisParams = {
    domain,
    niche: niche || "",
    effort_level: effort || DEFAULTS.effort_level,
    budget: budget ?? DEFAULTS.budget,
    time_horizon: timeHorizon ?? DEFAULTS.time_horizon,
    content_frequency: frequency || DEFAULTS.content_frequency,
  };

  // Determine if clarification is needed
  const needsClarification = !niche || confidence < 0.4;
  let clarificationPrompt: string | undefined;

  if (!niche) {
    clarificationPrompt =
      "I couldn't identify a specific niche from your query. What topic or market would you like to analyze? (e.g., \"AI tools\", \"home fitness\", \"pet care\")";
  } else if (confidence < 0.4) {
    clarificationPrompt =
      `I parsed your query as "${niche}" in the ${domain} domain, but I'm not very confident. Could you confirm or rephrase your idea?`;
  }

  return {
    params,
    parsed_from: "natural_language",
    confidence,
    raw_query: query,
    needs_clarification: needsClarification,
    clarification_prompt: clarificationPrompt,
  };
}

export function parseStructuredForm(input: AnalyzeRequest): IntentResult {
  const params: AnalysisParams = {
    domain: input.domain || DEFAULTS.domain,
    niche: input.niche || input.query || "",
    effort_level: input.effort_level || DEFAULTS.effort_level,
    budget: input.budget ?? DEFAULTS.budget,
    time_horizon: input.time_horizon ?? DEFAULTS.time_horizon,
    content_frequency: input.content_frequency || DEFAULTS.content_frequency,
  };

  const needsClarification = !params.niche;

  return {
    params,
    parsed_from: "structured_form",
    confidence: 1.0,
    needs_clarification: needsClarification,
    clarification_prompt: needsClarification
      ? "Please provide a niche or topic to analyze."
      : undefined,
  };
}

/**
 * Main entry point — routes to NL or structured parser based on input shape.
 * If `query` is provided without `niche`, treat as natural language.
 * If `niche` is provided, treat as structured form input.
 */
export function parseIntent(input: AnalyzeRequest): IntentResult {
  if (input.niche) {
    return parseStructuredForm(input);
  }

  if (input.query) {
    return parseNaturalLanguage(input.query);
  }

  // Neither query nor niche provided
  return {
    params: { ...DEFAULTS },
    parsed_from: "structured_form",
    confidence: 0,
    needs_clarification: true,
    clarification_prompt:
      "Please provide a query or niche to analyze. For example: \"Start an AI tools blog\" or select a niche from the form.",
  };
}
