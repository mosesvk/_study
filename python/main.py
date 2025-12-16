# main.py

from dotenv import load_dotenv
import os
from utils.api_client import APIClient
from utils.qb_payloads import build_upsert

load_dotenv()

client = APIClient(
    base_url=os.getenv("QB_API_URL"),
    token=os.getenv("QB_TOKEN")
)

payload = build_upsert(
    table_id="abc123",
    fields={"name": "Mo", "points": 24}
)

response = client.post("/records", payload)

print(response.status_code)
print(response.json())
