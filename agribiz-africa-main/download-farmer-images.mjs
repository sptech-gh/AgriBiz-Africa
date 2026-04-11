import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Free image URLs from Unsplash/Pexels - African/Ghanaian agriculture themed
const imagesToDownload = [
  {
    name: 'hero-ghana-farmers',
    // African farmers in maize field - from Unsplash
    url: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80',
    width: 1920,
    height: 1080
  },
  {
    name: 'farm-visit-1',
    // Farmer training/agricultural extension - from Unsplash
    url: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80',
    width: 800,
    height: 600
  },
  {
    name: 'farm-visit-2',
    // Field demonstration - farming in Africa
    url: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80',
    width: 800,
    height: 600
  },
  {
    name: 'farm-visit-3',
    // Community farming - African agriculture
    url: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&q=80',
    width: 800,
    height: 600
  },
  {
    name: 'farm-visit-4',
    // Harvest season - farmers with crops
    url: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&q=80',
    width: 800,
    height: 600
  },
  {
    name: 'testimonial-video-poster',
    // African farmer portrait for video thumbnail
    url: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=1280&q=80',
    width: 1280,
    height: 720
  }
];

const imagesDir = path.join(__dirname, 'public', 'images');

// Ensure images directory exists
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
  console.log('Created images directory');
}

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      timeout: 30000
    }, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Follow redirect
        downloadImage(response.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      
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
      fs.unlink(dest, () => {});
      reject(err);
    }).on('timeout', () => {
      fs.unlink(dest, () => {});
      reject(new Error('Download timeout'));
    });
  });
}

async function processImage(imageInfo) {
  const tempPath = path.join(imagesDir, `${imageInfo.name}-temp.jpg`);
  const finalPath = path.join(imagesDir, `${imageInfo.name}.webp`);
  
  try {
    console.log(`Downloading ${imageInfo.name}...`);
    await downloadImage(imageInfo.url, tempPath);
    
    console.log(`Processing ${imageInfo.name}...`);
    await sharp(tempPath)
      .resize(imageInfo.width, imageInfo.height, {
        fit: 'cover',
        position: 'center'
      })
      .webp({ 
        quality: 85,
        effort: 4
      })
      .toFile(finalPath);
    
    // Clean up temp file
    fs.unlinkSync(tempPath);
    
    // Get file size
    const stats = fs.statSync(finalPath);
    const sizeKB = Math.round(stats.size / 1024);
    
    console.log(`✅ ${imageInfo.name}.webp created (${sizeKB}KB)`);
    return { name: imageInfo.name, size: sizeKB };
    
  } catch (error) {
    console.error(`❌ Failed to process ${imageInfo.name}:`, error.message);
    // Clean up temp file if exists
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath);
    }
    return { name: imageInfo.name, error: error.message };
  }
}

async function main() {
  console.log('🌾 Downloading farmer images for Agribiz Africa...\n');
  
  const results = [];
  
  for (const image of imagesToDownload) {
    const result = await processImage(image);
    results.push(result);
    
    // Small delay between downloads
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  console.log('\n📊 Summary:');
  console.log('─'.repeat(50));
  
  const successful = results.filter(r => !r.error);
  const failed = results.filter(r => r.error);
  
  successful.forEach(r => {
    console.log(`✅ ${r.name}.webp - ${r.size}KB`);
  });
  
  if (failed.length > 0) {
    console.log('\n❌ Failed:');
    failed.forEach(r => {
      console.log(`  ${r.name}: ${r.error}`);
    });
  }
  
  const totalSize = successful.reduce((sum, r) => sum + r.size, 0);
  console.log(`\n📦 Total: ${successful.length} images, ${totalSize}KB`);
  
  if (failed.length === imagesToDownload.length) {
    console.log('\n⚠️  All downloads failed. Trying fallback URLs...');
    console.log('You may need to manually download images from:');
    console.log('- https://unsplash.com/s/photos/african-farmer');
    console.log('- https://www.pexels.com/search/african%20farmer/');
  }
}

main().catch(console.error);
