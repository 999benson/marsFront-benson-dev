import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import UserAccount from "./pages/UserAccount";
import Opportunity from "./components/Opportunity";
import Main from "./pages/Main";
import Spirit from "./components/Spirit";
import Curiosity from "./components/Curiosity";
import Landing from "./pages/Landing";
import Fave from "./pages/Fave";

function App() {
  let [faveIdToImage, setFaveIdToImage] = useState(new Map());

  const addFave = (obj) => {
    const tempMap = new Map(faveIdToImage);
    tempMap.set(obj.id, Object.assign({}, obj));
    setFaveIdToImage(tempMap);
    console.log("added", faveIdToImage);
  };
  const removeFave = (obj) => {
    const tempMap = new Map(faveIdToImage);
    tempMap.delete(obj.id);
    setFaveIdToImage(tempMap);
  };

  return (
    <div className="App" id="container">
      <BrowserRouter>
        <Navbar
          faveIdToImage={faveIdToImage}
          setFaveIdToImage={setFaveIdToImage}
        />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/Home"
            element={
              <Main
                faveIdToImage={faveIdToImage}
                setFaveIdToImage={setFaveIdToImage}
                addFave={addFave}
                removeFave={removeFave}
              />
            }
          />
          <Route
            path="/MyFavorites"
            element={
              <Fave
                faveIdToImage={faveIdToImage}
                setFaveIdToImage={setFaveIdToImage}
                addFave={addFave}
                removeFave={removeFave}
              />
            }
          />
          <Route path="/Opportunity" element={<Opportunity />} />
          <Route path="/Curiosity" element={<Curiosity />} />
          <Route path="/Spirit" element={<Spirit />} />
          <Route path="/Login" element={<UserAccount />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
