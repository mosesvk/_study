import json
import requests
from dotenv import load_dotenv
import os 

load_dotenv() 

API_URL = os.getenv('API_URL')

with open('data/input.json') as f: 
    data = json.load(f)

print('Loaded input data:', data)

res = requests.post(API_URL, json=data)

print('Status:', res.status_code)
print('Res JSON:', res.json())

with open('data/output.json', 'w') as f:
    json.dump(res.json(), f, indent=2)

print('Output saved to data/output.json')