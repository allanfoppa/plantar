from decimal import Decimal
from sqlalchemy import Column, JSON, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base  = declarative_base()

class PlantingCalendar(Base):
  __tablename__ = 'planting_calendar'

  id = Column(Integer, primary_key=True, index=True)
  region = Column(String)
  period = Column(String)
  crops = Column(JSON)
