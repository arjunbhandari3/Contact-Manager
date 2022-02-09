import React from "react";
import "../../App.css";

const FormInput = (props) => {
  const { label, input, type, meta } = props;
  const errorInput = meta.error && meta.touched ? "error" : "";

  const inputStyle = {
    border: errorInput ? "1px solid red" : "1px solid grey",
  };

  delete input.value;

  return (
    <div className="input-wrapper">
      <label htmlFor={input.name}>{label}</label>
      <input {...input} style={inputStyle} error={errorInput} type={type} />
      {errorInput && <span>{meta.error}</span>}
    </div>
  );
};

export default FormInput;
