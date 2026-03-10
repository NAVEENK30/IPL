import os
from PIL import Image

def check_transparency(img_path):
    try:
        img = Image.open(img_path)
        if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
            img = img.convert("RGBA")
            # Get alpha channel
            alpha = img.split()[3]
            # Check if there are any pixels that are not fully opaque (255)
            # alpha.getextrema() returns (min_alpha, max_alpha)
            extrema = alpha.getextrema()
            if extrema[0] < 255:
                # The minimum alpha is less than 255, meaning at least one pixel is transparent or semi-transparent
                return True
        return False
    except Exception as e:
        print(f"Error checking {img_path}: {e}")
        return False

def main():
    players_dir = os.path.join(os.getcwd(), 'assets', 'Players')
    if not os.path.exists(players_dir):
        print("Directory not found")
        return
        
    png_files = [f for f in os.listdir(players_dir) if f.endswith('.png')]
    failed_pngs = []
    
    for f in png_files:
        path = os.path.join(players_dir, f)
        if not check_transparency(path):
            failed_pngs.append(f)
            
    print(f"Total PNGs checked: {len(png_files)}")
    print(f"PNGs without actual transparency (fake backgrounds): {len(failed_pngs)}")
    
    with open('fake_pngs.txt', 'w') as out:
        for p in failed_pngs:
            out.write(p + '\n')
            
if __name__ == '__main__':
    main()
