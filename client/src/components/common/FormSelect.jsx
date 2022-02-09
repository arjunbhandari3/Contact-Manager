import React from "react";
import "../../App.css";

const FormInput = (props) => {
  const { label, input, meta, values } = props;
  const errorInput = meta.error && meta.touched ? "error" : "";

  const renderOptions = ({ value, label }) => {
    return (
      <option key={value} value={value}>
        {label}
      </option>
    );
  };

  const selectStyle = {
    border: errorInput ? "1px solid red" : "1px solid grey",
  };

  return (
    <div className="input-wrapper">
      <label htmlFor={input.name}>{label}</label>
      <select error={errorInput} {...input} style={selectStyle} required>
        <option value="">Select</option>
        {values ? values.map((value) => renderOptions(value)) : null}
      </select>
      {errorInput && <span>{meta.error}</span>}
    </div>
  );
};

export default FormInput;
