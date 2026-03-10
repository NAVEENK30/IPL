import re
import json

script_path = "c:/Users/Naveen/.gemini/antigravity/scratch/ipl_auction_slides/script.js"

with open(script_path, "r", encoding="utf-8") as f:
    content = f.read()

# Extract the JSON object from the JS file
match = re.search(r"const playersDB = (\{.*?\});", content, re.DOTALL)
if not match:
    print("Could not find playersDB in script.js")
    exit(1)

js_obj_str = match.group(1)
# Convert JS object syntax to valid JSON... wait, the keys are quoted, but properties are probably not quoted.
# Let's fix property names: name:, role:, price:, rating:, country:
js_obj_str = re.sub(r'(\{|,)\s*([a-zA-Z0-9_]+)\s*:', r'\1 "\2":', js_obj_str)
# It might have trailing commas, let's remove trailing commas in arrays
js_obj_str = re.sub(r',\s*\]', ']', js_obj_str)
js_obj_str = re.sub(r',\s*\}', '}', js_obj_str)

players_db = json.loads(js_obj_str)

user_data = """
BATSMEN
₹2 Crore
Virat Kohli
Rohit Sharma
David Warner
Kane Williamson
Faf du Plessis
₹1.5 Crore
Shubman Gill
Suryakumar Yadav
Jos Buttler
Devon Conway
Travis Head
₹1 Crore
Ruturaj Gaikwad
Shreyas Iyer
Tilak Varma
Rajat Patidar
Glenn Phillips
Jason Roy
Nitish Rana
Rahul Tripathi
Mayank Agarwal
Devdutt Padikkal
₹75 Lakh
Yashasvi Jaiswal
Rinku Singh
Sai Sudharsan
Shimron Hetmyer
Nicholas Pooran
Rovman Powell
Ajinkya Rahane
Manish Pandey
Abhishek Sharma
₹50 Lakh
Prithvi Shaw
Riyan Parag
Abdul Samad
Shahrukh Khan
Sarfaraz Khan
Anmolpreet Singh
Mandeep Singh
Karun Nair
Cheteshwar Pujara
₹20 Lakh
Yash Dhull
Priyam Garg
Nehal Wadhera
Abhinav Manohar
Ayush Badoni

WICKETKEEPERS
₹2 Crore
MS Dhoni
Rishabh Pant
KL Rahul
₹1.5 Crore
Sanju Samson
Jos Buttler
Heinrich Klaasen
Quinton de Kock
₹1 Crore
Ishan Kishan
Phil Salt
Jonny Bairstow
Dinesh Karthik
Nicholas Pooran
₹75 Lakh
Jitesh Sharma
Dhruv Jurel
Wriddhiman Saha
KS Bharat
₹50 Lakh
Prabhsimran Singh
Anuj Rawat
Narayan Jagadeesan
Tim Seifert
Matthew Wade
Sam Billings
₹20 Lakh
Vishnu Vinod
Upendra Yadav
Abishek Porel

ALL-ROUNDERS
₹2 Crore
Hardik Pandya
Ravindra Jadeja
Andre Russell
Glenn Maxwell
Rashid Khan
₹1.5 Crore
Axar Patel
Cameron Green
Marcus Stoinis
Mitchell Marsh
Sam Curran
Liam Livingstone
₹1 Crore
Moeen Ali
Ben Stokes
Wanindu Hasaranga
Sunil Narine
Jason Holder
Aiden Markram
₹75 Lakh
Krunal Pandya
Washington Sundar
Shardul Thakur
Rahul Tewatia
Shahbaz Ahmed
Harpreet Brar
₹50 Lakh
Rishi Dhawan
Lalit Yadav
Ramandeep Singh
Anukul Roy
Swapnil Singh
Karn Sharma
₹20 Lakh
Dwaine Pretorius
Andile Phehlukwayo
Romario Shepherd
Fabian Allen
Odean Smith
Mohammad Nabi
Shakib Al Hasan

BOWLERS
₹2 Crore
Jasprit Bumrah
Mohammed Shami
Pat Cummins
Kagiso Rabada
Yuzvendra Chahal
₹1.5 Crore
Mitchell Starc
Trent Boult
Anrich Nortje
Josh Hazlewood
₹1 Crore
Kuldeep Yadav
Arshdeep Singh
Bhuvneshwar Kumar
Ravi Bishnoi
Varun Chakaravarthy
₹75 Lakh
Harshal Patel
Avesh Khan
Prasidh Krishna
T Natarajan
Mohammed Siraj
Mukesh Kumar
₹50 Lakh
Ishant Sharma
Umesh Yadav
Khaleel Ahmed
Chetan Sakariya
Jaydev Unadkat
Umran Malik
Yash Dayal
Akash Madhwal
Simarjeet Singh
Rahul Chahar
₹20 Lakh
Adam Zampa
Mujeeb Ur Rahman
Fazalhaq Farooqi
Naveen-ul-Haq
Noor Ahmad
Maheesh Theekshana
Matheesha Pathirana
Dushmantha Chameera
Mustafizur Rahman
Alzarri Joseph
Obed McCoy
Akeal Hosein
Reece Topley
Mark Wood
Adil Rashid
Chris Jordan
Tymal Mills
Lockie Ferguson
Matt Henry
Ish Sodhi
"""

