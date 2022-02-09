import React from "react";
import { connect } from "react-redux";
import { Field } from "redux-form";
import AuthForm from "../../components/AuthForm";
import Alert from "../../components/common/Alert";
import FormInput from "../../components/common/FormInput";
import { registerForm } from "../../constants/FormFields";
import { register } from "../../redux/actions/authAction";

const RegisterPage = (props) => {
  const renderInput = (props) => <FormInput {...props} />;

  const onSubmit = (formValues) => {
    props.register(formValues);
  };

  const alertMessage = () => {
    if (props.alert) {
      return <Alert message={props.alert.message} />;
    }
  };

  const renderInputFields = registerForm.map((register) => (
    <Field
      key={register.name}
      name={register.name}
      type={register.type}
      label={register.label}
      component={renderInput}
      placeholder={register.placeholder}
      disabled={register.disabled}
    />
  ));

  return (
    <AuthForm
      title="Welcome, Create an account"
      fields={renderInputFields}
      alert={alertMessage()}
      onSubmit={onSubmit}
      button1="Register"
      button2="Login"
      linkto="/login"
    />
  );
};

const mapStateToProps = (state) => {
  return { alert: state.alert[0] };
};

export default connect(mapStateToProps, { register })(RegisterPage);
