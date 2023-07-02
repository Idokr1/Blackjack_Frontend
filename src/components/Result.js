import React from "react";
import "./result.css";

const Result = ({ winner, onClose }) => {
  return (
    <div className="result-background">
      <div className="result-info">
        <h2>{winner === "Player" ? "You Won!" : "You Lost!"}</h2>
        <button className="close-result-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Result;
