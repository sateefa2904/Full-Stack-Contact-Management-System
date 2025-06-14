from sqlalchemy import Column, Integer, String
from app.database import Base  # make sure this comes from your database.py

class Contact(Base):
    __tablename__ = "contacts"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    notes = Column(String, nullable=True)
