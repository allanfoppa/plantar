from datetime import datetime

from pydantic import BaseModel, Json

class PlantingCalendar(BaseModel):

  id: int
  region: str
  period: str
  crops: Json[str]
