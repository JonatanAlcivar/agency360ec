import re

with open(r'D:\Antigravity\Agency360\index.html', 'rb') as f:
    raw = f.read()

text = raw.decode('utf-8')

replacements = [
    # uppercase accented
    ('í‰', 'É'), ('í"', 'Ó'), ('íš', 'Ú'), ('í‚', 'Á'), ('íŽ', 'Á'),
    # specific words
    ('MíXIMAS', 'MÁXIMAS'), ('LíNEA', 'LÍNEA'), ('COTIZACIí\u201cN', 'COTIZACIÓN'),
    ('INSTANTíNEA', 'INSTANTÁNEA'), ('MENíš', 'MENÚ'), ('LATINOAMí\u2030RICA', 'LATINOAMÉRICA'),
    ('CONVERSIí\u201cN', 'CONVERSIÓN'), ('Hí\u2030ROE', 'HÉROE'), ('íšltimos', 'Últimos'),
    ('meníº', 'menú'), ('Meníº', 'Menú'), ('meníºs', 'menús'), ('Meníºs', 'Menús'),
    ('Abrir meníº', 'Abrir menú'), ('Espaí±ol', 'Español'), ('Clí\xadnicas', 'Clínicas'),
    ('Clí­nicas', 'Clínicas'), ('Galerí­a', 'Galería'), ('Garantí­a', 'Garantía'),
    ('Barberí­as', 'Barberías'), ('Raí­ces', 'Raíces'), ('barberí­as', 'barberías'),
    ('mÂ²', 'm²'), ('bilingí¼e', 'bilingüe'), ('íºnico', 'único'),
    ('5\u201c\u20187', '5–7'), ('5\u201c7', '5–7'), ('í­', 'í'), ('MíXIMAS', 'MÁXIMAS'),
]

for bad, good in replacements:
    text = text.replace(bad, good)

with open(r'D:\Antigravity\Agency360\index.html', 'w', encoding='utf-8') as f:
    f.write(text)

print("Done! Remaining issues:")
for line in text.split('\n'):
    if 'í' in line or 'Ã' in line or 'â€' in line:
        print(line.strip()[:120])
