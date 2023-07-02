import React from "react";

import Card from "./Card";

const DealerHand = ({ cards }) => {
  const renderCards = (card, index) => {
    if (card.isHoleCard) {
      return <Card key={`hole-card-${index}`} rank="Hole Card" suit="" />;
    }
    return <Card key={index} rank={card.faceValue} suit={card.suit} />;
  };

  return <>{cards.map(renderCards)}</>;
};

export default DealerHand;
