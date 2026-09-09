// Run on macOS with: node scripts/optimize-photos.mjs
// Originals remain untouched. Rebuilds the site's responsive JPEG assets.
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const manifestPath = 'src/assets/optimized/photos.json';
const photos = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
for (const photo of photos) {
  for (const width of photo.widths) {
    const height = Math.round(photo.height * width / photo.width);
    execFileSync('sips', ['-s', 'format', 'jpeg', '-s', 'formatOptions', '80',
      '-z', String(height), String(width), photo.original,
      '--out', `src/assets/optimized/${photo.id}-${width}.jpg`], { stdio: 'ignore' });
  }
}
console.log(`Optimized ${photos.length} photos; originals preserved.`);
