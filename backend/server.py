from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


# ─── Models ───────────────────────────────────────────

class ContactSubmission(BaseModel):
    name: str
    email: str
    company: str
    website: Optional[str] = None
    country: str
    budget: str
    services: List[str]
    message: Optional[str] = None

class AuditSubmission(BaseModel):
    name: str
    email: str
    website: str
    spend: str
    country: str

class NewsletterSubmission(BaseModel):
    email: str


# ─── Routes ───────────────────────────────────────────

@api_router.get("/")
async def root():
    return {"message": "24x7 Solution API", "status": "live"}

@api_router.post("/contact")
async def submit_contact(data: ContactSubmission):
    doc = data.model_dump()
    doc["id"] = str(uuid.uuid4())
    doc["created_at"] = datetime.now(timezone.utc).isoformat()
    doc["source"] = "contact_form"
    await db.leads.insert_one(doc)
    logger.info(f"Contact form submission from {data.email}")
    return {"success": True, "message": "We'll get back to you within 2 hours."}

@api_router.post("/audit")
async def submit_audit(data: AuditSubmission):
    doc = data.model_dump()
    doc["id"] = str(uuid.uuid4())
    doc["created_at"] = datetime.now(timezone.utc).isoformat()
    doc["source"] = "free_audit"
    await db.leads.insert_one(doc)
    logger.info(f"Free audit request from {data.email}")
    return {"success": True, "message": "Your audit request has been received."}

@api_router.post("/newsletter")
async def submit_newsletter(data: NewsletterSubmission):
    doc = data.model_dump()
    doc["id"] = str(uuid.uuid4())
    doc["subscribed_at"] = datetime.now(timezone.utc).isoformat()
    await db.newsletter_subscribers.insert_one(doc)
    logger.info(f"Newsletter subscription: {data.email}")
    return {"success": True, "message": "Subscribed successfully."}

@api_router.get("/leads")
async def get_leads():
    leads = await db.leads.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    return {"leads": leads, "total": len(leads)}

@api_router.get("/newsletter/subscribers")
async def get_subscribers():
    subs = await db.newsletter_subscribers.find({}, {"_id": 0}).sort("subscribed_at", -1).to_list(500)
    return {"subscribers": subs, "total": len(subs)}


# ─── App Setup ────────────────────────────────────────

app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
