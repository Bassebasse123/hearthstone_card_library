import React from "react";
import { useState } from "react";
import { useContext } from "react";
import AllCardsContext from "../contexts/AllCardsContext";

const ClassButton = ({ id }) => {
  const [isSelected, setIsSelected] = useState(false);
  const filteredCards = useContext(AllCardsContext);

  const toggleSelect = (e) => {
    setIsSelected((isSelected) => !isSelected);
    if (!isSelected) {
      filteredCards.dispatch({
        type: "filterByClass",
        class: e.target.value,
      });
    } else {
      filteredCards.dispatch({
        type: "removeClassFilter",
        class: e.target.value,
      });
    }
  };

  return (
    <button
      value={id}
      onClick={toggleSelect}
      className={
        "classButton " + id.toLowerCase() + " " + (isSelected ? "selected" : "")
      }
    >
      {id}
    </button>
  );
};

export default ClassButton;
