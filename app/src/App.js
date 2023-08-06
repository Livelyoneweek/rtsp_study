import React, { useEffect, useState } from "react";
import "./App.css";
import JSMpeg from "@cycjimmy/jsmpeg-player";

const ffmpegIP = "localhost";

const App = () => {
  const [player, setPlayer] = useState(null);

  const startPlayer = () => {
    var videoUrl = `ws://${ffmpegIP}:6789/`;
    var player = new JSMpeg.VideoElement("#video-canvas", videoUrl, {
      autoplay: true,
      bufferSize: 2048 * 2048, // 원하는 버퍼 크기로 설정 (디폴트: 512kb)
    });
    setPlayer(player);
    console.log(player);
  };

  return (
    <div id="body">
      <div
        id="title"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "28px",
          fontWeight: "bold",
          marginTop: "10px",
          marginBottom: "10px",
          color: "blue",
        }}
      >
        Player stream RTSP
      </div>
      <button onClick={startPlayer}>Start Streaming</button>
      <div id="video-canvas" style={{ height: "480px", width: "640px" }}></div>
    </div>
  );
};

export default App;

// import React, { useEffect, useRef } from "react";
// import "./App.css";

// const App = () => {
//   const videoRef = useRef(null);

//   const startPlayer = () => {
//     const videoUrl = `ws://localhost:6789/`;
//     videoRef.current.src = videoUrl;
//     videoRef.current.play();
//   };

//   return (
//     <div id="body">
//       <div
//         id="title"
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           fontSize: "28px",
//           fontWeight: "bold",
//           marginTop: "10px",
//           marginBottom: "10px",
//           color: "blue",
//         }}
//       >
//         Player stream RTSP
//       </div>
//       <button onClick={startPlayer}>Start Streaming1</button>
//       <video
//         ref={videoRef}
//         style={{ height: "480px", width: "640px" }}
//         controls
//       ></video>
//     </div>
//   );
// };

// export default App;
