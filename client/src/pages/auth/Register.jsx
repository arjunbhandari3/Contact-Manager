import React, { Component } from "react";
import AuthForm from "../../components/auth-form/AuthForm";
import FormInput from "../../components/form-input/FormInput";
import { registerForm } from "../../constants/FormFields";

class RegisterPage extends Component {
  // form fields
  renderInputFields = registerForm.map((register) => (
    <FormInput
      key={register.name}
      name={register.name}
      type={register.type}
      label={register.label}
      placeholder={register.placeholder}
      disabled={register.disabled}
    />
  ));

  onSubmit = () => {};

  alertMessage = () => {};

  render() {
    return (
      <AuthForm
        title="Welcome, Create an account"
        fields={this.renderInputFields}
        alert={this.alertMessage()}
        onSubmit={this.onSubmit()}
        button1="Register"
        button2="Login"
        linkto="/login"
      />
    );
  }
}

export default RegisterPage;
