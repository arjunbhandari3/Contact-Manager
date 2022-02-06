import React from "react";

const Alert = ({ message }) => {
  const alert = {
    backgroundColor: "white",
    padding: "1rem",
    borderRadius: "0.5rem",
    border: "10px solid red",
  };

  return <div style={alert}>{message}</div>;
};

export default Alert;
