import json
from dotenv import load_dotenv
import os
import requests
from pprint import pprint

with open('data/config.txt', 'r') as f: 
    contents = f.read()

# print(contents)

data = {
    'player': 'john', 
    'points': 32, 
    'rebounds': 5,
    'assists': 7
}

# try: 
#     with open('data/game_stats.json', 'w') as f: 
#         json.dump(data, f, indent=2)
#     print('\nReponse saved to data/player.json')

# except ValueError: 
#     print("Not valid JSON from server:")
#     print(res.text)

load_dotenv()


url = os.getenv('REQ_URL')


payload = {
    'action': 'qb_upsert', 
    'records': 5
}

res = requests.post(url, json=payload)

# try: 
#     data = res.json() 
#     print('status code:', res.status_code)
#     pprint(data)

# except ValueError:
#     print('Not valid Server response') 
#     print(res.text)


api_key = os.getenv('API_KEY')

if api_key: 
    print('API_KEY loaded ✅')
else: 
    print 'missing API_KEY ❌'