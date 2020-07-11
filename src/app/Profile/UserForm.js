import React from "react";
import FormInput from "./../Shared/FormInput/FormInput";
import DisplayPicture from "./../Shared/DisplayPicture/DisplayPicture";
import ComboBox from "./../Shared/ComboBox/ComboBox";
import "./UserForm.css";

function UserForm(props) {
  return (
    <form className="form-horizontal" onSubmit={props.onSubmit}>
      <div className="generalSectionContainer">
        <div className="generalSection">
          <FormInput
            inputId="userId"
            inputType="text"
            inputValue={props.userId}
            onTextChange={props.onTextChange}
            inputPlaceholder="Enter user id"
            inputLabel="User id :"
          ></FormInput>
          <FormInput
            inputId="password"
            inputType="password"
            inputValue={props.password}
            onTextChange={props.onTextChange}
            inputPlaceholder="Enter password"
            inputLabel="Password :"
          ></FormInput>
          <FormInput
            inputId="fname"
            inputType="text"
            inputValue={props.fname}
            onTextChange={props.onTextChange}
            inputPlaceholder="Enter first name"
            inputLabel="First Name :"
          ></FormInput>
          <FormInput
            inputId="lname"
            inputType="text"
            inputValue={props.lname}
            onTextChange={props.onTextChange}
            inputPlaceholder="Enter last name"
            inputLabel="Last Name :"
          ></FormInput>
          <FormInput
            inputId="email"
            inputType="email"
            inputValue={props.email}
            onTextChange={props.onTextChange}
            inputPlaceholder="Enter email"
            inputLabel="Email :"
          ></FormInput>
        </div>
        <DisplayPicture
          displayPicture={props.displayPicture}
          gender={props.gender}
          name={props.name}
        />
      </div>
      <span className="secondaryInfo">
        <ComboBox
          selectId="gender"
          label="Gender"
          options={props.genderOptions}
          inputClass="col-sm-8 inline-Column"
          onSelectionChange={props.onTextChange}
          value={props.gender}
        />
        <FormInput
          inputId="age"
          inputType="text"
          inputValue={props.age}
          onTextChange={props.onTextChange}
          inputPlaceholder="Age"
          inputLabel="Age :"
          inputClass="col-sm-8 inline-Column"
        ></FormInput>
        <FormInput
          inputId="phonenumber"
          inputType="text"
          inputValue={props.phonenumber}
          onTextChange={props.onTextChange}
          inputPlaceholder="Phone Number"
          inputLabel="Phone Number :"
          inputClass="col-sm-10 inline-Column"
        ></FormInput>
        <FormInput
          inputId="totalExperience"
          inputType="text"
          inputValue={props.totalExperience}
          onTextChange={props.onTextChange}
          inputPlaceholder="Exp."
          inputLabel="Total Experience :"
          inputClass="col-sm-8 inline-Column"
        ></FormInput>
      </span>
      <FormInput
        inputId="description"
        inputType="text"
        inputValue={props.description}
        onTextChange={props.onTextChange}
        inputPlaceholder="Enter short description"
        inputLabel="Short Description :"
      ></FormInput>

      <div className="form-group">
        <div className="col-sm-offset-2 col-sm-10">
          <div className="checkbox">
            <label>
              <input type="checkbox" name="iAgree"></input>
              <span> I agress all terms and conditions</span>
            </label>
          </div>
        </div>
        <input type="submit" value="Save" className="btn btn-primary" />
      </div>
    </form>
  );
}

export default UserForm;
