import React from "react";
import "../style/Filter.css";
import SelectRover from "../components/SelectRover";
import SelectCamera from "../components/SelectCamera";
// import SelectSol from "../components/SelectSol";
import PropTypes from "prop-types";

function Filter({
  imgs,
  isCButtonActive,
  isOButtonActive,
  isSButtonActive,
  handleCButton,
  handleOButton,
  handleSButton,
  handleSelectOption,
  handleSubmitData,
  // handleSolDay,
}) {
  // const [isCButtonActive, setCButtonActive] = useState(false);
  // const [isOButtonActive, setOButtonActive] = useState(false);
  // const [isSButtonActive, setSButtonActive] = useState(false);

  // const [camera, setCamera] = useState({
  //   Curiosity: [],
  //   Opportunity: [],
  //   Spirit: [],
  // });

  // // console.log("camera", camera);
  // /**
  //  * handleSelectOption function handles the form of the selected cameras in "SelectCamera.js" component
  //  * @param {*} e is event
  //  */
  // const handleSelectOption = (e) => {
  //   const { name, checked } = e.target;
  //   // const { Curiosity, Opportunity, Spirit} = camera;

  //   console.log(`${name} is ${checked}`);

  //   // Case 1 : The user checks the box
  //   if (checked) {
  //     if (isCButtonActive) {
  //       setCamera({ ...camera, Curiosity: [...camera.Curiosity, name] });
  //     }
  //     if (isOButtonActive) {
  //       setCamera({ ...camera, Opportunity: [...camera.Opportunity, name] });
  //     }
  //     if (isSButtonActive) {
  //       setCamera({ ...camera, Spirit: [...camera.Spirit, name] });
  //     }
  //   }
  //   // Case 2  : The user unchecks the box
  //   else {
  //     setCamera({
  //       Curiosity: camera.Curiosity.filter((e) => e !== name),
  //       Opportunity: camera.Opportunity.filter((e) => e !== name),
  //       Spirit: camera.Spirit.filter((e) => e !== name),
  //     });
  //   }
  // };

  // const handleSubmitData = (e) => {
  //   e.preventDefault();
  //   console.log("Submitted values", camera);
  // };

  // /** handle button functions toggle button activation when Rovers are selected or deselected */
  // const handleCButton = () => {
  //   isCButtonActive ? setCButtonActive(false) : setCButtonActive(true);
  // };

  // const handleOButton = () => {
  //   isOButtonActive ? setOButtonActive(false) : setOButtonActive(true);
  // };

  // const handleSButton = () => {
  //   isSButtonActive ? setSButtonActive(false) : setSButtonActive(true);
  // };

  //functions passed as props to children components
  return (
    <div className="Filter">
      <SelectRover
        isCButtonActive={isCButtonActive}
        isOButtonActive={isOButtonActive}
        isSButtonActive={isSButtonActive}
        handleCButton={handleCButton}
        handleOButton={handleOButton}
        handleSButton={handleSButton}
      />
      <SelectCamera
        imgs={imgs}
        isCButtonActive={isCButtonActive}
        isOButtonActive={isOButtonActive}
        isSButtonActive={isSButtonActive}
        handleSelectOption={handleSelectOption}
        handleSubmitData={handleSubmitData}
        // handleSolDay={handleSolDay}
      />
      {/* <SelectSol /> */}
    </div>
  );
}

Filter.propTypes = {
  imgs: PropTypes.array.isRequired,
  isCButtonActive: PropTypes.bool.isRequired,
  isOButtonActive: PropTypes.bool.isRequired,
  isSButtonActive: PropTypes.bool.isRequired,
  handleCButton: PropTypes.func.isRequired,
  handleOButton: PropTypes.func.isRequired,
  handleSButton: PropTypes.func.isRequired,
  handleSelectOption: PropTypes.func.isRequired,
  handleSubmitData: PropTypes.func.isRequired,
  // handleSolDay: PropTypes.func.isRequired,
};

export default Filter;
