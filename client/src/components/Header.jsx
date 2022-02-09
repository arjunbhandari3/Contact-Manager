import PropTypes from "prop-types";
import { Fragment, React } from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import "../App.css";

const Header = (props) => {
  const { auth, title } = props;

  const navLinks = auth.isLoggedIn ? (
    <Fragment>
      <li>Hello {auth.user && auth.user.name}</li>
      <li>
        <Link to="/login">Logout</Link>
      </li>
    </Fragment>
  ) : (
    <Fragment>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar">
      <h1>
        <Link to="/"> {title} </Link>
      </h1>

      <ul>{navLinks}</ul>
    </div>
  );
};

Header.propTypes = { title: PropTypes.string.isRequired };

Header.defaultProps = { title: "Contact Manager" };

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(Header);
