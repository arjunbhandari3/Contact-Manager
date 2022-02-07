import React, { Component } from "react";
import { connect } from "react-redux";
import { Field } from "redux-form";
import AuthForm from "../../components/auth-form/AuthForm";
import Alert from "../../components/common/Alert";
import FormInput from "../../components/form-input/FormInput";
import { registerForm } from "../../constants/FormFields";
import { register } from "../../redux/actions/authActions";

class RegisterPage extends Component {
  renderInput = (props) => <FormInput {...props} />;

  onSubmit = (formValues) => {
    this.props.register(formValues);
  };

  renderInputFields = registerForm.map((register) => (
    <Field
      key={register.name}
      name={register.name}
      type={register.type}
      label={register.label}
      component={this.renderInput}
      placeholder={register.placeholder}
      disabled={register.disabled}
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
        title="Welcome, Create an account"
        fields={this.renderInputFields}
        alert={this.alertMessage()}
        onSubmit={this.onSubmit}
        button1="Register"
        button2="Login"
        linkto="/login"
      />
    );
  }
}

const mapStateToProps = (state) => {
  return { alert: state.alert[0] };
};

export default connect(mapStateToProps, { register })(RegisterPage);
