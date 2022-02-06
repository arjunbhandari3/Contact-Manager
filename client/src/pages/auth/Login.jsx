import React, { Component } from "react";
import AuthForm from "../../components/auth-form/AuthForm";
import FormInput from "../../components/form-input/FormInput";
import { loginForm } from "../../constants/FormFields";

class LoginPage extends Component {
  // FORM FIELDS
  renderInputFields = loginForm.map((login) => (
    <FormInput
      key={login.name}
      name={login.name}
      type={login.type}
      label={login.label}
      placeholder={login.placeholder}
      disabled={login.disabled}
    />
  ));

  onSubmit = () => {};

  alertMessage = () => {};

  render() {
    return (
      <AuthForm
        title="Hello, Welcome Back!"
        fields={this.renderInputFields}
        alert={this.alertMessage()}
        onSubmit={this.onSubmit()}
        button1="Login"
        button2="Sign Up"
        linkto="/register"
      />
    );
  }
}

export default LoginPage;
