const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public', 'images');

const images = [
  'hero-bg.jpg',
  'about-bg.jpg',
  'product-seeds.jpg',
  'product-fertilizer.jpg',
  'product-pesticide.jpg',
  'product-equipment.jpg'
];

async function convertImages() {
  let totalOriginal = 0;
  let totalWebP = 0;

  for (const image of images) {
    const inputPath = path.join(imagesDir, image);
    const outputPath = path.join(imagesDir, image.replace('.jpg', '.webp'));

    try {
      await sharp(inputPath)
        .webp({ quality: 80, effort: 4 })
        .toFile(outputPath);

      const originalSize = fs.statSync(inputPath).size;
      const webpSize = fs.statSync(outputPath).size;
      const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);

      totalOriginal += originalSize;
      totalWebP += webpSize;

      console.log(`✓ ${image} → ${path.basename(outputPath)} (${savings}% smaller)`);
    } catch (err) {
      console.error(`✗ Failed to convert ${image}:`, err.message);
    }
  }

  const totalSavings = ((totalOriginal - totalWebP) / totalOriginal * 100).toFixed(1);
  console.log(`\nTotal: ${(totalOriginal / 1024).toFixed(1)}KB → ${(totalWebP / 1024).toFixed(1)}KB (${totalSavings}% smaller)`);
}

convertImages().then(() => {
  console.log('\nConversion complete!');
}).catch(err => {
  console.error('Conversion failed:', err);
  process.exit(1);
});
