import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import { getUser } from "./redux/actions/authActions";
import { store } from "./redux/store";
import { setAuthToken } from "./utils/setAuthToken";

const App = () => {
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
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default connect(null)(App);
