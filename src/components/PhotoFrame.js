import React, { useEffect } from "react";

// Import dependencies
import { gsap } from "gsap";

// Import assets
import "./photoFrame.css";

export default function PhotoFrame(props) {
  // Add a few effects
  useEffect(() => {
    gsap.to(".camera-frame-container", { opacity: 1, duration: 2 });
  }, []);

  return (
    <div className="camera-frame-container">
      <img src={props.photoData.url} alt="" />
      <div className="camera-frame"></div>
    </div>
  );
}
