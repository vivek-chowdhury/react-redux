import React from "react";

function ComboBox(props) {
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

  const renderOptions = (o) => {
    return (
      <option key={o.id} value={o.id}>
        {o.name}
      </option>
    );
  };

  return (
    <div className={wrapper}>
      <label htmlFor={props.selectId} className={labelClass}>
        {props.label}
      </label>
      <div className={inputClass}>
        <select
          id={props.selectId}
          name={props.selectId}
          value={props.value}
          onChange={props.onSelectionChange}
          className="form-control"
        >
          {props.options.map(renderOptions)}
        </select>
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
}

export default ComboBox;