new_order = {
    "Batsmen": [],
    "Wicketkeepers": [],
    "All-rounders": [],
    "Bowlers": []
}

current_cat = None
current_price = None

for line in user_data.strip().split('\n'):
    line = line.strip()
    if not line: continue
    if "BATSMEN" in line:
        current_cat = "Batsmen"
    elif "WICKETKEEPERS" in line:
        current_cat = "Wicketkeepers"
    elif "ALL-ROUNDERS" in line:
        current_cat = "All-rounders"
    elif "BOWLERS" in line:
        current_cat = "Bowlers"
    elif line.startswith("₹"):
        current_price = line.replace("₹", "").strip()
    else:
        # Player name
        new_order[current_cat].append((line, current_price))

old_db = players_db
new_db = {
    "Batsmen": [],
    "Wicketkeepers": [],
    "All-rounders": [],
    "Bowlers": []
}

# Keep track of handled players
handled = set()

# Process new order
for cat in ["Batsmen", "Wicketkeepers", "All-rounders", "Bowlers"]:
    old_list = old_db[cat]
    for name, price in new_order[cat]:
        # find in old lists
        found = False
        fallback = None
        for p in old_list:
            if p['name'] == name:
                p['price'] = price
                new_db[cat].append(p)
                handled.add(name)
                found = True
                break
        if not found:
            # maybe found in another category?
            for ocat in ["Batsmen", "Wicketkeepers", "All-rounders", "Bowlers"]:
                if found: break
                for p in old_db[ocat]:
                    if p['name'] == name:
                        # Clone and update
                        clone = dict(p)
                        clone['price'] = price
                        new_db[cat].append(clone)
                        handled.add(name)
                        found = True
                        break
            if not found:
                print(f"Player {name} not found in any category!")

# append remaining players that were not explicitly listed and handled
for cat in ["Batsmen", "Wicketkeepers", "All-rounders", "Bowlers"]:
    for p in old_db[cat]:
        if p['name'] not in handled:
            new_db[cat].append(p)
            handled.add(p['name'])  # Ensure not added multiple times if duplicated

# generate new JS string
def format_player(p):
    return f'        {{ name: "{p["name"]}", role: "{p["role"]}", price: "{p["price"]}", rating: {p["rating"]}, country: "{p.get("country", "")}" }}'

new_js = "const playersDB = {\n"
for idx, cat in enumerate(["Batsmen", "Wicketkeepers", "All-rounders", "Bowlers"]):
    new_js += f'    "{cat}": [\n'
    player_strs = [format_player(p) for p in new_db[cat]]
    new_js += ",\n".join(player_strs)
    new_js += "\n    ]"
    if idx < 3:
        new_js += ",\n"
    else:
        new_js += "\n"
new_js += "};"

content = content[:match.start()] + new_js + content[match.end():]

with open(script_path, "w", encoding="utf-8") as f:
    f.write(content)
print("Updated script.js successfully!")
