from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime, timezone
import os, uuid, logging, asyncio
from dotenv import load_dotenv

load_dotenv()

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB
MONGO_URL = os.environ.get("MONGO_URL", "")
DB_NAME = os.environ.get("DB_NAME", "24x7solution")

client = None
db = None

@app.on_event("startup")
async def startup():
    global client, db
    if MONGO_URL:
        client = AsyncIOMotorClient(MONGO_URL)
        db = client[DB_NAME]
        logger.info("MongoDB connected")
    else:
        logger.warning("No MONGO_URL set")

@app.on_event("shutdown")
async def shutdown():
    if client:
        client.close()

# Resend email
async def send_email(subject, html):
    api_key = os.environ.get("RESEND_API_KEY", "")
    if not api_key or api_key == "placeholder":
        return
    try:
        import resend
        resend.api_key = api_key
        await asyncio.to_thread(resend.Emails.send, {
            "from": os.environ.get("SENDER_EMAIL", "onboarding@resend.dev"),
            "to": [os.environ.get("NOTIFICATION_EMAIL", "hello@24x7solution.in")],
            "subject": subject,
            "html": html,
        })
    except Exception as e:
        logger.error(f"Email error: {e}")

# Models
class ContactForm(BaseModel):
    name: str
    email: str
    company: str
    website: Optional[str] = None
    country: str
    budget: str
    services: List[str]
    message: Optional[str] = None

class AuditForm(BaseModel):
    name: str
    email: str
    website: str
    spend: str
    country: str

class NewsletterForm(BaseModel):
    email: str

# Routes
@app.get("/api")
async def root():
    return {"message": "24x7 Solution API is live", "status": "ok"}

@app.get("/api/health")
async def health():
    return {"status": "healthy"}

@app.post("/api/contact")
async def contact(data: ContactForm):
    if db is not None:
        doc = data.model_dump()
        doc["id"] = str(uuid.uuid4())
        doc["created_at"] = datetime.now(timezone.utc).isoformat()
        doc["source"] = "contact"
        await db.leads.insert_one(doc)
    asyncio.create_task(send_email(
        f"New Contact: {data.name}",
        f"<p>{data.name} from {data.company} ({data.country}) wants to talk.</p><p>Email: {data.email}</p><p>Budget: {data.budget}</p>"
    ))
    return {"success": True, "message": "We'll reply within 2 hours."}

@app.post("/api/audit")
async def audit(data: AuditForm):
    if db is not None:
        doc = data.model_dump()
        doc["id"] = str(uuid.uuid4())
        doc["created_at"] = datetime.now(timezone.utc).isoformat()
        doc["source"] = "audit"
        await db.leads.insert_one(doc)
    asyncio.create_task(send_email(
        f"New Audit Request: {data.name}",
        f"<p>{data.name} wants a free audit.</p><p>Email: {data.email}</p><p>Website: {data.website}</p><p>Spend: {data.spend}</p>"
    ))
    return {"success": True, "message": "Audit request received."}

@app.post("/api/newsletter")
async def newsletter(data: NewsletterForm):
    if db is not None:
        await db.newsletter.insert_one({
            "email": data.email,
            "id": str(uuid.uuid4()),
            "subscribed_at": datetime.now(timezone.utc).isoformat()
        })
    return {"success": True, "message": "Subscribed!"}

@app.get("/api/leads")
async def leads():
    if db is None:
        return {"leads": [], "total": 0}
    data = await db.leads.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    return {"leads": data, "total": len(data)}

@app.get("/api/newsletter/subscribers")
async def subscribers():
    if db is None:
        return {"subscribers": [], "total": 0}
    data = await db.newsletter.find({}, {"_id": 0}).to_list(500)
    return {"subscribers": data, "total": len(data)}
