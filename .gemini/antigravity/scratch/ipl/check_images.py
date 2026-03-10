import os
import re

def main():
    save_dir = os.path.join(os.getcwd(), 'assets', 'Players')
    script_path = os.path.join(os.getcwd(), 'script.js')
    
    with open(script_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    names = re.findall(r'name:\s*"([^"]+)"', content)
    unique_names = set(names)
    
    existing_images = set()
    if os.path.exists(save_dir):
        for f in os.listdir(save_dir):
            if f.endswith('.jpg') or f.endswith('.jpeg') or f.endswith('.png'):
                existing_images.add(os.path.splitext(f)[0])
                
    missing = unique_names - existing_images
    present = unique_names.intersection(existing_images)
    
    print(f"Total Players in script: {len(unique_names)}")
    print(f"Images Present: {len(present)}")
    print(f"Images Missing: {len(missing)}")
    
    with open('present_players.txt', 'w', encoding='utf-8') as f:
        f.write('\n'.join(sorted(present)))
        
    with open('missing_players.txt', 'w', encoding='utf-8') as f:
        f.write('\n'.join(sorted(missing)))

if __name__ == "__main__":
    main()
