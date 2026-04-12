/**
 * Process new blog images for Agribiz Africa
 * Converts user-uploaded JPEGs into optimized WebP/AVIF blog images
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_DIR = path.join(__dirname, '../public/images');
const OUTPUT_DIR = path.join(__dirname, '../public/images/optimized');
const SIZES = [320, 480, 640];
const QUALITY = { webp: 82, avif: 65 };

// Map: source file => target blog image name
const MAPPINGS = [
  { src: 'NPK fertilizer.jpeg',   dest: 'blog-fertilizer' },
  { src: 'Best maize seed.jpeg',  dest: 'blog-maize' },
  { src: 'legacy seed.jpeg',      dest: 'blog-high-yield' },
  { src: 'Vegetable seed.jpeg',   dest: 'blog-vegetable-seeds' },
];

async function processImage(srcFile, destName) {
  const inputPath = path.join(INPUT_DIR, srcFile);
  if (!fs.existsSync(inputPath)) {
    console.log(`⚠️  Not found: ${srcFile}`);
    return;
  }

  const meta = await sharp(inputPath).metadata();
  const origSize = fs.statSync(inputPath).size;
  console.log(`\n🖼  ${srcFile} → ${destName} (${(origSize/1024).toFixed(1)}KB, ${meta.width}×${meta.height})`);

  // Full-size WebP fallback (replaces existing /images/blog-xxx.webp)
  const fallbackPath = path.join(INPUT_DIR, `${destName}.webp`);
  await sharp(inputPath).webp({ quality: QUALITY.webp }).toFile(fallbackPath);
  console.log(`   📦 Replaced ${destName}.webp (${(fs.statSync(fallbackPath).size/1024).toFixed(1)}KB)`);

  for (const width of SIZES) {
    if (width > meta.width) { console.log(`   ⏭  Skip ${width}w`); continue; }
    const height = Math.round((width / meta.width) * meta.height);

    const webpOut = path.join(OUTPUT_DIR, `${destName}-${width}w.webp`);
    await sharp(inputPath).resize(width, height, { fit: 'cover' }).webp({ quality: QUALITY.webp }).toFile(webpOut);

    const avifOut = path.join(OUTPUT_DIR, `${destName}-${width}w.avif`);
    await sharp(inputPath).resize(width, height, { fit: 'cover' }).avif({ quality: QUALITY.avif }).toFile(avifOut);

    console.log(`   ✅ ${width}w WebP ${(fs.statSync(webpOut).size/1024).toFixed(1)}KB  AVIF ${(fs.statSync(avifOut).size/1024).toFixed(1)}KB`);
  }

  // Update optimized fallback too
  const optFallback = path.join(OUTPUT_DIR, `${destName}.webp`);
  await sharp(inputPath).webp({ quality: QUALITY.webp }).toFile(optFallback);
}

async function main() {
  console.log('🚀 Processing blog images...\n');
  for (const m of MAPPINGS) {
    await processImage(m.src, m.dest);
  }
  console.log('\n✅ Done!');
}

main().catch(console.error);
