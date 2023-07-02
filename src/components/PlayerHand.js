import React from "react";
import Card from "./Card";

const PlayerHand = ({ cards }) => {
  return (
    <>
      {cards &&
        cards.map((card, index) => {
          return <Card key={index} rank={card.faceValue} suit={card.suit} />;
        })}
    </>
  );
};

export default PlayerHand;
