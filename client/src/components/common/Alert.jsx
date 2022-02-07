import React from "react";

const Alert = ({ message }) => {
  const alertStyle = {
    backgroundColor: "white",
    padding: "1rem",
    border: "1px solid grey",
    borderRadius: "0.5rem",
    borderLeft: "10px solid red",
  };

  return <div style={alertStyle}>{message}</div>;
};

export default Alert;
