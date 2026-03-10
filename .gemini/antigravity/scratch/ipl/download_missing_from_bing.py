import os
import urllib.request
import urllib.parse
import re
import ssl
import time

def search_bing_image(query):
    try:
        url = f"https://www.bing.com/images/search?q={urllib.parse.quote(query)}&form=HDRSC2&first=1"
        req = urllib.request.Request(url, headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
            'Accept': 'text/html',
        })
        
        ctx = ssl.create_default_context()
        ctx.check_hostname = False
        ctx.verify_mode = ssl.CERT_NONE
        
        with urllib.request.urlopen(req, context=ctx, timeout=10) as response:
            html = response.read().decode('utf-8', errors='ignore')
            
        matches = re.findall(r'murl&quot;:&quot;(.*?)&quot;', html)
        if matches:
            for img_url in matches:
                # Basic validation
                if img_url.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')) or 'headshot' in img_url.lower() or 'iplt20' in img_url.lower():
                    return img_url
        return None
    except Exception as e:
        print(f"  [ERROR SEARCHING]: {e}")
        return None

def download_image(url, save_path):
    try:
        req = urllib.request.Request(url, headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64;'
        })
        ctx = ssl.create_default_context()
        ctx.check_hostname = False
        ctx.verify_mode = ssl.CERT_NONE
        
        with urllib.request.urlopen(req, context=ctx, timeout=10) as response:
            with open(save_path, 'wb') as f:
                f.write(response.read())
        return True
    except Exception as e:
        print(f"  [ERROR DOWNLOADING]: {e}")
        return False

def main():
    save_dir = os.path.join(os.getcwd(), 'assets', 'Players')
    missing_file = os.path.join(os.getcwd(), 'missing_players.txt')
    
    if not os.path.exists(missing_file):
        print("missing_players.txt not found!")
        return
        
    with open(missing_file, 'r', encoding='utf-8') as f:
        players = [line.strip() for line in f if line.strip()]
        
    print(f"Attempting to download {len(players)} players in IPL jerseys from Bing...")
    
    success_count = 0
    
    for i, player in enumerate(players):
        save_path = os.path.join(save_dir, f"{player}.jpg")
        if os.path.exists(save_path) or os.path.exists(save_path.replace('.jpg', '.jpeg')) or os.path.exists(save_path.replace('.jpg', '.png')):
            continue # Skip if somehow downloaded
            
        print(f"[{i+1}/{len(players)}] Searching: {player}")
        query = f"{player} IPL jersey headshot profile"
        img_url = search_bing_image(query)
        
        if img_url:
            print(f"  [FOUND URL]: {img_url[:60]}...")
            if download_image(img_url, save_path):
                print(f"  [SUCCESS] Downloaded {player}.jpg")
                success_count += 1
            else:
                print(f"  [FAILED] Could not download image file.")
        else:
            print(f"  [NOT FOUND] No valid image found on Bing.")
            
        time.sleep(1) # Be nice to Bing
        
    print(f"\nDone! Successfully downloaded {success_count} missing players in their IPL jerseys via Bing.")

if __name__ == "__main__":
    main()
