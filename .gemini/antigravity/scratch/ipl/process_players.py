import re
import json

def parse_old_script(js_content):
    # Extracts the JS object
    match = re.search(r'const playersDB = (\{.*?\});', js_content, re.DOTALL)
    if not match:
        print("Could not find playersDB in script.js")
        return {}
    
    js_obj_str = match.group(1)
    
    # Convert JS object to JSON
    # Add quotes around keys
    json_str = re.sub(r'(\w+):', r'"\1":', js_obj_str)
    # Fix single quotes to double quotes if any (though looks like double quotes are used)
    # But names might have single quotes? E.g. Mohd. Arshad Khan
    
    # Safer parsing for this specific format
    old_db = {}
    lines = js_content.split('\n')
    current_cat = None
    for line in lines:
        cat_match = re.search(r'"(.*?)": \[', line)
        if cat_match:
            current_cat = cat_match.group(1)
            old_db[current_cat] = []
            continue
            
        player_match = re.search(r'\{ name: "(.*?)", role: "(.*?)", price: "(.*?)", rating: (.*?), country: "(.*?)" \}', line)
        if player_match:
            old_db[current_cat].append({
                'name': player_match.group(1),
                'role': player_match.group(2),
                'price': player_match.group(3),
                'rating': float(player_match.group(4)),
                'country': player_match.group(5)
            })
    return old_db

def parse_user_input(txt_content):
    lines = txt_content.strip().split('\n')
    new_db = {
        "Batsmen": [],
        "Wicketkeepers": [],
        "All-rounders": [],
        "Bowlers": []
    }
    
    current_cat = None
    current_price = None
    
    for line in lines:
        line = line.strip()
        if not line:
            continue
            
        if '*🏏 BATSMEN' in line:
            current_cat = "Batsmen"
        elif '*🧤 WICKETKEEPERS' in line:
            current_cat = "Wicketkeepers"
        elif '*🔄 ALL-ROUNDERS' in line:
            current_cat = "All-rounders"
        elif '*🎯 BOWLERS' in line:
            current_cat = "Bowlers"
        elif line.startswith('💰'):
            # e.g., 💰 ₹2 CRORE -> 2 Crore, 💰 ₹75 LAKH -> 75 Lakh
            raw_price = line.replace('💰', '').replace('₹', '').strip()
            parts = raw_price.split()
            if len(parts) == 2:
                val, unit = parts
                current_price = f"{val} {unit.capitalize()}"
        else:
            # It's a player name
            if current_cat and current_price:
                new_db[current_cat].append({
                    'name': line,
                    'price': current_price
                })
                
    return new_db

def main():
    with open('script.js', 'r', encoding='utf-8') as f:
        js_content = f.read()
        
    old_db = parse_old_script(js_content)
    
    # Create a flat map of name -> attributes from old DB
    old_players_map = {}
    for cat, players in old_db.items():
        for p in players:
            old_players_map[p['name'].lower()] = p

    with open('user_input.txt', 'r', encoding='utf-8') as f:
        txt_content = f.read()
        
    new_db = parse_user_input(txt_content)
    
    # Defaults
    defaults = {
        "Batsmen": {"role": "BATTER", "rating": 3.5, "country": "India"},
        "Wicketkeepers": {"role": "KEEPER", "rating": 3.5, "country": "India"},
        "All-rounders": {"role": "ALL-ROUNDER", "rating": 3.5, "country": "India"},
        "Bowlers": {"role": "BOWLER", "rating": 3.5, "country": "India"}
    }
    
    final_db = {
        "Batsmen": [],
        "Wicketkeepers": [],
        "All-rounders": [],
        "Bowlers": []
    }
    
    # Special overrides that might be missed or known
    hard_overrides = {
        "shivam dube": {"role": "POWER HITTER", "rating": 4.5, "country": "India"},
        "ravindra jadeja": {"role": "SPIN ALL-ROUNDER", "rating": 4.9, "country": "India"}
    }
    
    all_players_flat = []
    
    for cat, players in new_db.items():
        for p in players:
            name = p['name']
            name_lower = name.lower()
            price = p['price']
            
            # Lookup in old
            if name_lower in old_players_map:
                old_p = old_players_map[name_lower]
                final_p = {
                    "name": name,
                    "role": old_p['role'],
                    "price": price,
                    "rating": old_p['rating'],
                    "country": old_p['country']
                }
            elif name_lower in hard_overrides:
                final_p = {
                    "name": name,
                    "role": hard_overrides[name_lower]['role'],
                    "price": price,
                    "rating": hard_overrides[name_lower]['rating'],
                    "country": hard_overrides[name_lower]['country']
                }
            else:
                final_p = {
                    "name": name,
                    "role": defaults[cat]['role'],
                    "price": price,
                    "rating": defaults[cat]['rating'],
                    "country": defaults[cat]['country']
                }
            final_db[cat].append(final_p)
            all_players_flat.append(name)

    # Generate the JS String
    js_out = "const playersDB = {\n"
    for cat, players in final_db.items():
        js_out += f'    "{cat}": [\n'
        for i, p in enumerate(players):
            comma = "," if i < len(players) - 1 else ""
            js_out += f'        {{ name: "{p["name"]}", role: "{p["role"]}", price: "{p["price"]}", rating: {p["rating"]}, country: "{p["country"]}" }}{comma}\n'
        js_out += "    ],\n"
    # Remove last comma
    js_out = js_out.rstrip(",\n") + "\n"
    js_out += "};\n"
    
    # Replace in script.js
    new_script = re.sub(r'const playersDB = \{.*?\};', js_out, js_content, flags=re.DOTALL)
    
    with open('script.js', 'w', encoding='utf-8') as f:
        f.write(new_script)
        
    print(f"Total players in updated DB: {len(all_players_flat)}")
    print("Players processed:")
    for p in all_players_flat:
        if p.lower() == "shivam dube":
            print("Found Shivam Dube!")
            
    # Save missing_players.txt for image downloader
    with open('missing_players.txt', 'w', encoding='utf-8') as f:
        for p in all_players_flat:
            f.write(f"{p}\n")
            
    print("Updated script.js and generated missing_players.txt")

if __name__ == "__main__":
    main()
