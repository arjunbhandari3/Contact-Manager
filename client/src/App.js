import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import CreateContact from "./pages/contacts/CreateContact";
import Home from "./pages/Home";
import { getUser } from "./redux/actions/authAction";
import { store } from "./redux/store";
import { setAuthToken } from "./utils/setAuthToken";

const App = (props) => {
  const { auth } = props;
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  useEffect(() => {
    store.dispatch(getUser());
    return () => {};
  }, []);

  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <Routes>
          {/* <Route
            path="*"
            element={<Navigate to={auth.token ? "/contacts" : "/"} />}
          /> */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/contacts/create" element={<CreateContact />} />
          {/* <Route path="/contacts/update/:id" element={<UpdateContact />} />
          <Route path="/contacts" element={<Contacts />} /> */}
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(App);
