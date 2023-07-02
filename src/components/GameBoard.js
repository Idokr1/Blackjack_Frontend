import React, { useState, useEffect } from "react";
import PlayerHand from "./PlayerHand";
import DealerHand from "./DealerHand";
import GameButtons from "./GameButtons";
import Result from "./Result";
import "./gameBoard.css";
import {
  startNewGame,
  playerHit,
  checkPlayerBust,
  playerStand,
  dealerPlay,
  endGame,
  checkPlayerHand,
  checkDealerHand,
} from "../services/Api-service";

const GameBoard = () => {
  const [playerCards, setPlayerCards] = useState([]);
  const [dealerCards, setDealerCards] = useState([]);
  const [isPlayerBust, setIsPlayerBust] = useState(false);
  const [winner, setWinner] = useState(null);
  const [playerHandValue, setPlayerHandValue] = useState(0);
  const [dealerHandValue, setDealerHandValue] = useState(0);
  const [isGameStarted, setIsGameStarted] = useState(false);

  useEffect(() => {
    if (isPlayerBust) {
      HandleEndGame();
    }
  }, [isPlayerBust]);

  useEffect(() => {
    setIsGameStarted(playerCards && playerCards.length > 0);
  }, [playerCards]);

  useEffect(() => {
    HandlePlayerHandValue();
    HandleDealerHandValue();
  }, [playerCards, dealerCards]);

  const HandleNewGame = async () => {
    setIsPlayerBust(false);
    setWinner(null);
    const response = await startNewGame();
    setPlayerCards(response.data.playerHand.cards);
    setDealerCards(response.data.dealerHand.cards);
  };

  const HandlePlayerHit = async () => {
    const response = await playerHit();
    setPlayerCards(response.data.playerHand.cards);
    HandlePlayerBust();
  };

  const HandlePlayerBust = async () => {
    const response = await checkPlayerBust();
    setIsPlayerBust(response.data);
  };

  const HandlePlayerStand = async () => {
    await playerStand();
    HandleDealerPlay();
    HandleEndGame();
  };

  const HandleDealerPlay = async () => {
    const response = await dealerPlay();
    setDealerCards(response.data.dealerHand.cards);
  };

  const HandleEndGame = async () => {
    const response = await endGame();
    setWinner(response.data.winner);
  };

  const HandlePlayerHandValue = async () => {
    const response = await checkPlayerHand();
    setPlayerHandValue(response.data);
  };
  const HandleDealerHandValue = async () => {
    const response = await checkDealerHand();
    setDealerHandValue(response.data);
  };

  return (
    <div className="game-board-container">
      {winner && (
        <Result
          winner={winner}
          onClose={() => {
            setWinner(null);
            HandleNewGame();
          }}
        />
      )}
      <div className="amount-label">
        {isGameStarted && <label>{`Dealer Cards: ${dealerHandValue}`}</label>}
      </div>
      <div className="hand-container">
        <DealerHand cards={dealerCards} />
      </div>
      <div className="amount-label">
        {isGameStarted && <label>{`Player Cards: ${playerHandValue}`}</label>}
      </div>
      <div className="hand-container">
        <PlayerHand cards={playerCards} />
      </div>
      <GameButtons
        handleNewGame={HandleNewGame}
        handlePlayerHit={HandlePlayerHit}
        playerBust={isPlayerBust}
        handlePlayerStand={HandlePlayerStand}
        winner={winner}
        playerCards={playerCards}
      />
    </div>
  );
};

export default GameBoard;
