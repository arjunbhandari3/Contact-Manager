import React from "react";

const Button = ({ text, dark }) => {
  const buttonStyle = {
    cursor: "pointer",
    backgroundColor: dark ? "#1D9AAC" : "transparent",
    color: dark ? "white" : "#1D9AAC",
    border: "1px solid #1D9AAC",
    borderRadius: "5px",
    width: "100%",
    padding: "0.8rem",
    margin: "1rem 0",
    textTransform: "uppercase",
  };

  return (
    <button type="submit" style={buttonStyle}>
      {text}
    </button>
  );
};

export default Button;
