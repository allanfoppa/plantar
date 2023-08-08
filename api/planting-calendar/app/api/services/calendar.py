
from app.api.repositories.calendar import CalendarRepository

class CalendarService:

  def __init__(self) -> None:
    pass

  def get_calendar_service(self):
    return CalendarRepository().get_calendar_repository()
