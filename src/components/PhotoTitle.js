import React from "react";

export default function PhotoTitle(props) {
  return (
    <div className="frame-bottom">
      <div className="author">
        <p>By: {props.photoData.copyright}</p>
      </div>

      <div className="photo-title">
        <h3>Photo of the day</h3>
        <h1>{props.photoData.title}</h1>
      </div>

      <div className="date">
        <p>{props.photoData.date}</p>
      </div>
    </div>
  );
}
