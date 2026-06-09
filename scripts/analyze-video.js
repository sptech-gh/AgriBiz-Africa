import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';
import ffprobeStatic from 'ffprobe-static';
import ffmpeg from 'fluent-ffmpeg';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
ffmpeg.setFfmpegPath(ffmpegInstaller.path);
ffmpeg.setFfprobePath(ffprobeStatic.path);

const videoPath = path.join(__dirname, '../public/videos/Testimonial.mp4');

ffmpeg.ffprobe(videoPath, (err, metadata) => {
  if (err) { console.error('Error:', err.message); process.exit(1); }

  const fmt = metadata.format;
  const videoStream = metadata.streams.find(s => s.codec_type === 'video');
  const audioStream = metadata.streams.find(s => s.codec_type === 'audio');

  const fileSizeMB = (fs.statSync(videoPath).size / 1024 / 1024).toFixed(2);
  const durationSec = parseFloat(fmt.duration).toFixed(1);
  const bitrateMbps = (fmt.bit_rate / 1000000).toFixed(2);

  console.log('\n========== VIDEO ANALYSIS ==========');
  console.log('File size:    ', fileSizeMB, 'MB');
  console.log('Duration:     ', durationSec, 'seconds');
  console.log('Total bitrate:', bitrateMbps, 'Mbps');
  console.log('Container:    ', fmt.format_long_name);

  if (videoStream) {
    console.log('\n--- VIDEO STREAM ---');
    console.log('Codec:       ', videoStream.codec_name.toUpperCase());
    console.log('Resolution:  ', videoStream.width + 'x' + videoStream.height);
    console.log('Rotation:    ', videoStream.tags?.rotate || videoStream.side_data_list?.[0]?.rotation || '0', 'deg');
    console.log('Frame rate:  ', eval(videoStream.r_frame_rate).toFixed(1), 'fps');
    console.log('Bitrate:     ', (videoStream.bit_rate / 1000).toFixed(0), 'kbps');
    console.log('Profile:     ', videoStream.profile);
    console.log('Level:       ', videoStream.level);
    console.log('Color space: ', videoStream.color_space || 'unknown');
    console.log('Pix format:  ', videoStream.pix_fmt);
  }

  if (audioStream) {
    console.log('\n--- AUDIO STREAM ---');
    console.log('Codec:       ', audioStream.codec_name.toUpperCase());
    console.log('Channels:    ', audioStream.channels, '(' + (audioStream.channel_layout || '') + ')');
    console.log('Sample rate: ', audioStream.sample_rate, 'Hz');
    console.log('Bitrate:     ', (audioStream.bit_rate / 1000).toFixed(0), 'kbps');
  }

  console.log('\n--- QUALITY ASSESSMENT ---');
  const w = videoStream?.width || 0;
  const h = videoStream?.height || 0;
  const longEdge = Math.max(w, h);
  const res = longEdge >= 1080 ? 'HD (1080p+)' : longEdge >= 720 ? 'HD (720p)' : longEdge >= 480 ? 'SD (480p)' : 'Low';
  const fps = videoStream ? eval(videoStream.r_frame_rate) : 0;
  const totalBr = fmt.bit_rate / 1000000;

  console.log('Resolution quality:', res);
  console.log('Frame rate quality:', fps >= 24 ? 'GOOD (' + fps.toFixed(0) + 'fps)' : 'LOW (' + fps.toFixed(0) + 'fps)');
  console.log('Bitrate quality:   ', totalBr > 4 ? 'HIGH (may need compression)' : totalBr > 1 ? 'GOOD' : 'LOW');
  console.log('File size:         ', parseFloat(fileSizeMB) > 15 ? 'LARGE - needs compression' : parseFloat(fileSizeMB) > 5 ? 'MODERATE - can optimize' : 'SMALL - OK');
  console.log('Web faststart:      YES (moov at byte 52)');

  const suitable = longEdge >= 720 && fps >= 24;
  console.log('\n✅ SUITABLE FOR WEB USE:', suitable ? 'YES' : 'NO - too low quality');
  console.log('🗜  NEEDS COMPRESSION:', parseFloat(fileSizeMB) > 8 ? 'YES' : 'NO');
  console.log('=====================================\n');
});
