// import React, { Fragment, useEffect } from "react";
// import { connect } from "react-redux";
// import { Link } from "react-router-dom";
// import "../App.css";
// import Button from "../components/common/Button";
// import ContactItem from "../components/ContactItem";
// const { getContacts } = require("../redux/actions/contactAction");

// const HomePage = (props) => {
//   useEffect((props) => {
//     // props.getContacts();
//   }, []);

//   const renderContacts = () => {
//     console.log(props.contacts);
//     return props.contacts.map((contact) => {
//       return (
//         <Fragment key={contact.id}>
//           <ContactItem {...contact} />
//         </Fragment>
//       );
//     });
//   };

//   return (
//     <div className="home-wrapper">
//       <div className="header-wrapper">
//         <h2>Contacts List</h2>
//         <Link to={`/contacts/create`}>
//           <Button text={"Add Contact"} dark />
//         </Link>
//       </div>
//       <div className="body-wrapper">
//         <span className="heading">Name</span>
//         <span className="heading">Phone</span>
//         <span className="heading">Email</span>
//         <span className="heading">Address</span>
//         <span className="heading">Favourite</span>
//         <span className="heading">Actions</span>
//         {/* {renderContacts()} */}
//       </div>
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   return { alert: state.alert[0], contacts: state.contacts };
// };

// export default connect(mapStateToProps, { getContacts })(HomePage);

import React from "react";

const Home = () => {
  return (
    <div className="home-text primary-color">
      <h1>Welcome to Contacts Manager.</h1>
      <h2>Please Sign Up/Sign In to start adding your contacts.</h2>
    </div>
  );
};

export default Home;
