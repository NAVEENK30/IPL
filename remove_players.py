with open('script.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    if "Andile Phehlukwayo" in line or "Chris Jordan" in line:
        print(f"Removing line: {line.strip()}")
        continue
    new_lines.append(line)

with open('script.js', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)
