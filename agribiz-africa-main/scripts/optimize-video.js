/**
 * Optimize Testimonial.mp4 for web delivery
 * - Re-encode at 30fps (from 60fps) — halves data
 * - Target bitrate ~600kbps video + 64kbps audio
 * - Keep H.264 High profile for better compression
 * - Maintain faststart (moov at front)
 * - Output: farmer-testimonial-kwame.mp4 (final web-ready file)
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
console.log(`\n🎬 Input:  ${INPUT}`);
console.log(`   Size:   ${inputSizeMB} MB`);
console.log(`   → Re-encoding at 30fps, H.264 High, ~600kbps video...\n`);

ffmpeg(INPUT)
  .videoCodec('libx264')
  .videoBitrate('600k')
  .audioCodec('aac')
  .audioBitrate('64k')
  .outputOptions([
    '-preset fast',
    '-profile:v high',
    '-level 4.0',
    '-r 30',               // 30fps (from 60fps)
    '-movflags +faststart', // keep moov at front
    '-vf scale=832:-2',    // maintain resolution
    '-pix_fmt yuv420p',
    '-crf 26',             // quality-based fallback
    '-maxrate 900k',
    '-bufsize 1800k',
  ])
  .output(OUTPUT)
  .on('start', cmd => console.log('ffmpeg command:', cmd.split(' ').slice(-10).join(' ') + '...'))
  .on('progress', p => {
    if (p.percent) process.stdout.write(`\r   Progress: ${p.percent.toFixed(1)}%   `);
  })
  .on('end', () => {
    const outSizeMB = (fs.statSync(OUTPUT).size / 1024 / 1024).toFixed(2);
    const reduction = (((inputSizeMB - outSizeMB) / inputSizeMB) * 100).toFixed(0);
    console.log(`\n\n✅ Output: ${OUTPUT}`);
    console.log(`   Size:  ${outSizeMB} MB (${reduction}% smaller than original)`);
    console.log('   Ready for production!\n');
  })
  .on('error', err => {
    console.error('\n❌ Error:', err.message);
    process.exit(1);
  })
  .run();
