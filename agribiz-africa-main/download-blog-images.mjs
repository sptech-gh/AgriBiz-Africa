import https from 'https';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, 'public', 'images');

// Ensure images directory exists
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Blog image definitions - using reliable direct URLs
const blogImages = [
  {
    name: 'blog-maize',
    url: 'https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Maize corn field farming'
  },
  {
    name: 'blog-fertilizer',
    url: 'https://images.pexels.com/photos/3912458/pexels-photo-3912458.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Fertilizer application agriculture'
  },
  {
    name: 'blog-high-yield',
    url: 'https://images.pexels.com/photos/2889440/pexels-photo-2889440.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'High yield farming harvest'
  },
  {
    name: 'blog-tomato',
    url: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Tomato farming greenhouse'
  },
  {
    name: 'blog-pest-control',
    url: 'https://images.pexels.com/photos/5752268/pexels-photo-5752268.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Pest control spraying'
  },
  {
    name: 'blog-vegetable-seeds',
    url: 'https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Vegetable seeds seedlings'
  }
];

async function downloadImage(url, outputPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(outputPath);
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      timeout: 30000
    }, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download: ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(outputPath, () => {});
      reject(err);
    }).on('timeout', () => {
      fs.unlink(outputPath, () => {});
      reject(new Error('Request timeout'));
    });
  });
}

async function optimizeImage(inputPath, outputPath) {
  await sharp(inputPath)
    .resize(800, 600, { fit: 'cover', position: 'center' })
    .webp({ quality: 80, effort: 4 })
    .toFile(outputPath);
  
  // Get file sizes
  const originalSize = fs.statSync(inputPath).size;
  const optimizedSize = fs.statSync(outputPath).size;
  const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
  
  console.log(`✓ ${path.basename(outputPath)}: ${(originalSize/1024).toFixed(1)}KB → ${(optimizedSize/1024).toFixed(1)}KB (${savings}% smaller)`);
}

async function processImages() {
  console.log('Downloading and optimizing blog images...\n');
  
  let successCount = 0;
  let failCount = 0;
  
  for (const img of blogImages) {
    const jpgPath = path.join(imagesDir, `${img.name}.jpg`);
    const webpPath = path.join(imagesDir, `${img.name}.webp`);
    
    try {
      // Download
      console.log(`Downloading ${img.name}...`);
      await downloadImage(img.url, jpgPath);
      
      // Optimize to WebP
      await optimizeImage(jpgPath, webpPath);
      
      // Remove original JPG
      fs.unlinkSync(jpgPath);
      successCount++;
      
    } catch (error) {
      console.error(`✗ Failed to process ${img.name}: ${error.message}`);
      failCount++;
    }
  }
  
  console.log(`\n✅ Done! ${successCount} images optimized, ${failCount} failed`);
}

processImages().catch(console.error);
