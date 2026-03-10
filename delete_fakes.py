import os

def main():
    assets_dir = os.path.join(os.getcwd(), 'assets', 'Players')
    
    # Specific players to force delete
    force_delete = ["Ravindra Jadeja", "Chris Jordan"]
    
    for player in force_delete:
        p_path = os.path.join(assets_dir, f"{player}.png")
        if os.path.exists(p_path):
            os.remove(p_path)
            print(f"Deleted mandatory file: {p_path}")
            
    # Fake PNGs
    fake_pngs_path = os.path.join(os.getcwd(), 'fake_pngs.txt')
    if os.path.exists(fake_pngs_path):
        with open(fake_pngs_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
            for line in lines:
                file_name = line.strip()
                if file_name:
                    p_path = os.path.join(assets_dir, file_name)
                    if os.path.exists(p_path):
                        os.remove(p_path)
                        print(f"Deleted fake PNG: {p_path}")
                        
if __name__ == "__main__":
    main()
