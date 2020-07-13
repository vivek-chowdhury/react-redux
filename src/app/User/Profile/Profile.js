import React, { useState } from "react";
import { connect } from "react-redux";

import UserForm from "./UserForm";
import { updateProfile, registerUser } from "./../state/userActions";

function Profile(props) {
  // Contains detail of logged in or new user
  const [user, setUser] = useState(
    props.user.isLoggedIn
      ? props.user
      : {
          age: "",
          description: "",
          displayPicture: "",
          emailId: "",
          error: "",
          fname: "",
          gender: "male",
          id: "",
          isLoggedIn: false,
          languages: [],
          lname: "",
          password: "",
          phonenumber: "",
          projects: [],
          role: "",
          totalExperience: "",
          userType: "",
          iAgree: false,
        }
  );

  // Contains gender options
  const [genderOptions] = useState([
    { id: "male", name: "Male" },
    { id: "female", name: "Female" },
    { id: "other", name: "Other" },
  ]);

  const [error, setError] = useState("");

  /**
   * @description This method is invoked when user change anything in input field. It stores the
   * updated value in member variable.
   * @param {*} param
   */
  const handleTextChange = ({ target }) => {
    setUser({
      ...user,
      [target.name]: target.name !== "iAgree" ? target.value : target.checked,
    });
  };

  /**
   * @description This method is invoked when user clicks on the Submit button, it is
   * responsible for sending updated data to server.
   * @param {*} event
   */
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (user.isLoggedIn) {
      props.updateProfile({ ...user });
    } else {
      props.registerUser({ ...user }).then((response) => {
        console.log(response.error);
        if (response.error) {
          setError(response.error);
        } else {
          props.history.push("/");
        }
      });
    }
  };

  return (
    <React.Fragment>
      <h2>User Profile</h2>
      <div>
        <UserForm
          onTextChange={handleTextChange}
          onSubmit={handleFormSubmit}
          {...user}
          genderOptions={genderOptions}
          error={error}
        />
      </div>
    </React.Fragment>
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

// Contains object of actions
const mapDispatchToProps = {
  updateProfile,
  registerUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
