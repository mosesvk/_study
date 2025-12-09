import json

with open('data/notes.txt', 'r') as f: 
    contents = f.read() 

# print(contents)

player = {
    'name': 'Mo', 
    'makes': 74, 
    'attempts': 100
}

with open('data/player.json', 'w') as f:
    json.dump(player, f, indent=2)