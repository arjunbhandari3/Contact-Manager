import React from "react";
import { connect } from "react-redux";
import { Navigate, Route } from "react-router-dom";

const PrivateRoutes = ({ component: Component, auth, ...otherProps }) => {
  return (
    <Route
      {...otherProps}
      render={(props) =>
        !auth.isLoggedIn ? <Navigate to="/login" /> : <Component {...props} />
      }
    />
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(PrivateRoutes);
