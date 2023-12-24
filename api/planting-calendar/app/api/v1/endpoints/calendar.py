from fastapi import APIRouter

router_v1 = APIRouter()

from app.api.controller.calendar import CalendarController

@router_v1.get("/calendar", tags=["calendar"])
def get_calendar():
  return CalendarController().get_calendar_controller()
