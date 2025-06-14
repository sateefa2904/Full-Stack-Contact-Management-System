from pydantic import BaseModel, EmailStr
from typing import Optional

class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    notes: Optional[str] = None

class Contact(ContactCreate):
    id: int

    model_config = {
        "from_attributes": True  # Required for Pydantic v2 instead of orm_mode
    }
