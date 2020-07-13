import React from "react";
import FormInput from "../../Shared/FormInput/FormInput";
import DisplayPicture from "../../Shared/DisplayPicture/DisplayPicture";
import ComboBox from "../../Shared/ComboBox/ComboBox";
import "./UserForm.css";

function UserForm(props) {
  return (
    <form className="form-horizontal" onSubmit={props.onSubmit}>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
      <div className="generalSectionContainer">
        <div className="generalSection">
          <FormInput
            inputId="id"
            inputType="text"
            inputValue={props.id}
            onTextChange={props.onTextChange}
            inputPlaceholder="Enter user id"
            inputLabel="User id :"
            disabled={props.isLoggedIn}
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
            inputId="emailId"
            inputType="email"
            inputValue={props.emailId}
            onTextChange={props.onTextChange}
            inputPlaceholder="Enter email"
            inputLabel="Email :"
          ></FormInput>
        </div>
        <DisplayPicture
          displayPicture={props.displayPicture}
          gender={props.gender}
          fname={props.fname}
          lname={props.lname}
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
      <span className="secondaryInfo">
        <ComboBox
          selectId="role"
          label="Roles"
          options={props.roles}
          inputClass="col-sm-8 inline-Column"
          onSelectionChange={props.onTextChange}
          optionName="roleName"
          value={props.role}
        />
        <ComboBox
          selectId="userType"
          label="User Type"
          options={props.userTypes}
          inputClass="col-sm-8 inline-Column"
          onSelectionChange={props.onTextChange}
          optionName="typeName"
          value={props.role}
        />
      </span>
      <FormInput
        inputId="description"
        inputType="text"
        inputValue={props.description}
        onTextChange={props.onTextChange}
        inputPlaceholder="Enter short description"
        inputLabel="Short Description :"
      ></FormInput>
      <label htmlFor="skillAdd" className="pr-3">
        Add Skills
      </label>
      <input
        id="skillAdd"
        type="button"
        className="btn btn-primary"
        onClick={props.onAddSkillClicked}
        value="+"
      ></input>

      <div className="form-group">
        <div className="col-sm-offset-2 col-sm-10">
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                name="iAgree"
                id="iAgree"
                checked={props.iAgree}
                onChange={props.onTextChange}
              ></input>
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
