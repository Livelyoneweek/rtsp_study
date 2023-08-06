Stream = require("node-rtsp-stream");
stream = new Stream({
  name: "Bunny",
  // streamUrl: "rtsp://YOUR_IP:PORT",
  // streamUrl: "rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mp4",
  streamUrl: "rtsp://210.99.70.120:1935/live/cctv002.stream",
  wsPort: 6789,
  ffmpegOptions: { // options ffmpeg flags
    // "-f": "mpegts", // output file format.
    // "-rtsp_transport": "tcp",
  },
});

stream.on('ffmpegError', function(data) {
  console.error('FFmpeg Error:', data);
});

stream.on('ffmpegOutput', function(data) {
  console.log('FFmpeg Output:', data);
});


// const { spawn } = require('child_process');

// const ffmpegPath = '/opt/homebrew/bin/ffmpeg'; // FFmpeg 실행 파일 경로
// const inputRTSPStream = 'rtsp://210.99.70.120:1935/live/cctv002.stream'; // 입력 RTSP 스트림 URL
// const outputWebSocketURL = 'ws://localhost:6789'; // WebSocket 서버 URL
// const options = [
//   '-i', inputRTSPStream,
//   '-vsync', 'vfr', // VFR 영상 처리를 위한 옵션
//   '-f', 'mpegts',
//   '-codec:v', 'mpeg1video',
//   '-s', '960x540',
//   '-b:v', '1000k',
//   '-r', '50',
//   '-bf', '0',
//   '-codec:a', 'mp2',
//   '-ar', '44100',
//   '-ac', '1',
//   '-b:a', '128k',
//   '-'
// ];

// const express = require('express');
// const http = require('http');
// const WebSocket = require('ws');
// const { spawn } = require('child_process');

// const app = express();
// const server = http.createServer(app);
// const wss = new WebSocket.Server({ server });

// const ffmpegIP = 'localhost';
// const ffmpegPort = 6789;
// const rtspUrl = 'rtsp://210.99.70.120:1935/live/cctv002.stream';
// const ffmpegArgs = [
//   '-rtsp_transport', 'tcp',
//   '-i', rtspUrl,
//   '-f', 'mpegts',
//   '-codec:v', 'mpeg1video',
//   '-s', '960x540',
//   '-b:v', '1000k',
//   '-r', '50',
//   '-bf', '0',
//   '-codec:a', 'mp2',
//   '-ar', '44100',
//   '-ac', '1',
//   '-b:a', '128k',
//   '-stats',
//   '-vsync', 'vfr', // Use vfr vsync for smoother output
//   'pipe:1', // Output to stdout
// ];

// // WebSocket Server
// wss.on('connection', (ws) => {
//   console.log('WebSocket Client Connected');

//   // Spawn FFmpeg process
//   const ffmpegProcess = spawn('ffmpeg', ffmpegArgs);

//   // Pipe FFmpeg output to WebSocket client
//   ffmpegProcess.stdout.pipe(ws);

//   // Handle WebSocket close event
//   ws.on('close', () => {
//     console.log('WebSocket Client Disconnected');
//     ffmpegProcess.kill(); // Kill FFmpeg process when WebSocket client disconnects
//   });
// });

// const PORT = process.env.PORT || 3000;
// server.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}`);
// });







