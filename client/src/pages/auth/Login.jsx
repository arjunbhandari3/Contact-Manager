import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Field } from "redux-form";
import AuthForm from "../../components/AuthForm";
import Alert from "../../components/common/Alert";
import FormInput from "../../components/common/FormInput";
import { loginForm } from "../../constants/FormFields";
import { login } from "../../redux/actions/authAction";

const LoginPage = (props) => {
  const navigate = useNavigate();
  const renderInput = (props) => <FormInput {...props} />;

  const onSubmit = (formValues) => {
    props.login(formValues, () => {
      navigate("/");
    });
  };

  const alertMessage = () => {
    if (props.alert) {
      return <Alert message={props.alert.message} />;
    }
  };

  const renderInputFields = loginForm.map((login) => (
    <Field
      key={login.name}
      name={login.name}
      label={login.label}
      type={login.type}
      component={renderInput}
      placeholder={login.placeholder}
      disabled={login.disabled}
    />
  ));

  return (
    <AuthForm
      title="Hello, Welcome Back!"
      fields={renderInputFields}
      alert={alertMessage()}
      onSubmit={onSubmit}
      button1="Login"
      button2="Sign Up"
      linkto="/register"
    />
  );
};

const mapStateToProps = (state) => {
  return { alert: state.alert[0] };
};

export default connect(mapStateToProps, { login })(LoginPage);
