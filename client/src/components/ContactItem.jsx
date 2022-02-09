import React from "react";
import { FiDelete, FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";

const ContactItem = ({ name, phone, image, address, favourite }) => {
  return (
    <div className="contact-item">
      <div className="contact-image">
        <img src={image} alt={name} />
      </div>
      <div className="contact-info">
        <h3>{name}</h3>
        <p>{phone}</p>
        <p>{address}</p>
        <p>{favourite}</p>
      </div>
      <div className="contact-actions">
        <Link to={`/api/contacts/${name}`}>
          <FiEdit />
        </Link>
        <FiDelete />
      </div>
    </div>
  );
};

export default ContactItem;
