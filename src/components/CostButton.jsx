import React from "react";
import { useState } from "react";
import { useContext } from "react";
import AllCardsContext from "../contexts/AllCardsContext";

const CostButton = ({ id }) => {
  const [isSelected, setIsSelected] = useState(false);
  const filteredCards = useContext(AllCardsContext);

  const toggleSelect = (e) => {
    setIsSelected((isSelected) => !isSelected);
    if (!isSelected) {
      filteredCards.dispatch({
        type: "filterByCost",
        cost: parseInt(e.target.value),
      });
    } else {
      filteredCards.dispatch({
        type: "removeCostFilter",
        cost: parseInt(e.target.value),
      });
    }
  };

  return (
    <button
      value={id}
      key={id}
      className={"cardCostFilter " + (isSelected ? "selected" : "")}
      onClick={toggleSelect}
    >
      {id}
    </button>
  );
};

export default CostButton;
