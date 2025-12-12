import requests
import os

class APIClient: 
    def __init__(self, base_url, token=None):
        self.base_url = base_url
        self.token = token
    
    def post(self, endpoint, payload):
        url = f'{self.base_url}{endpoint}'

        headers = {
            'Content-Type': 'application/json'
        }

        if self.token: 
            headers['Authorization'] = f'Bearer {self.token}'

        res = requests.post(url, json=payload, headers=headers)

        return res