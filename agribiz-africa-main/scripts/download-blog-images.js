/**
 * Download and optimize replacement blog images from Pexels (free license)
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_DIR = path.join(__dirname, '../public/images');
const OUTPUT_DIR = path.join(__dirname, '../public/images/optimized');
const SIZES = [320, 480, 640];
const QUALITY = { webp: 82, avif: 65 };

// Pexels free-to-use images (no attribution required)
const DOWNLOADS = [
  {
    // Red ripe tomatoes on vine in farm — vibrant, matches tomato guide
    url: 'https://images.pexels.com/photos/6399489/pexels-photo-6399489.jpeg?auto=compress&cs=tinysrgb&w=1280&fit=max',
    dest: 'blog-tomato',
  },
  {
    // Farmer spraying pesticide on crops — matches pest control article
    url: 'https://images.pexels.com/photos/5479033/pexels-photo-5479033.jpeg?auto=compress&cs=tinysrgb&w=1280&fit=max',
    dest: 'blog-pest-control',
  },
];

function download(url, destPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        file.close();
        fs.unlinkSync(destPath);
        download(response.headers.location, destPath).then(resolve).catch(reject);
        return;
      }
      if (response.statusCode !== 200) {
        file.close();
        fs.unlinkSync(destPath);
        reject(new Error(`HTTP ${response.statusCode} for ${url}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
      reject(err);
    });
  });
}

async function processImage(inputPath, destName) {
  const meta = await sharp(inputPath).metadata();
  const origSize = fs.statSync(inputPath).size;
  console.log(`   Source: ${(origSize/1024).toFixed(1)}KB, ${meta.width}×${meta.height}`);

  // Replace main /images/blog-xxx.webp
  const mainWebp = path.join(INPUT_DIR, `${destName}.webp`);
  await sharp(inputPath).webp({ quality: QUALITY.webp }).toFile(mainWebp);
  console.log(`   📦 Replaced ${destName}.webp → ${(fs.statSync(mainWebp).size/1024).toFixed(1)}KB`);

  // Optimized fallback
  const optFallback = path.join(OUTPUT_DIR, `${destName}.webp`);
  await sharp(inputPath).webp({ quality: QUALITY.webp }).toFile(optFallback);

  for (const width of SIZES) {
    if (width > meta.width) continue;
    const height = Math.round((width / meta.width) * meta.height);

    const webpOut = path.join(OUTPUT_DIR, `${destName}-${width}w.webp`);
    await sharp(inputPath).resize(width, height, { fit: 'cover' }).webp({ quality: QUALITY.webp }).toFile(webpOut);

    const avifOut = path.join(OUTPUT_DIR, `${destName}-${width}w.avif`);
    await sharp(inputPath).resize(width, height, { fit: 'cover' }).avif({ quality: QUALITY.avif }).toFile(avifOut);

    console.log(`   ✅ ${width}w WebP ${(fs.statSync(webpOut).size/1024).toFixed(1)}KB  AVIF ${(fs.statSync(avifOut).size/1024).toFixed(1)}KB`);
  }
}

async function main() {
  console.log('📥 Downloading blog images from Pexels...\n');

  for (const item of DOWNLOADS) {
    const tmpPath = path.join(INPUT_DIR, `_tmp_${item.dest}.jpg`);
    console.log(`\n⬇️  ${item.dest}`);
    console.log(`   URL: ${item.url}`);

    try {
      await download(item.url, tmpPath);
      console.log(`   Downloaded OK`);
      await processImage(tmpPath, item.dest);
      fs.unlinkSync(tmpPath);
    } catch (err) {
      console.error(`   ❌ Failed: ${err.message}`);
      if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath);
    }
  }

  console.log('\n✅ All done!');
}

main().catch(console.error);
