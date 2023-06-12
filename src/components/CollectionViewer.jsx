import React, { useContext } from "react";
import AllCardsContext from "../contexts/AllCardsContext";
import { NavLink } from "react-router-dom";

const CardViewer = ({ inputSearch }) => {
  const { state } = useContext(AllCardsContext);

  if (state.filteredCards) {
    return (
      <div className="collectionViewer">
        {state.filteredCards

          .filter((card) => {
            if (card.text === undefined) {
              return card.name
                .toLowerCase()
                .includes(inputSearch.toLowerCase());
            } else {
              return (
                card.name.toLowerCase().includes(inputSearch.toLowerCase()) ||
                card.text.toLowerCase().includes(inputSearch.toLowerCase())
              );
            }
          })

          .map((card, index) => {
            if (index <= 200)
              return (
                <NavLink to={`/${card.id}`} key={card.id}>
                  <div
                    className={
                      "cardTile " +
                      (card.rarity === "LEGENDARY"
                        ? "legendary"
                        : card.rarity === "EPIC"
                        ? "epic"
                        : card.rarity === "RARE"
                        ? "rare"
                        : "common")
                    }
                    style={{
                      backgroundImage: `url(https://art.hearthstonejson.com/v1/256x/${card.id}.jpg)`,
                    }}
                  >
                    <h2 className="costs">{card.cost}</h2>
                    <div className="cardTileHeader">
                      <h3>{card.name}</h3>
                      {card.text ? (
                        <p dangerouslySetInnerHTML={{ __html: card.text }} />
                      ) : null}
                    </div>
                    {card.attack ? (
                      <h2 className="attack">{card.attack}</h2>
                    ) : null}
                    {card.health ? (
                      <h2 className="health">{card.health}</h2>
                    ) : null}
                    {card.type === "SPELL" ? (
                      <h2 className="type">{card.spellSchool}</h2>
                    ) : card.type === "MINION" ? (
                      <h2 className="type">{card.race}</h2>
                    ) : (
                      <h2 className="type">{card.type}</h2>
                    )}
                    {card.cardClass === "NEUTRAL" ? null : card.cardClass ? (
                      <h2
                        className={"cardClass " + card.cardClass.toLowerCase()}
                      >
                        {card.cardClass}
                      </h2>
                    ) : null}
                  </div>
                </NavLink>
              );
          })}
      </div>
    );
  } else {
    return <h1>LOADING</h1>;
  }
};

export default CardViewer;
