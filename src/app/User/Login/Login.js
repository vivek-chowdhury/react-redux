import React, { useState, useEffect } from "react";
import "./Login.css";
import LoginForm from "./LoginForm/LoginForm";
import bubbleimage from "./../../../assets/placeholders/bubble-image.png";
import { connect } from "react-redux";
import * as validateUser from "../state/userActions";
import { bindActionCreators } from "redux";

function Login(props) {
  // Contains user state
  const [user, setUser] = useState(props.user);

  //Contains error state
  const [error, setError] = useState("");

  /**
   * @description This method is responsible for checking user detail and if store already has
   * information of previous logged in user then it will pre-populate credentials if
   * user is logged out else navigate user to feeds screen.
   */
  useEffect(() => {
    if (props.user.id !== "" && props.user.isLoggedIn) {
      props.history.push("/feeds");
    }
    if (props.user.error !== "") {
      updateErrorMessage();
    }
  }, [props.history, props.user, props]);

  /**
   * @description This method is responsible for displaying error message
   * if somehow user failed to validate.
   */
  const updateErrorMessage = () => {
    setError("Invalid User naem or Password, please try again !");
  };

  /**
   * @description This method is invoked when either user type anything in the input box
   * or clicks on the check box. It is responsible for updating member variable accordingly.
   * @param {Element} param Contains reference of target element.
   */
  const handleChange = ({ target }) => {
    setUser({
      ...user,
      [target.name]:
        target.name !== "rememberMe" ? target.value : target.checked,
    });
    if (target.name === "rememberMe") {
      props.actions.toggleRememberMe(target.checked);
    }
  };

  /**
   * @description This method is invoked when user clicks on the submit button,
   * it is responsible for validating user credential by sending user id &
   * password to server for validation.
   * @param {*} event Contains reference of event.
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    props.actions.validateUser(user);
  };

  return (
    <div style={{ backgroundImage: `url(${bubbleimage})` }}>
      <div className="loginContainer">
        <div className="rightSection card border-primary mb-3">
          <LoginForm
            onChange={handleChange}
            {...user}
            onSubmit={handleSubmit}
            error={error}
          />
        </div>
      </div>
    </div>
  );
}

/**
 * @description This method retrieve slice of state from store
 * @param {*} state
 */
function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

/**
 * @description This method is responsible for mapping actions which componenet
 * will use to interact with store.
 *
 * @param {@} dispatch
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(validateUser, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
