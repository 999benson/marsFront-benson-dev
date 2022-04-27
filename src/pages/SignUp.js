import React from "react";
import "../style/Login.css";
import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { BiLeftArrowAlt } from "react-icons/bi";

function SignUp() {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    status,
    inputUserName,
    setInputUserName,
    inputPassword,
    setInputPassword,
    setStatus,
  } = location;
  console.log(status);
  let button_text = "";
  if (status === "register") button_text = "Register";
  else if (status === "login") button_text = "Login";

  const register = (accountInfoObj) => {
    // Skip if empty or only containing spaces
    if (!accountInfoObj.userName || /^\s*$/.test(accountInfoObj.userName)) {
      alert("User Name is Not Given!");
      return;
    }
    if (!accountInfoObj.password || /^\s*$/.test(accountInfoObj.password)) {
      alert("Password is Not Given!");
      return;
    }

    // let salt = bcrypt.genSaltSync(10);
    // let hash = bcrypt.hashSync(accountInfoObj.password, salt);
    // accountInfoObj.password = hash;

    alert("Registration Completed!");
    fetch("/api/create_user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(accountInfoObj),
    });
  };

  const login = async (accountInfoObj) => {
    // Skip if empty or only containing spaces
    if (!accountInfoObj.userName || /^\s*$/.test(accountInfoObj.userName)) {
      alert("User Name is Not Given!");
      return;
    }
    if (!accountInfoObj.password || /^\s*$/.test(accountInfoObj.password)) {
      alert("Password is Not Given!");
      return;
    }

    let result = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName: accountInfoObj.userName }),
    });
    let resultObj = await result.json();
    let isOk = false;
    if (resultObj.length !== 0) {
      isOk = accountInfoObj.password === resultObj[0].password ? true : false;
    } else {
      alert("User Not Found!");
      return;
    }
    if (isOk) {
      localStorage.clear();
      localStorage.setItem("user", accountInfoObj.userName);
      alert("Successfully Logged in!");
      navigate("/Home");
    } else {
      alert("Wrong Password!");
    }
  };

  const handleUserNameChange = (e) => {
    // Keep the text already entered
    setInputUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    // Keep the text already entered
    setInputPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const accountInfoObj = {
      userName: inputUserName,
      password: inputPassword,
    };

    if (status === "register") register(accountInfoObj);
    else if (status === "login") login(accountInfoObj);

    setInputUserName("");
    setInputPassword("");
  };
  return (
    <div className="UserAccount">
      <div className="container" id="user-container">
        <form id="user-form" onSubmit={handleSubmit}>
          <p>Welcome</p>
          <input
            type="email"
            placeholder="Email"
            onChange={handleUserNameChange}
            value={inputUserName}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            value={inputPassword}
          />
          <br />
          <input type="button" onClick={handleSubmit} value="Sign Up" />
          <br />
          <span
            onClick={() => {
              navigate("/Login");
              setStatus("Login");
            }}
            className="back-to-login"
          >
            <BiLeftArrowAlt />
            Back to Login
          </span>
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
}

SignUp.propTypes = {
  inputUserName: PropTypes.any.isRequired,
  setInputUserName: PropTypes.any,
  inputPassword: PropTypes.any,
  setInputPassword: PropTypes.any,
  status: PropTypes.any,
  setStatus: PropTypes.any,
};
export default SignUp;
