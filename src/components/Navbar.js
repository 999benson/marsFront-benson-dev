import React from "react";
import "../style/Navbar.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ handleSubmit }) => {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <a className="navbar-brand" id="navbar-brand">
            Mars Roverland
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <p className="nav-link" id="home" onClick={handleSubmit}>
                    Home
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/MyFavorites" style={{ textDecoration: "none" }}>
                  <p className="nav-link" id="myfave">
                    My Favorites
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Curiosity" style={{ textDecoration: "none" }}>
                  <p className="nav-link" id="myfave">
                    Curiosity
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Opportunity" style={{ textDecoration: "none" }}>
                  <p className="nav-link" id="myfave">
                    Opportunity
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Spirit" style={{ textDecoration: "none" }}>
                  <p className="nav-link" id="myfave">
                    Spirit
                  </p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="btn-login">
            <Link to="/Login" style={{ textDecoration: "none" }}>
              <button className="main-btn"> Log In </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  handleSubmit: PropTypes.func,
};
export default Navbar;
