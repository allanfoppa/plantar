from fastapi import APIRouter

router_v1 = APIRouter()

@router_v1.get("/hello-world", tags=["hello-world"])
def read_root():
  return { "Hello": "World V1" }

@router_v1.get("/hello-world-2", tags=["hello-world-2"])
def read_root_2():
  return { "Hello": "World V1-2" }
