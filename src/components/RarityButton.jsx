import React from "react";
import { useState } from "react";
import { useContext } from "react";
import AllCardsContext from "../contexts/AllCardsContext";

const RarityButton = ({ id }) => {
  const [isSelected, setIsSelected] = useState(false);
  const filteredCards = useContext(AllCardsContext);

  const toggleSelect = (e) => {
    setIsSelected((isSelected) => !isSelected);
    console.log(e.target.value);
    if (!isSelected) {
      filteredCards.dispatch({
        type: "filterByRarity",
        rarity: e.target.value,
      });
    } else {
      filteredCards.dispatch({
        type: "removeRarityFilter",
        rarity: e.target.value,
      });
    }
  };

  return (
    <button
      value={id}
      key={id}
      className={
        "cardRarityFilter " + (isSelected ? "selected" : "") + " " + id
      }
      onClick={toggleSelect}
    >
      {id}
    </button>
  );
};

export default RarityButton;
