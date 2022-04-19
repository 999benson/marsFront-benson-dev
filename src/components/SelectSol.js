import React from "react";
import "../style/Filter.css";
// import PropTypes from "prop-types";

// { handleSolDay }
function SelectSol() {
  return (
    <div className="form-group" id="SolForm">
      <label htmlFor="formGroupExampleInput" id="Sol">
        <h1>Enter Sol Day</h1>
      </label>
      <input
        type="number"
        className="form-control"
        min="0"
        name="sol"
        // onInput={handleSolDay}
      />
      <div className="default">If not entered default is 1000 Sol</div>
    </div>
  );
}
SelectSol.propTypes = {
  // handleSolDay: PropTypes.func.isRequired,
};
export default SelectSol;
