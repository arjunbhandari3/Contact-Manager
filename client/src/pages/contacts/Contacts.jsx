import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../../App.css";
import Button from "../../components/common/Button";
import ContactItem from "../../components/ContactItem";
import { getContacts } from "../../redux/actions/contactAction";

const ContactsPage = (props) => {
  useEffect((props) => {
    props.getContacts();
  }, []);

  const favouriteContacts = props.contacts
    .filter(({ favourite }) => favourite)
    .sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  const restContacts = props.contacts.filter(({ favourite }) => !favourite);

  const renderContacts = () => {
    [...favouriteContacts, ...restContacts].map((contact) => (
      <Fragment key={contact.id}>
        <ContactItem {...contact} />
      </Fragment>
    ));
  };

  if (!props.contacts) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="home-wrapper">
        <div className="header-wrapper">
          <h2>Contacts List</h2>
          <Link to={`/contacts/create`}>
            <Button text={"Add Contact"} dark />
          </Link>
        </div>
        <div className="table-wrapper">
          <span className="heading">Name</span>
          <span className="heading">Phone</span>
          <span className="heading">Email</span>
          <span className="heading">Address</span>
          <span className="heading">Favourite</span>
          <span className="heading">Actions</span>
          {renderContacts()}
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { alert: state.alert[0], contacts: Object.values(state.contacts) };
};

export default connect(mapStateToProps, { getContacts })(ContactsPage);
