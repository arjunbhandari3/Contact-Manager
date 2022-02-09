import React from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import "../App.css";
import { contactForm } from "../constants/FormFields";
import Button from "./common/Button";
import FormFile from "./common/FormFile";
import FormInput from "./common/FormInput";
import FormSelect from "./common/FormSelect";

const ContactForm = (props) => {
  const { title, alert, onSubmit, buttonText } = props;

  const renderInput = (props) => <FormInput {...props} />;
  const renderSelect = (props) => <FormSelect {...props} />;
  const renderFile = (props) => <FormFile {...props} />;

  const renderInputFields = contactForm.map((contact) => (
    <Field
      key={contact.label}
      name={contact.name}
      label={contact.label}
      type={contact.type}
      values={contact.values}
      component={
        contact.type === "select"
          ? renderSelect
          : contact.type === "file"
          ? renderFile
          : renderInput
      }
      placeholder={contact.placeholder}
      accept={contact.type === "file" ? "image/*" : ""}
    />
  ));

  return (
    <div className="body-container">
      <div className="backArrow">
        <Link to="/contacts">
          <HiOutlineArrowNarrowLeft />
          &nbsp; Go back
        </Link>
      </div>
      <h2>{title}</h2>
      <div className="form-container">
        {alert}
        <small style={{ color: "red" }}>*All fields are required</small>
        <form onSubmit={props.handleSubmit(onSubmit)}>
          <div className="form-grid">{renderInputFields}</div>
          <div className="createButton">
            <Button text={buttonText} dark />
          </div>
        </form>
      </div>
    </div>
  );
};

// FORM VALIDATION
const validate = ({ name, email, phone, address, favourite, type, image }) => {
  const errors = {};
  const emailCheck = (value) =>
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);

  if (!email) {
    errors.email = "Email is required.";
  } else if (emailCheck(email)) {
    errors.email = "Invalid Email.";
  }

  if (!name) errors.name = "Name is required.";
  if (!phone) errors.phone = "Phone is required.";
  if (!address) errors.address = "Address is required.";
  if (!favourite) errors.favourite = "Favourite is required.";
  if (!type) errors.type = "Type is required.";
  if (!image) errors.image = "Image is required.";

  return errors;
};

export default reduxForm({
  form: "contactForm",
  validate,
})(ContactForm);
