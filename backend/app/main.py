from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import contacts

app = FastAPI()

# ✅ Allow frontend to talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # OR replace "*" with ["http://localhost:5187"] if you want to be strict
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Register the contact routes
app.include_router(contacts.router, prefix="/contacts", tags=["contacts"])
