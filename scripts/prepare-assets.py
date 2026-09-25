from pathlib import Path
from PIL import Image
source = Path('C:/Users/Terry.Jansen/AppData/Roaming/Hermes/composer-images')
out = Path(__file__).resolve().parents[1] / 'public' / 'images'
out.mkdir(parents=True, exist_ok=True)
# Crops use only the user's supplied website photography; browser UI and notifications are excluded.
crops = [
 ('image_3d818c.png', (249, 152, 376, 221), 'logo', None),
 ('Schermafbeelding_2026-09-25_073956_333edb.png', (8, 374, 949, 1033), 'maintenance', (1100, 800)),
 ('Schermafbeelding_2026-09-25_074008_12fbbc.png', (8, 232, 949, 1033), 'building', (1100, 1000)),
 ('Schermafbeelding_2026-09-25_074004_1d9160.png', (8, 235, 1893, 495), 'warehouse', (1600, 400)),
 ('Schermafbeelding_2026-09-25_073952_cdd300.png', (953, 232, 1433, 1033), 'workshop', (600, 1000)),
]
for filename, box, name, size in crops:
 image = Image.open(source / filename).convert('RGB').crop(box)
 if size: image.thumbnail(size, Image.Resampling.LANCZOS)
 image.save(out / f'{name}.webp', 'WEBP', quality=88)
 print(name, image.size)
