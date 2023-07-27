from main import app
from fastapi.testclient import TestClient
from app.constants.endpoints import version, endpoint

client = TestClient(app)

def test_read_main():
  response = client.get(f"{version['V1']}/{endpoint['HELLO_WORLD']}")
  assert response.status_code == 200
  assert response.json() == { "Hello": "World V1" }
