import React, { useState, useEffect } from "react";
// import Home from "./Home";
import Filter from "./Filter";
import axios from "axios";
import Home from "./Home";
// import Navbar from "../components/Navbar";
import PropTypes from "prop-types";
// import { useLocation } from "react-router-dom";

function Main({ faveIdToImage, setFaveIdToImage }) {
  // let locat = useLocation();
  // console.log(locat);
  // const [faveIdToImage, setFaveIdToImage] = useState(
  //   locat.state["faveIdToImage"]
  // );

  // console.log("Print faveIdToImage in Main", locat);
  const [roverToImage, setRoverToImage] = useState(
    new Map([
      ["curiosity", []],
      ["opportunity", []],
      ["spirit", []],
    ])
  );

  let imgs = [];
  for (let value of roverToImage.values()) {
    imgs = imgs.concat(value);
  }
  console.log(imgs);

  const [isCButtonActive, setCButtonActive] = useState(false);
  const [isOButtonActive, setOButtonActive] = useState(false);
  const [isSButtonActive, setSButtonActive] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [camera, setCamera] = useState([]);
  const [roverToCamera, setRoverToCamera] = useState(
    new Map([
      ["curiosity", []],
      ["opportunity", []],
      ["spirit", []],
    ])
  );

  const [solDay, setSolDay] = useState(1000);
  console.log(solDay);
  /**
   * function that gets http request
   * @param {*} cam is the rover (string)
   */
  function getReq(_rover) {
    if (roverToCamera.get(_rover).length > 0) {
      return axios
        .get(
          `https://api.nasa.gov/mars-photos/api/v1/rovers/${_rover}/photos?sol=${solDay}&api_key=c1FNqfNYAzqQKjJ6clG3rXbXzXFeCtGbVlZU0O1K`
        )
        .then((res) => {
          console.log("roverToImage", roverToImage);
          return res.data.photos.filter((i) => {
            if (roverToCamera.get(_rover).includes(i.camera.name)) {
              return true;
            }
            return false;
          });
        })
        .catch((err) => console.log(err));
    }
    return [];
  }
  console.log(roverToCamera);

  useEffect(() => {
    const fetchData = async () => {
      const [imgsC, imgsO, imgsS] = await Promise.all([
        getReq("curiosity"),
        getReq("opportunity"),
        getReq("spirit"),
      ]);
      let tempMap = new Map();
      tempMap.set("curiosity", imgsC);
      tempMap.set("opportunity", imgsO);
      tempMap.set("spirit", imgsS);
      setRoverToImage(tempMap);
    };
    fetchData();
  }, [solDay, roverToCamera]);
  console.log(imgs);
  /**
   * handleSelectOption function handles the form of the selected cameras in "SelectCamera.js" component
   * @param {*} e is event
   */
  const handleSelectOption = (e) => {
    const { name, checked } = e.target;

    console.log(`${name} is ${checked}`);

    // Case 1 : The user checks the box
    if (checked) {
      setCamera([...camera, name]);
    }
    // Case 2  : The user unchecks the box
    else {
      setCamera(camera.filter((e) => e !== name));
    }
  };

  /**
   * function that handles data when form is submitted
   * @param {*} e
   */
  const handleSubmitData = (e) => {
    e.preventDefault();
    setSubmit(false);

    if (e.target.sol.value <= 0) {
      setSolDay(solDay);
    } else {
      setSolDay(e.target.sol.value);
    }

    let tempRover = new Map();

    if (!isCButtonActive) {
      tempRover.set("curiosity", []);
    } else {
      tempRover.set(
        "curiosity",
        camera.filter((e) => {
          if (e !== "PANCAM" && e !== "MINITES") {
            return true;
          }
          return false;
        })
      );
    }

    if (!isOButtonActive) {
      tempRover.set("opportunity", []);
    } else {
      tempRover.set(
        "opportunity",
        camera.filter(
          (e) =>
            e !== "MAST" && e !== "CHEMCAM" && e !== "MAHLI" && e !== "MARDI"
        )
      );
    }
    if (!isSButtonActive) {
      tempRover.set("spirit", []);
    } else {
      tempRover.set(
        "spirit",
        camera.filter(
          (e) =>
            e !== "MAST" && e !== "CHEMCAM" && e !== "MAHLI" && e !== "MARDI"
        )
      );
    }
    setRoverToCamera(tempRover);

    setSubmit(true);
    console.log("Submitted values", camera);
  };

  /** handle button functions toggle button activation when Rovers are selected or deselected */
  const handleCButton = () => {
    isCButtonActive ? setCButtonActive(false) : setCButtonActive(true);
  };

  const handleOButton = () => {
    isOButtonActive ? setOButtonActive(false) : setOButtonActive(true);
  };

  const handleSButton = () => {
    isSButtonActive ? setSButtonActive(false) : setSButtonActive(true);
  };

  //functions passed as props to children components
  return (
    <div className="Main">
      {/* <Navbar handleSubmit={handleSubmit} faveIdToImage={faveIdToImage} /> */}
      {submit ? (
        <Home
          imgs={imgs}
          faveIdToImage={faveIdToImage}
          setFaveIdToImage={setFaveIdToImage}
        />
      ) : (
        <Filter
          imgs={imgs}
          isCButtonActive={isCButtonActive}
          isOButtonActive={isOButtonActive}
          isSButtonActive={isSButtonActive}
          handleCButton={handleCButton}
          handleOButton={handleOButton}
          handleSButton={handleSButton}
          handleSelectOption={handleSelectOption}
          handleSubmitData={handleSubmitData}
        />
      )}
      {/* <Home imgs ={imgs} /> */}
    </div>
  );
}
Main.propTypes = {
  faveIdToImage: PropTypes.any.isRequired,
  setFaveIdToImage: PropTypes.any,
};
export default Main;
