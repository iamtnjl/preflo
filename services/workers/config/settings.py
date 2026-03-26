import os
from pathlib import Path
from dotenv import load_dotenv

# Load .env from project root (3 levels up from config/)
_project_root = Path(__file__).resolve().parents[3]
load_dotenv(_project_root / ".env")


class Settings:
    DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://localhost:5432/preflo")
    REDIS_URL = os.getenv("REDIS_URL", "redis://localhost:6379")
    WORKER_PORT = int(os.getenv("WORKER_PORT", "5001"))
    WORKER_HOST = os.getenv("WORKER_HOST", "0.0.0.0")
    REDDIT_CLIENT_ID = os.getenv("REDDIT_CLIENT_ID", "")
    REDDIT_CLIENT_SECRET = os.getenv("REDDIT_CLIENT_SECRET", "")
    REDDIT_USER_AGENT = os.getenv("REDDIT_USER_AGENT", "Preflo/1.0")
    SERP_RATE_LIMIT = 10.0  # seconds between requests
    TRENDS_RATE_LIMIT = 5.0  # seconds between requests
    SCRAPE_INTERVAL = 300  # 5 min between background scrape cycles


settings = Settings()
