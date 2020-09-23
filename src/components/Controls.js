import React, { useState } from "react";

// Import dependencies
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";

export default function Controls(props) {
  return (
    <div className="controls">
      <div className="info-menu-container">
        <button onClick={props.toggleInfo}>
          {props.showInfo ? "Hide" : "Show"} Info <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      <div className="info-menu-container">
        <button onClick={props.toggleFrame}>
          {props.hideFrame ? "Show" : "Hide"} Frame <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </div>
  );
}
