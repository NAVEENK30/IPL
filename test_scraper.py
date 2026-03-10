import urllib.request
import urllib.parse
import re
import ssl

def search_bing_image(query):
    try:
        url = f"https://www.bing.com/images/search?q={urllib.parse.quote(query)}&form=HDRSC2&first=1"
        req = urllib.request.Request(url, headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.9',
            'Referer': 'https://www.bing.com/'
        })
        
        ctx = ssl.create_default_context()
        ctx.check_hostname = False
        ctx.verify_mode = ssl.CERT_NONE
        
        with urllib.request.urlopen(req, context=ctx, timeout=10) as response:
            html = response.read().decode('utf-8', errors='ignore')
            
        # Match Bing's image URL pattern
        matches = re.findall(r'murl&quot;:&quot;(.*?)&quot;', html)
        if matches:
            for img_url in matches:
                if img_url.lower().endswith(('.jpg', '.jpeg', '.png')):
                    return img_url
        return None
    except Exception as e:
        print(f"Error searching {query}: {e}")
        return None

print(search_bing_image("Harshal Patel IPL jersey 2024"))
print(search_bing_image("Akash Madhwal IPL headshot"))
