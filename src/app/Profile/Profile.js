import React, { useState, useEffect } from "react";
import UserForm from "./UserForm";

function Profile(props) {
  const [user, setUser] = useState({
    userId: "",
    password: "",
    fname: "",
    lname: "",
    email: "",
    age: "",
    gender: "male",
    phoneNumber: "",
    totalExperience: "",
    description: "",
    iAgree: true,
  });

  const [fullName, setFullName] = useState("");
  const [genderOptions, setGenderOptions] = useState([]);

  useEffect(() => {
    setFullName(user.fname + " " + user.lname);
    if (!genderOptions || genderOptions.length < 1) {
      const options = [
        { id: "male", name: "Male" },
        { id: "female", name: "Female" },
        { id: "other", name: "Other" },
      ];
      setGenderOptions(options);
    }
  }, [user.lname, user.fname, fullName, genderOptions]);

  const handleTextChange = ({ target }) => {
    setUser({
      ...user,
      [target.name]: target.value,
    });
  };

  const handleFormSubmit = (event) => {
    // console.log("--------------------", event.target.value);
  };
  return (
    <React.Fragment>
      <h2>User Profile</h2>
      <div>
        <UserForm
          onTextChange={handleTextChange}
          onSubmit={handleFormSubmit}
          {...user}
          name={fullName}
          genderOptions={genderOptions}
        />
      </div>
    </React.Fragment>
  );
}

export default Profile;
