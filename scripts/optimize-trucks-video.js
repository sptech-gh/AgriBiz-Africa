/**
 * Video optimization for "trucks at port" video
 * - Re-encode at H.264 High profile for web delivery
 * - Compress from ~9.6 MB down to ~2.5 - 3 MB
 * - Set faststart (moov at front) for instant playback
 * - Extract 640x360 poster frame at 2 seconds
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

const INPUT = path.join(__dirname, '../public/videos/trucks at port.mp4');
const OUTPUT = path.join(__dirname, '../public/videos/trucks-at-port-optimized.mp4');
const POSTER_OUTPUT = path.join(__dirname, '../public/images/trucks-at-port-poster.jpg');

if (!fs.existsSync(INPUT)) {
  console.error(`❌ Input video not found: ${INPUT}`);
  process.exit(1);
}

const inputSizeMB = (fs.statSync(INPUT).size / 1024 / 1024).toFixed(2);

console.log(`\n🎬 Optimizing "trucks at port" video for web...`);
console.log(`   Input:    ${INPUT}`);
cmdOptimizeVideo();

function cmdOptimizeVideo() {
  console.log(`   Size:     ${inputSizeMB} MB`);
  console.log(`   Target:   ~450kbps video + 64kbps audio, Faststart, 640x360 @ 30fps\n`);
  console.log(`   Encoding... (this will take a few seconds)\n`);

  ffmpeg(INPUT)
    .videoCodec('libx264')
    .videoBitrate('450k')
    .audioCodec('aac')
    .audioBitrate('64k')
    .audioChannels(2)
    .audioFrequency(44100)
    .outputOptions([
      '-preset slow',
      '-profile:v high',
      '-level 3.1', // 3.1 is sufficient for 360p @ 30fps
      '-r 30',
      '-movflags +faststart',
      '-vf scale=640:-2', // maintain 640 width, auto-calculate height (even number)
      '-pix_fmt yuv420p',
      '-maxrate 700k',
      '-bufsize 1400k',
    ])
    .output(OUTPUT)
    .on('progress', (progress) => {
      const pct = Math.round(progress.percent || 0);
      process.stdout.write(`\r   Progress: ${pct}% | Time: ${progress.timemark}    `);
    })
    .on('end', () => {
      process.stdout.write(`\r   Progress: 100%                 \n\n`);
      const outputSizeMB = (fs.statSync(OUTPUT).size / 1024 / 1024).toFixed(2);
      const reduction = ((1 - outputSizeMB / inputSizeMB) * 100).toFixed(1);
      
      console.log(`✅ Video optimization complete!`);
      console.log(`   Output:   ${OUTPUT}`);
      console.log(`   Size:     ${outputSizeMB} MB (${reduction}% smaller)\n`);
      
      extractPoster();
    })
    .on('error', (err) => {
      console.error('\n❌ Error during video encoding:', err);
      process.exit(1);
    })
    .run();
}

function extractPoster() {
  console.log(`🎬 Extracting high-quality poster frame...`);
  console.log(`   Target: trucks-at-port-poster.jpg (640x360 @ 2s)\n`);

  ffmpeg(INPUT)
    .screenshot({
      timestamps: ['2'],
      filename: 'trucks-at-port-poster.jpg',
      folder: path.dirname(POSTER_OUTPUT),
      size: '640x360'
    })
    .on('end', () => {
      if (fs.existsSync(POSTER_OUTPUT)) {
        const sizeKB = (fs.statSync(POSTER_OUTPUT).size / 1024).toFixed(1);
        console.log(`✅ Poster extracted successfully!`);
        console.log(`   File: ${POSTER_OUTPUT}`);
        console.log(`   Size: ${sizeKB} KB (640x360)\n`);
      } else {
        console.error(`❌ Poster file was not created.`);
      }
    })
    .on('error', (err) => {
      console.error(`❌ Error extracting poster:`, err);
    });
}
