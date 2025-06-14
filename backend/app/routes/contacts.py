from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.schemas.contact import Contact, ContactCreate
from app.models.contact import Contact as ContactModel
from app.database import SessionLocal, Base, engine
from typing import List

# Create tables (only once)
Base.metadata.create_all(bind=engine)

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/", response_model=List[Contact])
def read_contacts(db: Session = Depends(get_db)):
    return db.query(ContactModel).all()

@router.post("/", response_model=Contact, status_code=201)
def create_contact(contact: ContactCreate, db: Session = Depends(get_db)):
    db_contact = ContactModel(**contact.model_dump(exclude_unset=True))
    db.add(db_contact)
    db.commit()
    db.refresh(db_contact)
    return db_contact

@router.delete("/{contact_id}", status_code=204)
def delete_contact(contact_id: int, db: Session = Depends(get_db)):
    contact = db.query(ContactModel).get(contact_id)
    if contact is None:
        raise HTTPException(status_code=404, detail="Contact not found")
    db.delete(contact)
    db.commit()
    return None
