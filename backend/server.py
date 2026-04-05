from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import asyncio
from pathlib import Path
from pydantic import BaseModel
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend setup
RESEND_API_KEY = os.environ.get('RESEND_API_KEY', '')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
NOTIFICATION_EMAIL = os.environ.get('NOTIFICATION_EMAIL', 'hello@24x7solution.in')

app = FastAPI()
api_router = APIRouter(prefix="/api")

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


# ─── Email Helper ─────────────────────────────────────

async def send_notification_email(subject, html_content):
    """Send notification email via Resend. Non-blocking, fire-and-forget."""
    if not RESEND_API_KEY or RESEND_API_KEY == 'placeholder':
        logger.info(f"Email skipped (no API key): {subject}")
        return
    try:
        import resend
        resend.api_key = RESEND_API_KEY
        params = {
            "from": SENDER_EMAIL,
            "to": [NOTIFICATION_EMAIL],
            "subject": subject,
            "html": html_content,
        }
        result = await asyncio.to_thread(resend.Emails.send, params)
        logger.info(f"Email sent: {subject} (id: {result.get('id', 'unknown')})")
    except Exception as e:
        logger.error(f"Email send failed: {e}")


def build_lead_email(source, data):
    """Build HTML email for a new lead notification."""
    rows = ""
    for key, val in data.items():
        if key in ("id", "created_at", "source", "_id"):
            continue
        if isinstance(val, list):
            val = ", ".join(val)
        rows += f"<tr><td style='padding:8px 12px;border-bottom:1px solid #1E1E2E;color:#6B7280;font-size:13px;'>{key.replace('_',' ').title()}</td><td style='padding:8px 12px;border-bottom:1px solid #1E1E2E;color:#F0F0FF;font-size:13px;'>{val or '-'}</td></tr>"

    return f"""
    <div style="font-family:'DM Sans',Arial,sans-serif;background:#0A0A0F;padding:32px;">
      <div style="max-width:560px;margin:0 auto;background:#111118;border:1px solid #1E1E2E;border-radius:12px;overflow:hidden;">
        <div style="padding:24px 24px 16px;border-bottom:1px solid #1E1E2E;">
          <span style="color:#00FF88;font-weight:700;font-size:20px;">24x7</span>
          <span style="color:#F0F0FF;font-weight:500;font-size:16px;margin-left:4px;">Solution</span>
          <span style="display:block;color:#6B7280;font-size:12px;margin-top:4px;">New {source} Submission</span>
        </div>
        <div style="padding:16px 24px;">
          <table style="width:100%;border-collapse:collapse;">{rows}</table>
        </div>
        <div style="padding:16px 24px;border-top:1px solid #1E1E2E;">
          <span style="color:#6B7280;font-size:11px;">Sent by 24x7 Solution Lead Notification System</span>
        </div>
      </div>
    </div>
    """


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
    # Fire-and-forget email notification
    asyncio.create_task(send_notification_email(
        f"New Contact: {data.name} ({data.company})",
        build_lead_email("Contact Form", doc)
    ))
    return {"success": True, "message": "We'll get back to you within 2 hours."}

@api_router.post("/audit")
async def submit_audit(data: AuditSubmission):
    doc = data.model_dump()
    doc["id"] = str(uuid.uuid4())
    doc["created_at"] = datetime.now(timezone.utc).isoformat()
    doc["source"] = "free_audit"
    await db.leads.insert_one(doc)
    logger.info(f"Free audit request from {data.email}")
    asyncio.create_task(send_notification_email(
        f"New Audit Request: {data.name}",
        build_lead_email("Free Audit", doc)
    ))
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
