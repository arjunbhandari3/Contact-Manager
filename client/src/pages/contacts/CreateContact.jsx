import React from "react";
import { connect } from "react-redux";
import Alert from "../../components/common/Alert";
import ContactForm from "../../components/ContactForm";
import { createContact } from "../../redux/actions/contactAction";

const CreateContact = (props) => {
  const onSubmit = (formValues) => {
    props.createContact(formValues);
  };

  const alertMessage = () => {
    if (props.alert) {
      return <Alert message={props.alert.message} />;
    }
  };

  return (
    <ContactForm
      title="Create Contact"
      alert={alertMessage()}
      onSubmit={onSubmit}
      buttonText="Create"
    />
  );
};

const mapStateToProps = (state) => {
  return { alert: state.alert[0] };
};

export default connect(mapStateToProps, { createContact })(CreateContact);
