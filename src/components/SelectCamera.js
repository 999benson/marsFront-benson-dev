import React from "react";
import "../style/Filter.css";
import PropTypes from "prop-types";
import SelectSol from "./SelectSol";
// {!isCButtonActive && !isOButtonActive && !isSButtonActive}
// {isCButtonActive,isOButtonActive,isSButtonActive}
function SelectCamera({
  isCButtonActive,
  isOButtonActive,
  isSButtonActive,
  handleSelectOption,
  handleSubmitData,
  // handleSolDay,
}) {
  return (
    <div className="SelectCamera">
      <div className="container">
        <h1 className="selectcam">Select Camera</h1>

        <form className="selectForm" onSubmit={handleSubmitData}>
          <div className="card" id="card">
            <div className="cardContent">
              <div className="row">
                <div className="col-12 col-md-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckDisabled"
                      name="FHAZ"
                      onChange={handleSelectOption}
                      disabled={
                        !isCButtonActive && !isOButtonActive && !isSButtonActive
                      }
                    />
                    <label className="form-check-label" htmlFor="cameraFhaz1">
                      Front Hazard Avoidance Camera
                    </label>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      onChange={handleSelectOption}
                      name="RHAZ"
                      disabled={
                        !isCButtonActive && !isOButtonActive && !isSButtonActive
                      }
                    />
                    <label className="form-check-label" htmlFor="cameraRhaz1">
                      Rear Hazard Avoidance Camera
                    </label>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      onChange={handleSelectOption}
                      name="MAST"
                      disabled={!isCButtonActive}
                    />
                    <label className="form-check-label" htmlFor="cameraMast1">
                      Mast Camera
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      onChange={handleSelectOption}
                      name="CHEMCAM"
                      disabled={!isCButtonActive}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="cameraChemcam1"
                    >
                      Chemistry and Camera Complex
                    </label>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      onChange={handleSelectOption}
                      name="MAHLI"
                      disabled={!isCButtonActive}
                    />
                    <label className="form-check-label" htmlFor="cameraMahli1">
                      Mars Hand Lens Imager
                    </label>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      onChange={handleSelectOption}
                      name="MARDI"
                      disabled={!isCButtonActive}
                    />
                    <label className="form-check-label" htmlFor="cameraMardi1">
                      Mars Descent Imager
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      onChange={handleSelectOption}
                      name="NAVCAM"
                      disabled={
                        !isCButtonActive && !isOButtonActive && !isSButtonActive
                      }
                    />
                    <label className="form-check-label" htmlFor="cameraNavcam1">
                      Navigation Camera
                    </label>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      onChange={handleSelectOption}
                      name="PANCAM"
                      disabled={!isOButtonActive && !isSButtonActive}
                    />
                    <label className="form-check-label" htmlFor="cameraPancam1">
                      Panoramic Camera
                    </label>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      onChange={handleSelectOption}
                      name="MINITES"
                      disabled={!isOButtonActive && !isSButtonActive}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="cameraMinites1"
                    >
                      Miniature Thermal Emission Spectrometer (Mini-TES)
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* handleSolDay={handleSolDay} */}
          <SelectSol />
          <div className="submitButton">
            <button type="submit" className="btn btn-primary" id="submitBtn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
SelectCamera.propTypes = {
  isCButtonActive: PropTypes.any.isRequired,
  isOButtonActive: PropTypes.any.isRequired,
  isSButtonActive: PropTypes.any.isRequired,
  handleSelectOption: PropTypes.func.isRequired,
  handleSubmitData: PropTypes.func.isRequired,
  // handleSolDay: PropTypes.func.isRequired,
};
export default SelectCamera;
