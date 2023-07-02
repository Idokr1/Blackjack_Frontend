import React, { useEffect, useState } from "react";
import "./gameButtons.css";

const GameButtons = ({
  handleNewGame,
  handlePlayerHit,
  playerBust,
  handlePlayerStand,
  winner,
  playerCards,
}) => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  useEffect(() => {
    setIsGameStarted(playerCards && playerCards.length > 0);
  }, [playerCards]);

  return (
    <div className="buttons-container">
      <button className="btn" onClick={handleNewGame}>
        New Game
      </button>
      <button
        className="btn"
        disabled={playerBust || winner || !isGameStarted}
        onClick={handlePlayerHit}
      >
        Hit
      </button>
      <button
        className="btn"
        disabled={winner || !isGameStarted}
        onClick={handlePlayerStand}
      >
        Stand
      </button>
    </div>
  );
};

export default GameButtons;
