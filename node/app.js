Stream = require("node-rtsp-stream");
stream = new Stream({
  name: "Bunny",
  // streamUrl: "rtsp://YOUR_IP:PORT",
  //streamUrl: "rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mp4",
  streamUrl: "rtsp://210.99.70.120:1935/live/cctv001.stream",
  wsPort: 6789,
  ffmpegOptions: { // options ffmpeg flags
    "-f": "mpegts", // output file format.
    "-vcodec": "mpeg1video", // video codec
    "-s": "640x480", // video size
    "-b:v": "1000k", // video bitrate
    "-r": "30", // video framerate
    "-bf": "0", // B-frames
    "-codec:a": "mp2", // audio codec
    "-ar": "44100", // audio sample rate
    "-ac": "1", // audio channels
    "-b:a": "128k", // audio bitrate
    '-stats': '', // an option with no neccessary value uses a blank string
  },
});

stream.on('ffmpegError', function(data) {
  console.error('FFmpeg Error:', data);
});

stream.on('ffmpegOutput', function(data) {
  console.log('FFmpeg Output:', data);
});
