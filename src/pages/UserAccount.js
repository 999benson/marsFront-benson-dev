/* eslint-disable no-mixed-spaces-and-tabs */
import React from "react";
import "../style/Login.css";

const UserAccount = () => {
  return (
    <div className="UserAccount">
      <div className="container" id="user-container">
        <form id="user-form">
          <p>Welcome</p>
          <input type="email" placeholder="Email" />
          <br />
          <input type="password" placeholder="Password" />
          <br />
          <input type="button" value="Sign in" />
          <br />
          <a href="#">Sign Up</a>
        </form>

        <div className="drops">
          <div className="drop drop-1"></div>
          <div className="drop drop-2"></div>
          <div className="drop drop-3"></div>
          <div className="drop drop-4"></div>
          <div className="drop drop-5"></div>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
