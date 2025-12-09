import json

with open('data/notes.txt', 'r') as f: 
    contents = f.read() 

# print(contents)

player = {
    'name': 'Mo', 
    'makes': 74, 
    'attempts': 100
}

# with open('data/player.json', 'w') as f:
#     json.dump(player, f, indent=2)

import requests
from dotenv import load_dotenv
import os
from pprint import pprint


load_dotenv()

url = os.getenv('REQ_URL')

payload = {
    'action': 'test', 
    'value': 123
}

res = requests.post(url, json=payload)

print('status code:', res.status_code)
try:
    data = res.json() 
    print("Response JSON:")
    pprint(data)

    with open('data/player.json', 'w') as f: 
        json.dump(data, f, indent=2)

    print('\nReponse saved to data/player.json')
except ValueError:
    print("Not valid JSON from server:")
    print(res.text)


qb_token = os.getenv('QB_TOKEN')

if qb_token: 
    print('Token Found')
else: 
    print('QB_TOKEN not found')