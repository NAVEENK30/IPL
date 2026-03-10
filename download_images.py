import os
import json
import urllib.request
import urllib.parse
from urllib.error import HTTPError

# Top 50 Players to Download
TOP_PLAYERS = [
    # Batsmen
    "Virat Kohli", "Rohit Sharma", "Shubman Gill", "Yashasvi Jaiswal", "Ruturaj Gaikwad",
    "Suryakumar Yadav", "Rinku Singh", "Shreyas Iyer", "Sai Sudharsan", "Tilak Varma",
    "Rajat Patidar", "Shivam Dube", "David Warner", "Steve Smith", "Kane Williamson",
    "Joe Root", "Faf du Plessis", "Glen Phillips", "Harry Brook", "Dawid Malan",
    
    # Wicketkeepers
    "MS Dhoni", "Rishabh Pant", "Sanju Samson", "KL Rahul", "Ishan Kishan",
    "Jos Buttler", "Quinton de Kock", "Phil Salt", "Jonny Bairstow", "Heinrich Klaasen",
    
    # All-rounders
    "Hardik Pandya", "Ravindra Jadeja", "Axar Patel", "Glenn Maxwell", "Cameron Green",
    "Marcus Stoinis", "Mitchell Marsh", "Andre Russell", "Sunil Narine", "Liam Livingstone",
    
    # Bowlers
    "Jasprit Bumrah", "Mohammed Shami", "Mohammed Siraj", "Kuldeep Yadav", "Yuzvendra Chahal",
    "Trent Boult", "Tim Southee", "Kagiso Rabada", "Anrich Nortje", "Lungi Ngidi"
]

def download_image(player_name, save_dir):
    filename = os.path.join(save_dir, f"{player_name}.jpg")
    if os.path.exists(filename):
        print(f"[SKIP] {player_name} already exists.")
        return

    print(f"[SEARCHING] {player_name}...")
    
    # Using Wikipedia API with urllib
    try:
        url = f"https://en.wikipedia.org/w/api.php?action=query&titles={urllib.parse.quote(player_name)}&prop=pageimages&format=json&pithumbsize=500"
        req = urllib.request.Request(url, headers={'User-Agent': 'IPLSlidesBot/1.0'})
        
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            
        pages = data.get('query', {}).get('pages', {})
        for page_id, page_data in pages.items():
            if 'thumbnail' in page_data:
                img_url = page_data['thumbnail']['source']
                
                # Download image
                img_req = urllib.request.Request(img_url, headers={'User-Agent': 'IPLSlidesBot/1.0'})
                with urllib.request.urlopen(img_req) as img_response:
                    with open(filename, 'wb') as f:
                        f.write(img_response.read())
                
                print(f"[SUCCESS] Downloaded {player_name}")
                return
        
        print(f"[NOT FOUND] Could not find image for {player_name} on Wikipedia.")
        
    except Exception as e:
        print(f"[ERROR] Failed to download {player_name}: {e}")

def main():
    save_dir = os.path.join(os.getcwd(), 'assets', 'Players')
    if not os.path.exists(save_dir):
        os.makedirs(save_dir)
    
    print(f"Downloading images to {save_dir}...")
    
    for player in TOP_PLAYERS:
        download_image(player, save_dir)
        
    print("\nDone! Check the assets/Players folder.")

if __name__ == "__main__":
    main()
