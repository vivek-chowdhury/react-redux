import React from "react";
import PropTypes from "prop-types";

function FormInput(props) {
  let wrapper = "form-group";
  if (props.error && props.error.length > 0) {
    wrapper += "has-error";
  }
  let labelClass = "control-label";
  if (props.labelClass) {
    labelClass += props.labelClass;
  }
  let inputClass = "";
  if (props.inputClass) {
    inputClass += props.inputClass;
  }
  return (
    <div className={wrapper}>
      <label className={labelClass} htmlFor={props.inputId}>
        {props.inputLabel}
      </label>
      <div className={inputClass}>
        <input
          type={props.inputType}
          className="form-control"
          id={props.inputId}
          placeholder={props.inputPlaceholder}
          name={props.inputId}
          value={props.inputValue}
          onChange={props.onTextChange}
          disabled={props.disabled}
        ></input>
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
}

FormInput.propType = {
  inputType: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  inputLabel: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string.isRequired,
  onTextChange: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  inputClass: PropTypes.string,
  labelClass: PropTypes.string,
};

FormInput.defaultProps = {
  error: "",
};
export default FormInput;
