
import React from "react";
import "./PhotoCard.css";

function PhotoCard({ title, image }) {
  return (
    <div className="photo-card">
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default PhotoCard;
