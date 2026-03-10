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
js_obj_str = re.sub(r'(\{|,)\s*([a-zA-Z0-9_]+)\s*:', r'\1 "\2":', js_obj_str)
js_obj_str = re.sub(r',\s*\]', ']', js_obj_str)
js_obj_str = re.sub(r',\s*\}', '}', js_obj_str)

players_db = json.loads(js_obj_str)

user_data = """
BATSMEN (MERGED)
💰 ₹2 CRORE
Virat Kohli
Rohit Sharma
David Warner
Kane Williamson
Faf du Plessis
Dewald Brevis
💰 ₹1.5 CRORE
Shubman Gill
Suryakumar Yadav
Jos Buttler
Devon Conway
Travis Head
Sherfane Rutherford
💰 ₹1 CRORE
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
💰 ₹75 LAKH
Yashasvi Jaiswal
Rinku Singh
Sai Sudharsan
Shimron Hetmyer
Rovman Powell
Ajinkya Rahane
Manish Pandey
Abhishek Sharma
Angkrish Raghuvanshi
💰 ₹50 LAKH
Prithvi Shaw
Riyan Parag
Abdul Samad
Shahrukh Khan
Sarfaraz Khan
Anmolpreet Singh
Mandeep Singh
Karun Nair
Cheteshwar Pujara
Gurnoor Singh Brar
Robin Minz
Shubham Dubey
Aniket Verma
💰 ₹20 LAKH
Yash Dhull
Priyam Garg
Abhinav Manohar
Ayush Badoni
Ajay Mandal
Ashutosh Sharma
Madhav Tiwari
Himmat Singh
Harnoor Pannu
Mitch Owen
Musheer Khan
Priyansh Arya
Pyla Avinash
Suryansh Shedge
Vaibhav Suryavanshi
Ayush Mhatre

WICKETKEEPERS (MERGED)
💰 ₹2 CRORE
MS Dhoni
Rishabh Pant
KL Rahul
💰 ₹1.5 CRORE
Sanju Samson
Heinrich Klaasen
Quinton de Kock
Ryan Rickelton
💰 ₹1 CRORE
Ishan Kishan
Phil Salt
Jonny Bairstow
Dinesh Karthik
💰 ₹75 LAKH
Jitesh Sharma
Dhruv Jurel
Wriddhiman Saha
KS Bharat
💰 ₹50 LAKH
Prabhsimran Singh
Anuj Rawat
Narayan Jagadeesan
Tim Seifert
Matthew Wade
Sam Billings
💰 ₹20 LAKH
Vishnu Vinod
Upendra Yadav
Abishek Porel
Kumar Kushagra
Donovan Ferreira
Urvil Patel

ALL-ROUNDERS (MERGED)
💰 ₹2 CRORE
Hardik Pandya
Ravindra Jadeja
Andre Russell
Glenn Maxwell
Rashid Khan
Mitchell Santner
Will Jacks
Azmatullah Omarzai
💰 ₹1.5 CRORE
Axar Patel
Cameron Green
Marcus Stoinis
Mitchell Marsh
Sam Curran
Liam Livingstone
Jamie Overton
💰 ₹1 CRORE
Moeen Ali
Ben Stokes
Wanindu Hasaranga
Sunil Narine
Jason Holder
Aiden Markram
Jayant Yadav
Shreyas Gopal
Kamindu Mendis
💰 ₹75 LAKH
Krunal Pandya
Washington Sundar
Shardul Thakur
Rahul Tewatia
Shahbaz Ahmed
Harpreet Brar
💰 ₹50 LAKH
Rishi Dhawan
Lalit Yadav
Ramandeep Singh
Anukul Roy
Swapnil Singh
Karn Sharma
Nishant Sindhu
R. Sai Kishore
Raj Angad Bawa
💰 ₹20 LAKH
Dwaine Pretorius
Andile Phehlukwayo
Romario Shepherd
Fabian Allen
Odean Smith
Mohammad Nabi
Shakib Al Hasan
Manav Suthar
Matthew Breetzke
Allah Ghazanfar
Jacob Bethell
Nitish Kumar Reddy
Smaran Ravichandaran

BOWLERS (MERGED)
💰 ₹2 CRORE
Jasprit Bumrah
Mohammed Shami
Pat Cummins
Kagiso Rabada
Yuzvendra Chahal
💰 ₹1.5 CRORE
Mitchell Starc
Trent Boult
Anrich Nortje
Josh Hazlewood
Nathan Ellis
💰 ₹1 CRORE
Kuldeep Yadav
Arshdeep Singh
Bhuvneshwar Kumar
Ravi Bishnoi
Varun Chakaravarthy
Mayank Markande
Brydon Carse
💰 ₹75 LAKH
Harshal Patel
Avesh Khan
Prasidh Krishna
T Natarajan
Mohammed Siraj
Mukesh Kumar
Harshit Rana
Vaibhav Arora
Arjun Tendulkar
Mayank Yadav
Suyash Sharma
Vyshak Vijaykumar
Xavier Bartlett
Mukesh Choudhary
Yash Thakur
💰 ₹50 LAKH
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
Digvesh Rathi
Manimaran Siddharth
Prince Yadav
Ashwani Kumar
Corbin Bosch
Naman Dhir
Rasikh Dar
Gurjapneet Singh
💰 ₹20 LAKH
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
Mohd. Arshad Khan
Arshin Kulkarni
Raghu Sharma
Kwena Maphaka
Lhuan-Dre Pretorius
Nandre Burger
Yudhvir Charak
Abhinandan Singh
Harsh Dubey
Zeeshan Ansari
Anshul Kamboj
Ramakrishna Ghosh
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
    elif line.startswith("💰"):
        # Format: 💰 ₹2 CRORE
        parts = line.split(" ")
        # Build price string, e.g., "2 Crore"
        # It's better to preserve the exact format "X Crore" or "Y Lakh"
        amount = parts[1].replace("₹", "")
        unit = parts[2].capitalize() # Crore or Lakh
        current_price = f"{amount} {unit}"
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

# Process new order and ONLY include these players
for cat in ["Batsmen", "Wicketkeepers", "All-rounders", "Bowlers"]:
    old_list = old_db[cat]
    for name, price in new_order[cat]:
        found = False
        # search in original current cat
        for p in old_list:
            if p['name'] == name:
                p['price'] = price
                new_db[cat].append(p)
                found = True
                break
        
        # search across all
        if not found:
            for ocat in ["Batsmen", "Wicketkeepers", "All-rounders", "Bowlers"]:
                if found: break
                for p in old_db[ocat]:
                    if p['name'] == name:
                        clone = dict(p)
                        clone['price'] = price
                        new_db[cat].append(clone)
                        found = True
                        break
        
        if not found:
            # Create a fallback object if a player is completely new
            print(f"Warning: Player {name} not found in previous DB. Creating empty entry.")
            new_db[cat].append({
                "name": name,
                "role": "PLAYER",
                "price": price,
                "rating": 3.0,
                "country": ""
            })

# NOTE: WE DO NOT APPEND REMAINING PLAYERS! The user said "and remove other players".

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
