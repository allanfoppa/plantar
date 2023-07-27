from sys import prefix
from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from app.api.config.tags_metadata import tags_metadata

from app.api.v1.routes import api_router_v1
from app.api.v2.routes import api_router_v2

app = FastAPI (
  title="Planting Calendar API",
  summary="A site who teach how planting",
  version="1.0.0",
  contact={
    "name": "Allan Foppa",
    "email": "allanfoppa.dev@gmail.com",
  },
  openapi_tags=tags_metadata
)

app.add_middleware (
  CORSMiddleware,
  allow_origins=["*"],
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)

app.include_router(api_router_v1, prefix="/api/v1")
app.include_router(api_router_v2, prefix="/api/v2")
