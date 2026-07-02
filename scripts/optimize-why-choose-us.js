/**
 * Video optimization for "Why Choose Us" 
 * Targets: High quality, web-optimized H.264 encoding
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
const OUTPUT = path.join(__dirname, '../public/videos/why-choose-us-optimized.mp4');

if (!fs.existsSync(INPUT)) {
  console.log(`❌ Video not found: ${INPUT}`);
  process.exit(1);
}

const inputSizeMB = (fs.statSync(INPUT).size / 1024 / 1024).toFixed(2);

console.log(`\n🎬 Optimizing "Why Choose Us" video for web...`);
console.log(`   Input:    ${inputSizeMB} MB`);
console.log(`   Target:   High-quality web delivery\n`);

// Get video info first
ffmpeg.ffprobe(INPUT, (err, metadata) => {
  if (err) {
    console.error('❌ Error probing video:', err);
    process.exit(1);
  }

  const duration = metadata.format.duration;
  console.log(`   Duration: ${(duration / 60).toFixed(1)} minutes`);
  console.log(`   Encoding... (this may take a minute or two)\n`);

  ffmpeg(INPUT)
    .videoCodec('libx264')
    .videoBitrate('2500k')
    .audioCodec('aac')
    .audioBitrate('128k')
    .audioChannels(2)
    .audioFrequency(44100)
    .outputOptions([
      '-preset slow',
      '-profile:v high',
      '-level 4.0',
      '-crf 23',
      '-movflags +faststart',
      '-vf scale=-2:720',
      '-pix_fmt yuv420p',
      '-maxrate 3500k',
      '-bufsize 7000k',
    ])
    .output(OUTPUT)
    .on('start', () => {
      console.log('   Status: Encoding in progress...');
    })
    .on('progress', (progress) => {
      const pct = Math.round(progress.percent || 0);
      if (pct % 10 === 0) {
        process.stdout.write(`\r   Progress: ${pct}%`);
      }
    })
    .on('end', () => {
      console.log(`\r   Progress: 100%\n`);
      
      const outputSizeMB = (fs.statSync(OUTPUT).size / 1024 / 1024).toFixed(2);
      const reduction = ((1 - outputSizeMB / inputSizeMB) * 100).toFixed(1);
      
      console.log(`✅ Optimization complete!`);
      console.log(`   Output:   ${outputSizeMB} MB`);
      if (reduction > 0) {
        console.log(`   Reduced:  ${reduction}%`);
      } else {
        console.log(`   Size increase: ${Math.abs(reduction)}% (source already optimized)\n`);
      }
      console.log(`\n📝 Next steps:`);
      console.log(`   1. Verify the optimized video plays correctly`);
      console.log(`   2. Replace the original: mv "${OUTPUT}" "${INPUT}"\n`);
    })
    .on('error', (err) => {
      console.error('\n❌ Error during encoding:', err);
      process.exit(1);
    })
    .run();
});
