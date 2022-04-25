/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/Navbar";
import RenderImg from "../components/RenderImg";
import "../style/Home.css";
import Fave from "./Fave";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

const Home = ({ imgs, faveIdToImage, setFaveIdToImage }) => {
  // const [faveList, setFaveList] = useState([]);

  /**
   * Function that adds and removes favorited rover images
   * @param {*} obj takes object that is clicked
   * @param {*} heartMap takes the hash map of "heart"
   */
  // const addFave = (obj, heartMap) => {
  //   if (heartMap.get(obj.id)) {
  //     setFaveList([...faveList].concat(obj));
  //   } else {
  //     setFaveList(faveList.filter((i) => i.id !== obj.id));
  //   }
  //   console.log("FaveList in Home", faveList);
  // };

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
};
export default Home;
