import re

with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

players = re.findall(r'\{ name: "(.*?)",', content)
for i, p in enumerate(players):
    if i+1 in (129, 206):
        print(f"Player {i+1}: {p}")
