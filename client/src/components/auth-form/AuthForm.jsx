import React, { Component } from "react";
import { Link } from "react-router-dom";
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
        <form onSubmit={onSubmit}>
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

export default AuthForm;
