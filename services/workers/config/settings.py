import os
from dotenv import load_dotenv
load_dotenv()
class Settings:
    DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://localhost:5432/ife")
    REDIS_URL = os.getenv("REDIS_URL", "redis://localhost:6379")
    AWS_REGION = os.getenv("AWS_REGION", "us-east-1")
    SQS_QUEUE_URL = os.getenv("SQS_QUEUE_URL", "")
    S3_BUCKET = os.getenv("S3_BUCKET", "ife-raw-data")
    REDDIT_CLIENT_ID = os.getenv("REDDIT_CLIENT_ID", "")
    REDDIT_CLIENT_SECRET = os.getenv("REDDIT_CLIENT_SECRET", "")
    REDDIT_USER_AGENT = os.getenv("REDDIT_USER_AGENT", "IFE/1.0")
    SERP_RATE_LIMIT = 10.0
    TRENDS_RATE_LIMIT = 5.0
settings = Settings()
