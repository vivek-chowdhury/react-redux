import React, { useState, useEffect } from "react";
import "./Login.css";
import LoginForm from "./LoginForm/LoginForm";
import bubbleimage from "./../../assets/placeholders/bubble-image.png";
// import * as LoginServices from "./../../api/LoginServices";
import { connect } from "react-redux";
import * as validateUser from "./loginActions";
import { bindActionCreators } from "redux";

function Login(props) {
  const [user, setUser] = useState({ userId: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ target }) => {
    setUser({
      ...user,
      [target.name]: target.value,
    });
  };

  useEffect(() => {
    if (props.user.id !== "") {
      props.history.push("/feeds");
    }
    if (props.user.error !== "") {
      updateErrorMessage();
    }
  }, [props.history, props.user, props]);

  const updateErrorMessage = () => {
    setError("Invalid User naem or Password, please try again !");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // LoginServices.validateUser(user.userId, user.password).then((response) => {
    //   console.log(response);
    //   if (!response.error) {
    //     props.history.push("/feeds");
    //   } else {
    //     setError("Invalid User naem or Password, please try again !");
    //     // TODO: Need to display error message
    //   }
    // });
    props.actions.validateUser(user);
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
            error={error}
          />
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(validateUser, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
