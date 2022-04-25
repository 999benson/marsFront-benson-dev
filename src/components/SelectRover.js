import React from "react";
import "../style/Filter.css";
// import { roverCamMap } from "./RoverCam";
import PropTypes from "prop-types";

function SelectRover({
  isCButtonActive,
  isOButtonActive,
  isSButtonActive,
  handleCButton,
  handleOButton,
  handleSButton,
}) {
  console.log("C", isCButtonActive);

  return (
    <div className="SelectRover">
      <div className="container">
        <div className="FilterBody">
          <h1 className="title"> Select Rover </h1>
          <div className="row ">
            <div className="col-sm">
              {" "}
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block"
                aria-pressed="true"
                id={`${isCButtonActive ? "CButtonActive" : ""}`}
                onClick={handleCButton}
              >
                Curiosity
              </button>
            </div>
            <div className="col-sm">
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block"
                aria-pressed="true"
                id={`${isOButtonActive ? "OButtonActive" : ""}`}
                onClick={handleOButton}
              >
                Opportunity
              </button>
            </div>
            <div className="col-sm">
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block"
                aria-pressed="true"
                id={`${isSButtonActive ? "SButtonActive" : ""}`}
                onClick={handleSButton}
              >
                Spirit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

SelectRover.propTypes = {
  isCButtonActive: PropTypes.any.isRequired,
  isOButtonActive: PropTypes.any.isRequired,
  isSButtonActive: PropTypes.any.isRequired,
  handleCButton: PropTypes.func.isRequired,
  handleOButton: PropTypes.func.isRequired,
  handleSButton: PropTypes.func.isRequired,
};

export default SelectRover;
