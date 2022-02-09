import React from "react";
import "../../App.css";

const FormInput = (props) => {
  const { label, input, type, meta, placeholder, disabled } = props;
  const errorInput = meta.error && meta.touched ? "error" : "";

  const inputStyle = {
    border: errorInput ? "1px solid red" : "1px solid grey",
  };

  return (
    <div className="input-wrapper">
      <label htmlFor={input.name}>{label}</label>
      <input
        {...input}
        style={inputStyle}
        error={errorInput}
        type={type}
        autoComplete="off"
        placeholder={placeholder}
        disabled={disabled}
        required
      />
      {errorInput && <span>{meta.error}</span>}
    </div>
  );
};

export default FormInput;
