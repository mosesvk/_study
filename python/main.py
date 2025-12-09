import json

with open('data/config.txt', 'r') as f: 
    contents = f.read()

# print(contents)

data = {
    'player': 'john', 
    'points': 32, 
    'rebounds': 5,
    'assists': 7
}

try: 
    with open('data/game_stats.json', 'w') as f: 
        json.dump(data, f, indent=2)

    print('\nReponse saved to data/player.json')

except ValueError: 
    print("Not valid JSON from server:")
    print(res.text)

