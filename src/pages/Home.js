/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/Navbar";
import RenderImg from "../components/RenderImg";
import "../style/Home.css";
import Fave from "./Fave";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

const Home = ({
  imgs,
  faveIdToImage,
  setFaveIdToImage,
  addFave,
  removeFave,
}) => {
  // const addFave = (obj) => {
  //   const tempMap = new Map(faveIdToImage);
  //   tempMap.set(obj.id, Object.assign({}, obj));
  //   setFaveIdToImage(tempMap);
  //   console.log("added", faveIdToImage);
  // };
  // const removeFave = (obj) => {
  //   const tempMap = new Map(faveIdToImage);
  //   tempMap.delete(obj.id);
  //   setFaveIdToImage(tempMap);
  // };
  // console.log("HOME FAVELIST", faveList);

  return (
    <div className="Home">
      <div className="container">
        <div className="inHome">
          <div className=""></div>
          <RenderImg
            addFave={addFave}
            removeFave={removeFave}
            imgs={imgs}
            faveIdToImage={faveIdToImage}
          />
          {/* <Fave faveIdToImage={faveIdToImage} /> */}
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  imgs: PropTypes.array.isRequired,
  faveIdToImage: PropTypes.any.isRequired,
  setFaveIdToImage: PropTypes.func.isRequired,
  addFave: PropTypes.func.isRequired,
  removeFave: PropTypes.func.isRequired,
};
export default Home;
