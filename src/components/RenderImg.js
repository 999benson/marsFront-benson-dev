import React from "react";
import "../style/Render.css";
import { RiHeartLine, RiHeartFill } from "react-icons/ri";
import PropTypes from "prop-types";

function RenderImg({ addFave, removeFave, imgs, faveIdToImage }) {
  /**
   * function that renders heart icon
   * @returns heart icon in conditional rendering
   */
  function renderHeart(_pic) {
    // let history = useHistory();
    // console.log("History.pop", history.pop);
    return (
      <a
        className="hearbtn"
        onClick={() => {
          // history.push(_pic.id);
          faveIdToImage.get(_pic.id) ? removeFave(_pic) : addFave(_pic);
        }}
      >
        {faveIdToImage.get(_pic.id) ? (
          <RiHeartFill className="heart" size={30} style={{ color: "red" }} />
        ) : (
          <RiHeartLine className="heart" size={30} style={{ color: "red" }} />
        )}
      </a>
    );
  }

  /**
   * function that displays the returned images in horizontal pairs
   * @param {*} size, shows the images in a row of size(in this case 2)
   * @param {*} array (the array returned from imgs, from the NASA API key)
   * @returns
   */
  function display(size, array) {
    let pairs = [];
    let i = 0;
    while (i < array.length) {
      pairs.push(array.slice(i, (i += size)));
    }
    return pairs;
  }
  let imagePairs = display(2, imgs);

  return (
    <div>
      <div className="imgRender">
        {imagePairs.map((rover, idx) => (
          <div className="card-group " id="cardGroup" key={idx}>
            {rover.map((roverpic) => (
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
                  <div className="cardlink">{renderHeart(roverpic)}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

RenderImg.propTypes = {
  faveIdToImage: PropTypes.any.isRequired,
  removeFave: PropTypes.any.isRequired,
  addFave: PropTypes.any.isRequired,
  imgs: PropTypes.array.isRequired,
};
export default RenderImg;
