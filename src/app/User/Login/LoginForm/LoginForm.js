import React from "react";
import FormInput from "../../../Shared/FormInput/FormInput";
import { Link } from "react-router-dom";

function LoginForm(props) {
  return (
    <form className="form-horizontal" onSubmit={props.onSubmit}>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
      <FormInput
        inputId="id"
        inputType="text"
        inputValue={props.id}
        onTextChange={props.onChange}
        inputPlaceholder="Enter user id"
        inputLabel="User id :"
      ></FormInput>
      <FormInput
        inputId="password"
        inputType="password"
        inputValue={props.password}
        onTextChange={props.onChange}
        inputPlaceholder="Enter password"
        inputLabel="Password :"
      ></FormInput>
      <div>
        <div className="col-sm-offset-2 col-sm-10">
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                name="rememberMe"
                checked={props.rememberMe}
                onChange={props.onChange}
              ></input>
              <span> Remember me</span>
            </label>
          </div>
        </div>
        <input type="submit" value="Save" className="btn btn-primary" />
        {/* <input type="button" value="Forgot Password" className="btn btn-link" /> */}
        <Link to="/profile" className="btn btn-link">
          Register
        </Link>
      </div>
    </form>
  );
}

export default LoginForm;
