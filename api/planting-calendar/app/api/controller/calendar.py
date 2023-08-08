
from app.api.services.calendar import CalendarService

class CalendarController:

  def __init__(self) -> None:
    pass

  def get_calendar_controller(self):
    return CalendarService().get_calendar_service()
