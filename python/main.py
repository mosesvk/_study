import json

with open('data/input.json') as f:
    data = json.load(f)

with open("data/output.json", "w") as f:
    json.dump(data, f, indent=2)

json.load()
json.dumps()
json.dump()