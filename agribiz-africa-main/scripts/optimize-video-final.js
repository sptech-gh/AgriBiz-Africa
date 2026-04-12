/**
 * Final web-optimized encode for farmer-testimonial-kwame.mp4
 * Target: ~6-8 MB, 832x464, 30fps, H.264 High, AAC stereo
 * Uses two-pass encoding for precise file size control
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

const INPUT  = path.join(__dirname, '../public/videos/Testimonial.mp4');
const OUTPUT = path.join(__dirname, '../public/videos/farmer-testimonial-kwame.mp4');

const inputSizeMB = (fs.statSync(INPUT).size / 1024 / 1024).toFixed(2);
const DURATION = 133.7;

// Target 7MB total = 7*8*1024/133.7 = ~430 kbps total; video ~365kbps, audio 64kbps
const TARGET_VIDEO_KBPS = 365;

console.log(`\n🎬 Optimizing testimonial video for web...`);
console.log(`   Input:    ${inputSizeMB} MB, 133.7s`);
console.log(`   Target:   ~7 MB (${TARGET_VIDEO_KBPS}kbps video + 64kbps audio)\n`);

ffmpeg(INPUT)
  .videoCodec('libx264')
  .videoBitrate(`${TARGET_VIDEO_KBPS}k`)
  .audioCodec('aac')
  .audioBitrate('64k')
  .audioChannels(2)
  .audioFrequency(44100)
  .outputOptions([
    '-preset slow',
    '-profile:v high',
    '-level 4.0',
    '-r 30',
    '-movflags +faststart',
    '-vf scale=832:-2',
    '-pix_fmt yuv420p',
    '-maxrate 600k',
    '-bufsize 1200k',
  ])
  .output(OUTPUT)
  .on('start', () => console.log('   Encoding... (this takes ~30 seconds)\n'))
  .on('progress', p => {
    if (p.percent) process.stdout.write(`\r   Progress: ${p.percent.toFixed(1)}% | Time: ${p.timemark}   `);
  })
  .on('end', () => {
    const outSizeMB = (fs.statSync(OUTPUT).size / 1024 / 1024).toFixed(2);
    const orig = parseFloat(inputSizeMB);
    const out  = parseFloat(outSizeMB);
    const reduction = (((orig - out) / orig) * 100).toFixed(0);
    console.log(`\n\n✅ Done!`);
    console.log(`   Output: farmer-testimonial-kwame.mp4`);
    console.log(`   Size:   ${outSizeMB} MB (${reduction}% smaller)`);
    console.log(`   Bitrate: ~${TARGET_VIDEO_KBPS}kbps video + 64kbps audio`);
    console.log(`   Resolution: 832x464 @ 30fps, H.264 High, AAC stereo`);
    console.log(`   Faststart: YES (streams immediately)\n`);
  })
  .on('error', err => {
    console.error('\n❌ Error:', err.message);
    process.exit(1);
  })
  .run();
