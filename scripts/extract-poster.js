/**
 * Extract high-quality poster frame from "Why Choose Us" video
 */

import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';
import ffprobeStatic from 'ffprobe-static';
import ffmpeg from 'fluent-ffmpeg';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
ffmpeg.setFfmpegPath(ffmpegInstaller.path);
ffmpeg.setFfprobePath(ffprobeStatic.path);

const INPUT = path.join(__dirname, '../public/videos/Why Choose Us.mp4');
const OUTPUT = path.join(__dirname, '../public/images/why-choose-us-poster.jpg');

if (!fs.existsSync(INPUT)) {
  console.log(`❌ Video not found: ${INPUT}`);
  process.exit(1);
}

console.log(`\n🎬 Extracting high-quality poster frame...`);
console.log(`   Source: Why Choose Us.mp4`);
console.log(`   Target: 1280x720 @ 2 seconds\n`);

ffmpeg(INPUT)
  .screenshot({
    timestamps: ['2'],
    filename: 'why-choose-us-poster.jpg',
    folder: path.dirname(OUTPUT),
    size: '1280x720'
  })
  .on('end', () => {
    if (fs.existsSync(OUTPUT)) {
      const sizeMB = (fs.statSync(OUTPUT).size / 1024 / 1024).toFixed(2);
      console.log(`✅ Poster extracted successfully!`);
      console.log(`   File: ${OUTPUT}`);
      console.log(`   Size: ${sizeMB} MB (1280x720)`);
      console.log(`\n📝 Next step:`);
      console.log(`   Optimize and add the poster to the images list\n`);
    }
  })
  .on('error', (err) => {
    console.error(`❌ Error extracting poster:`, err);
    process.exit(1);
  });
