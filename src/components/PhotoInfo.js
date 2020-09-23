import React from "react";

export default function PhotoInfo(props) {
  return (
    <div className="photo-full-info">
      <h2>{props.photoData.title}</h2>
      <h3>By: {props.photoData.copyright}</h3>
      <p>{props.photoData.explanation}</p>
    </div>
  );
}
