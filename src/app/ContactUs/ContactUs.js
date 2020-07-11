import React from "react";
import FormInput from "./../Shared/FormInput/FormInput";
import "./ContactUs.css";

function ContactUs() {
  const onTextChange = ({ target }) => {};
  return (
    <div className="contactUsContainer">
      <h2>Contact Us</h2>
      <form className="form-horizontal">
        <FormInput
          inputId="name"
          inputType="text"
          inputValue=""
          onTextChange={onTextChange}
          inputPlaceholder="Enter full name"
          inputLabel="Name :"
        ></FormInput>
        <FormInput
          inputId="email"
          inputType="email"
          inputValue=""
          onTextChange={onTextChange}
          inputPlaceholder="Enter your email address"
          inputLabel="Email :"
        ></FormInput>
        <FormInput
          inputId="message"
          inputType="text"
          inputValue=""
          onTextChange={onTextChange}
          inputPlaceholder="Enter your message"
          inputLabel="Message :"
        ></FormInput>
        <input type="submit" value="Save" className="btn btn-primary" />
      </form>
    </div>
  );
}

export default ContactUs;
