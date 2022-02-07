import React, { Component } from "react";
import { Link } from "react-router-dom";
import { reduxForm } from "redux-form";
import Button from "../common/Button";
import "././AuthForm.css";

class AuthForm extends Component {
  render() {
    const { title, alert, onSubmit, fields, button1, button2, linkto } =
      this.props;
    return (
      <div className="form-wrapper">
        <h2>{title}</h2>
        {alert}
        <form onSubmit={this.props.handleSubmit(onSubmit)}>
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
  }
}

// FORM VALIDATION
const validate = ({ name, email, password, passwordConfirm }) => {
  const errors = {};
  const emailCheck = (value) =>
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);

  if (!email) {
    errors.email = "Enter your email address";
  } else if (emailCheck(email)) {
    errors.email = "Enter a valid email";
  }
  if (!name) errors.name = "Enter your name";
  if (!password) errors.password = "Enter your password";
  if (!passwordConfirm) errors.passwordConfirm = "Re-enter your password";
  if (password !== passwordConfirm)
    errors.passwordConfirm = "Passwords must match";

  return errors;
};

export default reduxForm({
  form: "authForm",
  validate,
})(AuthForm);
