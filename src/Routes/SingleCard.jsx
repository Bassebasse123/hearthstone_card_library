import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import AllCardsContext from "../contexts/AllCardsContext";

const SingleCard = () => {
  const { state } = useContext(AllCardsContext);
  let params = useParams();
  console.log(params);
  function getCard() {
    return state.allCards.find((card) => card.id === params.cardId);
  }

  if (state.allCards === undefined) {
    return <h1>LOADING</h1>;
  } else {
    const card = getCard();

    if (state.allCards === undefined) {
      return <h1>LOADING</h1>;
    } else {
      return (
        <div
          className="flexContainer"
          style={{ width: "100vw", height: "100vh" }}
        >
          <div className="flexContainer">
            <div>
              <h2
                style={{
                  width: "300px",
                  fontStyle: "italic",
                  fontSize: "30px",
                  border: "5px solid white",
                  borderRadius: "30px",
                  padding: "10px",
                  marginRight: "10px",
                }}
              >
                "{card.flavor}"
              </h2>
              <button className="addToDeck">Add to deck</button>
            </div>

            <div
              className="cardTileBig"
              style={{
                backgroundImage: `url(https://art.hearthstonejson.com/v1/render/latest/enUS/512x/${card.id}.png)`,
              }}
            ></div>
          </div>
        </div>
      );
    }
  }
};

export default SingleCard;
