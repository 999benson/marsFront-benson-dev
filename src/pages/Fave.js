import React from "react";
import PropTypes from "prop-types";
import "../style/Render.css";

function Fave({ faveIdToImage }) {
  console.log(faveIdToImage);
  const imagesArr = Array.from(faveIdToImage.values())
  console.log(imagesArr);
  return (
    <div className="Fave">
      <div className="card-group " id="cardGroup">
        {imagesArr.map((roverpic) => (
          <div className="card container" id="cardimage" key={roverpic.id}>
            <div className="card-body">
              <h5 className="card-title"> Rover: {roverpic.rover.name}</h5>
              <img className="imgs" src={roverpic.img_src} alt="" />
              <p className="card-text">
                Sol: {roverpic.sol}
                <br />
                Earth Date: {roverpic.earth_date}
                <br />
                Landing Date:{roverpic.rover.landing_date}
                <br />
                Status: {roverpic.rover.status}
              </p>
              <div className="cardlink">YES</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Fave.propTypes = {
  faveIdToImage: PropTypes.any.isRequired,
};
export default Fave;
