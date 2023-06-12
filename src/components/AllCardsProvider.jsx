import AllCardsContext from "../contexts/AllCardsContext";
import { useEffect, useReducer } from "react";

function cardsReducer(state, action) {
  let newCostFilter;
  let newCards;
  let findIndex;
  let newRarityFilter;
  let newClassFilter;
  switch (action.type) {
    case "setAllCards":
      return {
        ...state,
        allCards: action.allCards,
        filteredCards: action.allCards
          .sort((a, b) => a.cost - b.cost)
          .sort((a, b) => a.cardClass.localeCompare(b.cardClass)),
      };
    //! -------------COST FILTER START ----------------------------
    //! ADD COST FILTER

    case "filterByCost":
      newCostFilter = state.costFilter;
      newCostFilter.push(action.cost);
      if (state.rarityFilter.length === 0 && state.classFilter.length === 0) {
        newCards = state.allCards.filter((card) => {
          return newCostFilter.includes(card.cost);
        });
      } else if (state.rarityFilter.length === 0) {
        newCards = state.allCards.filter((card) => {
          return (
            newCostFilter.includes(card.cost) &&
            state.classFilter.includes(card.cardClass)
          );
        });
      } else if (state.classFilter.length === 0) {
        newCards = state.allCards.filter((card) => {
          return (
            newCostFilter.includes(card.cost) &&
            state.rarityFilter.includes(card.rarity)
          );
        });
      } else {
        newCards = state.allCards.filter((card) => {
          return (
            newCostFilter.includes(card.cost) &&
            state.classFilter.includes(card.cardClass) &&
            state.rarityFilter.includes(card.rarity)
          );
        });
      }
      return {
        ...state,
        costFilter: newCostFilter,
        filteredCards: newCards,
      };

    //! REMOVE COST FILTER

    case "removeCostFilter":
      findIndex = state.costFilter.indexOf(action.cost);
      newCostFilter = state.costFilter;
      newCostFilter.splice(findIndex, 1);
      if (
        newCostFilter.length === 0 &&
        state.rarityFilter.length === 0 &&
        state.classFilter.length === 0
      ) {
        return {
          ...state,
          filteredCards: state.allCards,
        };
      } else if (newCostFilter.length === 0 && state.classFilter.length === 0) {
        newCards = state.allCards.filter((card) => {
          return state.rarityFilter.includes(card.rarity);
        });
      } else if (
        newCostFilter.length === 0 &&
        state.rarityFilter.length === 0
      ) {
        newCards = state.allCards.filter((card) => {
          return state.classFilter.includes(card.cardClass);
        });
      } else if (
        state.classFilter.length === 0 &&
        state.rarityFilter.length === 0
      ) {
        newCards = state.allCards.filter((card) => {
          return newCostFilter.includes(card.cost);
        });
      } else if (newCostFilter.length === 0) {
        newCards = state.allCards.filter((card) => {
          return (
            state.classFilter.includes(card.cardClass) &&
            state.rarityFilter.includes(card.rarity)
          );
        });
      } else if (state.classFilter.length === 0) {
        newCards = state.allCards.filter((card) => {
          return (
            newCostFilter.includes(card.cost) &&
            state.rarityFilter.includes(card.rarity)
          );
        });
      } else if (state.rarityFilter.length === 0) {
        newCards = state.allCards.filter((card) => {
          return (
            newCostFilter.includes(card.cost) &&
            state.classFilter.includes(card.cardClass)
          );
        });
      } else {
        newCards = state.allCards.filter((card) => {
          return (
            newCostFilter.includes(card.cost) &&
            state.classFilter.includes(card.cardClass) &&
            state.rarityFilter.includes(card.rarity)
          );
        });
      }
      return {
        ...state,
        costFilter: newCostFilter,
        filteredCards: newCards,
      };
    //! -------------COST FILTER END ----------------------------

    //! -------------RARITY FILTER START ----------------------------
    //! ADD RARITY FILTER

    case "filterByRarity":
      newRarityFilter = state.rarityFilter;
      newRarityFilter.push(action.rarity);
      if (state.costFilter.length === 0 && state.classFilter.length === 0) {
        newCards = state.allCards.filter((card) => {
          return newRarityFilter.includes(card.rarity);
        });
      } else if (state.costFilter.length === 0) {
        newCards = state.allCards.filter((card) => {
          return (
            newRarityFilter.includes(card.rarity) &&
            state.classFilter.includes(card.cardClass)
          );
        });
      } else if (state.classFilter.length === 0) {
        newCards = state.allCards.filter((card) => {
          return (
            newRarityFilter.includes(card.rarity) &&
            state.costFilter.includes(card.cost)
          );
        });
      } else {
        newCards = state.allCards.filter((card) => {
          return (
            newRarityFilter.includes(card.rarity) &&
            state.classFilter.includes(card.cardClass) &&
            state.costFilter.includes(card.cost)
          );
        });
      }
      return {
        ...state,
        rarityFilter: newRarityFilter,
        filteredCards: newCards,
      };

    //! REMOVE RARITY FILTER

    case "removeRarityFilter":
      findIndex = state.rarityFilter.indexOf(action.rarity);
      newRarityFilter = state.rarityFilter;
      newRarityFilter.splice(findIndex, 1);
      if (
        newRarityFilter.length === 0 &&
        state.costFilter.length === 0 &&
        state.classFilter.length === 0
      ) {
        return {
          ...state,
          filteredCards: state.allCards,
        };
      } else if (
        newRarityFilter.length === 0 &&
        state.classFilter.length === 0
      ) {
        newCards = state.allCards.filter((card) => {
          return state.costFilter.includes(card.cost);
        });
      } else if (
        newRarityFilter.length === 0 &&
        state.costFilter.length === 0
      ) {
        newCards = state.allCards.filter((card) => {
          return state.classFilter.includes(card.cardClass);
        });
      } else if (
        state.classFilter.length === 0 &&
        state.costFilter.length === 0
      ) {
        newCards = state.allCards.filter((card) => {
          return newRarityFilter.includes(card.rarity);
        });
      } else if (newRarityFilter.length === 0) {
        newCards = state.allCards.filter((card) => {
          return (
            state.classFilter.includes(card.cardClass) &&
            state.costFilter.includes(card.cost)
          );
        });
      } else if (state.classFilter.length === 0) {
        newCards = state.allCards.filter((card) => {
          return (
            newRarityFilter.includes(card.rarity) &&
            state.costFilter.includes(card.cost)
          );
        });
      } else if (state.costFilter.length === 0) {
        newCards = state.allCards.filter((card) => {
          return (
            newRarityFilter.includes(card.rarity) &&
            state.classFilter.includes(card.cardClass)
          );
        });
      } else {
        newCards = state.allCards.filter((card) => {
          return (
            newRarityFilter.includes(card.rarity) &&
            state.classFilter.includes(card.cardClass) &&
            state.costFilter.includes(card.cost)
          );
        });
      }
      return {
        ...state,
        rarityFilter: newRarityFilter,
        filteredCards: newCards,
      };

    //! -------------RARITY FILTER END ----------------------------

    //! -------------CLASS FILTER START ----------------------------

    //! ADD CLASS FILTER

    case "filterByClass":
      newClassFilter = state.classFilter;
      newClassFilter.push(action.class);
      if (state.costFilter.length === 0 && state.rarityFilter.length === 0) {
        newCards = state.allCards.filter((card) => {
          return newClassFilter.includes(card.cardClass);
        });
      } else if (state.costFilter.length === 0) {
        newCards = state.allCards.filter((card) => {
          return (
            newClassFilter.includes(card.cardClass) &&
            state.rarityFilter.includes(card.rarity)
          );
        });
      } else if (state.rarityFilter.length === 0) {
        newCards = state.allCards.filter((card) => {
          return (
            newClassFilter.includes(card.cardClass) &&
            state.costFilter.includes(card.cost)
          );
        });
      } else {
        newCards = state.allCards.filter((card) => {
          return (
            newClassFilter.includes(card.cardClass) &&
            state.rarityFilter.includes(card.rarity) &&
            state.costFilter.includes(card.cost)
          );
        });
      }
      return {
        ...state,
        classFilter: newClassFilter,
        filteredCards: newCards,
      };

    case "removeClassFilter":
      findIndex = state.classFilter.indexOf(action.class);
      newClassFilter = state.classFilter;
      newClassFilter.splice(findIndex, 1);
      if (
        newClassFilter.length === 0 &&
        state.costFilter.length === 0 &&
        state.rarityFilter.length === 0
      ) {
        return {
          ...state,
          filteredCards: state.allCards,
        };
      } else if (
        newClassFilter.length === 0 &&
        state.rarityFilter.length === 0
      ) {
        newCards = state.allCards.filter((card) => {
          return state.costFilter.includes(card.cost);
        });
      } else if (newClassFilter.length === 0 && state.costFilter.length === 0) {
        newCards = state.allCards.filter((card) => {
          return state.rarityFilter.includes(card.rarity);
        });
      } else if (
        state.rarityFilter.length === 0 &&
        state.costFilter.length === 0
      ) {
        newCards = state.allCards.filter((card) => {
          return newClassFilter.includes(card.cardClass);
        });
      } else if (newClassFilter.length === 0) {
        newCards = state.allCards.filter((card) => {
          return (
            state.rarityFilter.includes(card.rarity) &&
            state.costFilter.includes(card.cost)
          );
        });
      } else if (state.rarityFilter.length === 0) {
        newCards = state.allCards.filter((card) => {
          return (
            newClassFilter.includes(card.cardClass) &&
            state.costFilter.includes(card.cost)
          );
        });
      } else if (state.costFilter.length === 0) {
        newCards = state.allCards.filter((card) => {
          return (
            newClassFilter.includes(card.cardClass) &&
            state.rarityFilter.includes(card.rarity)
          );
        });
      } else {
        newCards = state.allCards.filter((card) => {
          return (
            newClassFilter.includes(card.cardClass) &&
            state.rarityFilter.includes(card.rarity) &&
            state.costFilter.includes(card.cost)
          );
        });
      }
      return {
        ...state,
        classFilter: newClassFilter,
        filteredCards: newCards,
      };
    //! REMOVE CLASS FILTER

    //! -------------CLASS FILTER END ----------------------------

    default:
      break;
  }
}
const AllCardsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cardsReducer, {
    costFilter: [],
    rarityFilter: [],
    classFilter: [],
  });
  console.log(state.classFilter);

  useEffect(() => {
    async function fetchCardsData() {
      try {
        const response = await fetch(
          "https://api.hearthstonejson.com/v1/176014/enUS/cards.collectible.json"
        );
        const result = await response.json();
        dispatch({
          type: "setAllCards",
          allCards: result.filter((card) => card.type !== "HERO"),
        });
      } catch (error) {
        console.error(error);
      }
    }
    fetchCardsData();
  }, []);
  console.log(state);

  return (
    <AllCardsContext.Provider value={{ state, dispatch }}>
      {children}
    </AllCardsContext.Provider>
  );
};

export default AllCardsProvider;
