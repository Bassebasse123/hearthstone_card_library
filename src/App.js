import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Routes/Home";
import SingleCard from "./Routes/SingleCard";
import AllCardsProvider from "./components/AllCardsProvider";
import { useState } from "react";

function App() {
  const [playableClasses, setPlayableClasses] = useState([]);

  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              playableClasses={playableClasses}
              setPlayableClasses={setPlayableClasses}
            />
          }
        ></Route>
        <Route
          path=":cardId"
          element={
            <AllCardsProvider>
              <SingleCard />
            </AllCardsProvider>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
