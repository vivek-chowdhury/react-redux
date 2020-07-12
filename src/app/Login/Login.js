import React, { useState } from "react";
import "./Login.css";
import LoginForm from "./LoginForm/LoginForm";
import bubbleimage from "./../../assets/placeholders/bubble-image.png";
import * as LoginServices from "./../../api/LoginServices";

function Login(props) {
  const [user, setUser] = useState({ userId: "", password: "" });

  const handleChange = ({ target }) => {
    setUser({
      ...user,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    LoginServices.validateUser(user.userId, user.password).then((response) => {
      console.log(response);
      props.history.push("/feeds");
    });
  };

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
