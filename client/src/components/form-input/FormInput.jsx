import React from "react";
import "./FormInput.css";

const FormInput = (props) => {
  const { label, name, type, error, placeholder, disabled } = props;

  const inputStyle = {
    border: error ? "1px solid red" : "1px solid grey",
  };

  return (
    <div className="input-wrapper">
      <label htmlFor={name}>{label}</label>
      <input
        style={inputStyle}
        error={error}
        name={name}
        type={type}
        autoComplete="off"
        placeholder={placeholder}
        disabled={disabled}
        required
      />
      {error ? <span>{error}</span> : null}
    </div>
  );
};

export default FormInput;
