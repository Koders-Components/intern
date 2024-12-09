import React from "react";
import "./Divine.css";

function Card({ title, icon, description, hoverImage }) {
  return (
    <div className="card">
      <div className="card_desc">
        <div className="icon">{icon}</div>
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
      {hoverImage && (
        <div className="hover-image">
          <img src={hoverImage} alt="Hover Effect" />
          <div className="overlay">
            <button className="read-more">READ MORE</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
