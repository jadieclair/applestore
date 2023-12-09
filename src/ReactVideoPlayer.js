// // import React from "react";
// import { DefaultPlayer as video } from "react-html5video";
// import React, { useState } from "react"; // Import useState
// import { useNavigate } from "react-router-dom"; // Import useHistory
// import introVideo from "./videos/Tech Digest.mp4";
// import "./components/styles/Video.css";

// const ReactVideoPlayer = () => {
//   const history = useNavigate(); // Get the history object from react-router-dom
//   const [videoEnded, setVideoEnded] = useState(false);

//   const handleVideoEnd = () => {
//     if (!videoEnded) {
//       setVideoEnded(true);
//       history.push("/home"); // Navigate to the home page when video ends
//     }
//   };

//   return (
//     <>
//       <video autoPlay loop={false} onEnded={handleVideoEnd}>
//         <source src={introVideo} type="video/mp4" />
//       </video>
//     </>
//   );
// };

// export default ReactVideoPlayer;
