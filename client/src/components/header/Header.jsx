import PropTypes from "prop-types";
import { Fragment, React } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthState from "../../redux/reducers/authReducer";
import "./Header.css";

const Header = ({ title }) => {
  const navLinks =
    AuthState.isLoggedIn && AuthState.user ? (
      <Fragment>
        <li>Hello {AuthState.user && AuthState.user.name}</li>
        <li>
          <Link to="/login">
            <i className="fas fa-sign-out-alt" />{" "}
            <span className="hide-sm">Logout</span>
          </Link>
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

export default Header;
