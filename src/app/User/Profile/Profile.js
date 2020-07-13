import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import ReactDOM from "react-dom";

import DialogBox from "./../../Shared/Dialog/DialogBox";
import UserForm from "./UserForm";
import { updateProfile, registerUser } from "./../state/userActions";
import { loadLanguages, loadProfileStructure } from "./profileActions";

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

  // Contains error message
  const [error, setError] = useState("");

  // Contain true if dialog box is visible else false
  const [showDialog, setShowDialog] = useState(false);

  // Contains reference of dialog reference
  const dialogRef = useRef(null);

  // Contains true if application is fetching data else false
  const [isFetching, setIsFetching] = useState(false);

  /**
   * @description
   */
  useEffect(() => {
    if (!isFetching) {
      setIsFetching(true);
      props.loadProfileStructure().then((response) => {
        if (response) {
          // console.log(response);
        }
      });
    }
  }, [isFetching, props]);

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
    console.log(target.name, target.value);
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

  /**
   * @description This method is responsible for displaying dialog box when user clicks
   * on the Add Skill buttons.
   */
  const handleAddSkillRequest = () => {
    ReactDOM.createPortal(dialogRef, document.getElementById("root"));
    setShowDialog(true);
  };

  /**
   * @description This method is invoked when user clicks on the Close
   * button in Dialog box.
   */
  const handleDialogClose = () => {
    setShowDialog(false);
  };

  /**
   * @description This method is invoked when user clicks on the save button in
   * Dialog box
   */
  const handleDialogSave = () => {
    setShowDialog(false);
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
          {...props.profile}
          error={error}
          onAddSkillClicked={handleAddSkillRequest}
        />
      </div>
      <DialogBox
        ref={dialogRef}
        show={showDialog}
        onClose={handleDialogClose}
        onSave={handleDialogSave}
      >
        <div>This is test dialog box, i am testing component right now</div>
      </DialogBox>
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
    profile: state.profile,
  };
}

// Contains object of actions
const mapDispatchToProps = {
  updateProfile,
  registerUser,
  loadLanguages,
  loadProfileStructure,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
