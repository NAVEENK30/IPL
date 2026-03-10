import os
import re
import json
import urllib.request
import urllib.parse
from urllib.error import HTTPError

def download_image(player_name, save_dir):
    filename = os.path.join(save_dir, f"{player_name}.jpg")
    filename_jpeg = os.path.join(save_dir, f"{player_name}.jpeg")
    
    if os.path.exists(filename) or os.path.exists(filename_jpeg):
        return False # Skip

    print(f"[SEARCHING] {player_name}...")
    
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
                return True
        
        print(f"[NOT FOUND] Could not find image on Wikipedia.")
        return False
        
    except Exception as e:
        print(f"[ERROR] Failed {player_name}: {e}")
        return False

def main():
    save_dir = os.path.join(os.getcwd(), 'assets', 'Players')
    os.makedirs(save_dir, exist_ok=True)
    
    script_path = os.path.join(os.getcwd(), 'script.js')
    
    with open(script_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    names = re.findall(r'name:\s*"([^"]+)"', content)
    unique_names = list(set(names))
    
    print(f"Found {len(unique_names)} unique players in script.js")
    
    downloaded = 0
    for name in unique_names:
        if download_image(name, save_dir):
            downloaded += 1
            
    print(f"\nDone! Downloaded {downloaded} new images.")

if __name__ == "__main__":
    main()
