import React from "react";
import { Link } from "react-router-dom";
import { reduxForm } from "redux-form";
import "../App.css";
import Button from "./common/Button";

const AuthForm = (props) => {
  const { title, alert, onSubmit, fields, button1, button2, linkto } = props;

  return (
    <div className="form-wrapper">
      <h2>{title}</h2>
      {alert}
      <form onSubmit={props.handleSubmit(onSubmit)}>
        {fields}
        <div className="button-wrapper">
          <Button text={button1} dark />
          <div className="line">
            <span>OR</span>
          </div>
          <Link to={linkto}>
            <Button text={button2} />
          </Link>
        </div>
      </form>
    </div>
  );
};

// FORM VALIDATION
const validate = ({ name, email, password, passwordConfirm }) => {
  const errors = {};
  const emailCheck = (value) =>
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);

  if (!email) {
    errors.email = "Email is required.";
  } else if (emailCheck(email)) {
    errors.email = "Invalid Email.";
  }

  if (!name) errors.name = "Name is required.";

  if (!password) errors.password = "Password is required.";
  if (password && password.length < 6) {
    errors.password = "Password must contain at least 6 characters.";
  }

  if (!passwordConfirm)
    errors.passwordConfirm = "Password Confirm is required.";
  if (password !== passwordConfirm)
    errors.passwordConfirm = "Passwords must match.";

  return errors;
};

export default reduxForm({
  form: "authForm",
  validate,
})(AuthForm);
