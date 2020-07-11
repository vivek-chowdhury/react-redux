import React, { useState } from "react";
import "./Login.css";
import LoginForm from "./LoginForm/LoginForm";
import bubbleimage from "./../../assets/placeholders/bubble-image.png";

function Login() {
  const [user] = useState({ userid: "", password: "" });
  const handleChange = ({ target }) => {};
  const handleSubmit = () => {};
  return (
    <div style={{ backgroundImage: `url(${bubbleimage})` }}>
      {/* <div>
        <img src={bubbleimage} alt="Logo" />
      </div> */}
      <div className="loginContainer">
        <div className="rightSection card border-primary mb-3">
          <LoginForm
            onTextChange={handleChange}
            {...user}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
