import React from "react";
import "./card.css";

const Card = ({ rank, suit }) => {
  var src = `/images/cards/${rank}-${suit}.png`;

  return (
    <div className="main-container">
      <div className="card-container">
        <img alt="card" src={src} width="300" height="300" />;
      </div>
    </div>
  );
};

export default Card;
