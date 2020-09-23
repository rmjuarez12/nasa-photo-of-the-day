import React, { useEffect, useState } from "react";

// Import dependencies
import { gsap } from "gsap";

// Import assets
import "./photoFrame.css";
import Controls from "./Controls";

// Import components
import PhotoInfo from "./PhotoInfo";
import PhotoTitle from "./PhotoTitle";

export default function PhotoFrame(props) {
  // Get some states
  const [showInfo, setShowInfo] = useState(false);
  const [hideFrame, setHideFrame] = useState(false);

  // Add a few effects
  useEffect(() => {
    gsap.to(".camera-frame-container", { opacity: 1, duration: 1.5 });
    gsap.to(".camera-frame-container img", { opacity: 1, scale: 1, duration: 2, delay: 1 });
  }, []);

  // Toggle the info to show or hide
  function toggleInfo(e) {
    setShowInfo(!showInfo);

    if (showInfo === false) {
      gsap.to(".photo-full-info", { display: "block", opacity: 1, x: 0, duration: 1.5 });
      gsap.to(".frame-bottom", { display: "none", duration: 0 });
    } else {
      gsap.to(".photo-full-info", { display: "none", opacity: 0, x: "-100vw", duration: 1 });
      gsap.to(".frame-bottom", { display: "flex", duration: 0, delay: 1 });
    }
  }

  // Toggle the display of the frame
  function toggleFrame(e) {
    setHideFrame(!hideFrame);

    if (hideFrame === false) {
      gsap.to(".camera-frame-img", { opacity: 0, duration: 1.5 });
    } else {
      gsap.to(".camera-frame-img", { opacity: 1, duration: 1.5 });
    }
  }

  return (
    <div className="camera-frame-container">
      <img src={props.photoData.hdurl} alt="" />

      <div className="camera-frame-img"></div>

      <div className="camera-frame">
        <Controls
          photoData={props.photoData}
          toggleInfo={toggleInfo}
          toggleFrame={toggleFrame}
          showInfo={showInfo}
          hideFrame={hideFrame}
        />

        <PhotoInfo photoData={props.photoData} />

        <PhotoTitle photoData={props.photoData} />
      </div>
    </div>
  );
}
