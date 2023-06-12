import React from "react";
import RarityButton from "./RarityButton";
import ClassButton from "./ClassButton";

const FilterMenuLeft = ({ playableClasses, setPlayableClasses }) => {
  const rarities = ["COMMON", "RARE", "EPIC", "LEGENDARY"];
  const classesButtons = [
    "DEATHKNIGHT",
    "DEMONHUNTER",
    "DRUID",
    "HUNTER",
    "MAGE",
    "PALADIN",
    "PRIEST",
    "ROGUE",
    "SHAMAN",
    "WARLOCK",
    "WARRIOR",
  ];
  return (
    <div className="FilterMenuLeft">
      <div>
        <div className="buttonBorder3">
          {rarities.map((rarity, index) => {
            return (
              <RarityButton key={index} id={rarity}>
                {rarity}
              </RarityButton>
            );
          })}
        </div>

        <div className="buttonBorder3 classList">
          {classesButtons.map((playableClass, index) => {
            return (
              <ClassButton
                playableClasses={playableClasses}
                setPlayableClasses={setPlayableClasses}
                key={index}
                id={playableClass}
              >
                {playableClass}
              </ClassButton>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FilterMenuLeft;
