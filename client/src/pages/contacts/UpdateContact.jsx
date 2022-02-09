import React from "react";
import { connect } from "react-redux";
import Alert from "../../components/common/Alert";
import ContactForm from "../../components/ContactForm";
import { updateContact } from "../../redux/actions/contactAction";

const UpdateContact = (props) => {
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
      title="Update Contact"
      alert={alertMessage()}
      onSubmit={onSubmit}
      buttonText="Update"
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  let initialValues = state.contacts[ownProps.match.params.id];

  return {
    alert: state.alert[0],
    tour: state.contacts[ownProps.match.params.id],
    initialValues: initialValues,
  };
};

export default connect(mapStateToProps, { updateContact })(UpdateContact);
