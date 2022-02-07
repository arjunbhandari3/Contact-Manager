import React, { Component } from "react";
import { connect } from "react-redux";
import { Field } from "redux-form";
import AuthForm from "../../components/auth-form/AuthForm";
import Alert from "../../components/common/Alert";
import FormInput from "../../components/form-input/FormInput";
import { loginForm } from "../../constants/FormFields";
import { login } from "../../redux/actions/authActions";

class LoginPage extends Component {
  renderInput = (props) => <FormInput {...props} />;

  onSubmit = (formValues) => {
    this.props.login(formValues);
  };

  renderInputFields = loginForm.map((login) => (
    <Field
      key={login.name}
      name={login.name}
      label={login.label}
      type={login.type}
      component={this.renderInput}
      placeholder={login.placeholder}
      disabled={login.disabled}
    />
  ));

  alertMessage = () => {
    if (this.props.alert) {
      return <Alert message={this.props.alert.message} />;
    }
  };

  render() {
    return (
      <AuthForm
        title="Hello, Welcome Back!"
        fields={this.renderInputFields}
        alert={this.alertMessage()}
        onSubmit={this.onSubmit}
        button1="Login"
        button2="Sign Up"
        linkto="/register"
      />
    );
  }
}

const mapStateToProps = (state) => {
  return { alert: state.alert[0] };
};

export default connect(mapStateToProps, { login })(LoginPage);
