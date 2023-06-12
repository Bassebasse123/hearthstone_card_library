import React, { useState } from "react";
import AllCardsProvider from "../components/AllCardsProvider";
import CollectionViewer from "../components/CollectionViewer";
import FilterMenuLeft from "../components/FilterMenuLeft";
import FilterMenuTop from "../components/FilterMenuTop";

const Home = ({ playableClasses, setPlayableClasses }) => {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <AllCardsProvider>
      <FilterMenuTop
        inputSearch={inputSearch}
        setInputSearch={setInputSearch}
      ></FilterMenuTop>
      <FilterMenuLeft
        playableClasses={playableClasses}
        setPlayableClasses={setPlayableClasses}
      ></FilterMenuLeft>
      <CollectionViewer
        inputSearch={inputSearch}
        playableClasses={playableClasses}
      ></CollectionViewer>
    </AllCardsProvider>
  );
};

export default Home;
