import React from "react";

// Import assets
import nasaLogo from "../assets/nasa-logo.png";

// Import dependencies
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Controls(props) {
  return (
    <div className="controls">
      <div className="info-menu-container">
        <button onClick={props.toggleInfo}>
          {props.showInfo ? "Hide" : "Show"} Info <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      <img src={nasaLogo} alt="" />

      <div className="info-menu-container">
        <button onClick={props.toggleFrame}>
          {props.hideFrame ? "Show" : "Hide"} Frame <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </div>
  );
}
