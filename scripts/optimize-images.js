/**
 * Image Optimization Script for Agribiz Africa
 * Generates optimized WebP and AVIF variants with multiple sizes for responsive images
 * 
 * Usage: npm run optimize-images
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_DIR = path.join(__dirname, '../public/images');
const OUTPUT_DIR = path.join(__dirname, '../public/images/optimized');

// Responsive breakpoints for srcset
const SIZES = {
  hero: [480, 768, 1024, 1440, 1920],
  product: [320, 480, 640],
  blog: [320, 480, 640],
  about: [480, 768, 1024, 1440],
  farm: [320, 480, 640],
  testimonial: [480, 768]
};

// Quality settings (lower = smaller file, 80 is good balance)
const QUALITY = {
  webp: 80,
  avif: 65, // AVIF can use lower quality with same visual result
  jpg: 85
};

// Images to optimize with their category
const IMAGES_TO_OPTIMIZE = [
  { name: 'hero-ghana-farmers', category: 'hero', ext: 'webp' },
  { name: 'about-bg', category: 'about', ext: 'jpg' }, // Use JPG source (smaller)
  { name: 'product-seeds', category: 'product', ext: 'jpg' },
  { name: 'product-fertilizer', category: 'product', ext: 'jpg' },
  { name: 'product-pesticide', category: 'product', ext: 'jpg' },
  { name: 'product-equipment', category: 'product', ext: 'jpg' },
  { name: 'Seeds & Planting Materials', category: 'product', ext: 'jpg' },
  { name: 'Sonagro Fertilizer NPK', category: 'product', ext: 'png' },
  { name: 'Supreme Teemeer 02 fertilizer', category: 'blog', ext: 'png' },
  { name: 'blog-maize', category: 'blog', ext: 'webp' },
  { name: 'blog-fertilizer', category: 'blog', ext: 'webp' },
  { name: 'blog-high-yield', category: 'blog', ext: 'webp' },
  { name: 'blog-tomato', category: 'blog', ext: 'webp' },
  { name: 'blog-vegetable-seeds', category: 'blog', ext: 'webp' },
  { name: 'blog-pest-control', category: 'blog', ext: 'webp' },
  { name: 'farm-visit-1', category: 'farm', ext: 'webp' },
  { name: 'farm-visit-2', category: 'farm', ext: 'webp' },
  { name: 'farm-visit-3', category: 'farm', ext: 'webp' },
  { name: 'farm-visit-4', category: 'farm', ext: 'webp' },
  { name: 'farmer-training-program', category: 'farm', ext: 'png' },
  { name: 'field-demonstrations', category: 'farm', ext: 'png' },
  { name: 'community-outreach', category: 'farm', ext: 'png' },
  { name: 'why-choose-us-poster', category: 'testimonial', ext: 'jpg' },
  { name: 'testimonial-video-poster', category: 'testimonial', ext: 'webp' }
];

async function ensureOutputDir() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log('📁 Created output directory:', OUTPUT_DIR);
  }
}

async function optimizeImage(imageConfig) {
  const { name, category, ext } = imageConfig;
  const inputPath = path.join(INPUT_DIR, `${name}.${ext}`);
  
  if (!fs.existsSync(inputPath)) {
    console.log(`⚠️  Skipping ${name}.${ext} - file not found`);
    return;
  }

  const sizes = SIZES[category] || [480, 768];
  const originalSize = fs.statSync(inputPath).size;
  
  console.log(`\n🖼️  Processing: ${name}.${ext} (${(originalSize / 1024).toFixed(1)} KB)`);

  for (const width of sizes) {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Skip if target width is larger than original
    if (width > metadata.width) {
      console.log(`   ⏭️  Skipping ${width}w (larger than original ${metadata.width}w)`);
      continue;
    }

    // Calculate height maintaining aspect ratio
    const height = Math.round((width / metadata.width) * metadata.height);

    // Generate WebP
    const webpPath = path.join(OUTPUT_DIR, `${name}-${width}w.webp`);
    await sharp(inputPath)
      .resize(width, height, { fit: 'cover' })
      .webp({ quality: QUALITY.webp })
      .toFile(webpPath);
    const webpSize = fs.statSync(webpPath).size;

    // Generate AVIF
    const avifPath = path.join(OUTPUT_DIR, `${name}-${width}w.avif`);
    await sharp(inputPath)
      .resize(width, height, { fit: 'cover' })
      .avif({ quality: QUALITY.avif })
      .toFile(avifPath);
    const avifSize = fs.statSync(avifPath).size;

    console.log(`   ✅ ${width}w: WebP ${(webpSize / 1024).toFixed(1)}KB, AVIF ${(avifSize / 1024).toFixed(1)}KB`);
  }

  // Generate a single optimized version at original size for fallback
  const fallbackWebpPath = path.join(OUTPUT_DIR, `${name}.webp`);
  const metadata = await sharp(inputPath).metadata();
  await sharp(inputPath)
    .webp({ quality: QUALITY.webp })
    .toFile(fallbackWebpPath);
  const fallbackSize = fs.statSync(fallbackWebpPath).size;
  
  const savings = ((originalSize - fallbackSize) / originalSize * 100).toFixed(1);
  console.log(`   📦 Fallback: ${(fallbackSize / 1024).toFixed(1)}KB (${savings}% smaller)`);
}

async function generateImageManifest() {
  const manifest = {};
  
  for (const imageConfig of IMAGES_TO_OPTIMIZE) {
    const { name, category } = imageConfig;
    const sizes = SIZES[category] || [480, 768];
    
    manifest[name] = {
      sizes: sizes.filter(w => {
        const webpPath = path.join(OUTPUT_DIR, `${name}-${w}w.webp`);
        return fs.existsSync(webpPath);
      }),
      formats: ['avif', 'webp'],
      fallback: `/images/optimized/${name}.webp`
    };
  }

  const manifestPath = path.join(OUTPUT_DIR, 'manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log('\n📋 Generated image manifest:', manifestPath);
  
  return manifest;
}

async function main() {
  console.log('🚀 Starting image optimization...\n');
  console.log('Settings:');
  console.log(`   WebP Quality: ${QUALITY.webp}`);
  console.log(`   AVIF Quality: ${QUALITY.avif}`);
  
  await ensureOutputDir();

  for (const imageConfig of IMAGES_TO_OPTIMIZE) {
    await optimizeImage(imageConfig);
  }

  await generateImageManifest();

  console.log('\n✨ Image optimization complete!');
  console.log('\nNext steps:');
  console.log('1. Update components to use ResponsiveImage component');
  console.log('2. Deploy to see PageSpeed improvements');
}

main().catch(console.error);
