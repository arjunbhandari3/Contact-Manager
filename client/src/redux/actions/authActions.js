import axios from "axios";
import { Navigate } from "react-router-dom";
import { setAuthToken } from "../../utils/setAuthToken";
import {
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOG_OUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
} from "../constants/constants";
import { setAlert } from "./alertAction";

const header = {
  headers: {
    "Content-Type": "application/json",
  },
};

// GET USER
const getUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const response = await axios.get("/api/user/userProfile");

    dispatch({ type: USER_LOADED, payload: response.data });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};

// LOGIN USER
const login = (formValues) => async (dispatch) => {
  const body = JSON.stringify(formValues);
  console.log(body, header);
  try {
    const response = await axios.post("/api/auth/login", body, header);
    console.log("response", response);
    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    dispatch(getUser());
    <Navigate to="/" />;
    console.log("navigate");
  } catch (err) {
    console.log(err, "err");
    dispatch({ type: LOGIN_FAIL });
    const error = err.response.data;
    if (error) dispatch(setAlert(error.message));
  }
};

// REGISTER USER
const register = (formValues) => async (dispatch) => {
  const body = JSON.stringify(formValues);

  try {
    const response = await axios.post("/api/auth/register", body, header);
    dispatch({ type: REGISTER_SUCCESS, payload: response.data });
    dispatch(getUser());
  } catch (err) {
    dispatch({ type: REGISTER_FAIL });
    const error = err.response.data;
    if (error) dispatch(setAlert(error.message));
  }
};

// LOGS OUT USER
const logout = () => async (dispatch) => {
  try {
    await axios.get("/api/auth/logout");
    dispatch({ type: LOG_OUT });
  } catch (err) {
    console.log(err);
  }
};

export { login, register, logout, getUser };
