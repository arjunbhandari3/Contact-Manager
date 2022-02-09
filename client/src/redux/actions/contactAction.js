import axios from "axios";
import { response } from "express";
import {
  CONTACT_ERROR,
  CREATE_CONTACT,
  DELETE_CONTACT,
  GET_CONTACT,
  GET_CONTACTS,
  UPDATE_CONTACT,
} from "../constants/constants";
import { setAlert } from "./alertAction";

const header = {
  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  },
};

// GET CONTACTS
const getContacts = () => async (dispatch) => {
  try {
    console.log("called");
    const response = await axios.get("/api/contacts", header);
    console.log(response.data);
    dispatch({ type: GET_CONTACTS, payload: response.data });
  } catch (err) {
    console.log(err.response);
    dispatch({ type: CONTACT_ERROR });
    const error = err.response.data;
    if (error) dispatch(setAlert(error.message));
  }
};

// GET CONTACT
const getContact = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/contacts/${id}`, header);
    dispatch({ type: GET_CONTACT, payload: response.data });
    console.log(response.data);
  } catch (err) {
    dispatch({ type: CONTACT_ERROR });
    const error = err.response.data;
    if (error) dispatch(setAlert(error.message));
  }
};

// CREATE CONTACT
const createContact = (formValues) => async (dispatch) => {
  try {
    const response = await axios.post("/api/contacts", formValues, header);
    dispatch({ type: CREATE_CONTACT, payload: response.data });
    console.log(response.data);
    window.location.href = "/contacts";
  } catch (err) {
    dispatch({ type: CONTACT_ERROR });
    const error = err.response.data;
    if (error) dispatch(setAlert(error.message));
  }
};

// UPDATE CONTACT
const updateContact = (id, formValues) => async (dispatch) => {
  try {
    const response = await axios.patch(
      `/api/contacts/${id}`,
      formValues,
      header
    );
    dispatch({ type: UPDATE_CONTACT, payload: response.data });
    window.location.href = "/contacts";
  } catch (err) {
    dispatch({ type: CONTACT_ERROR });
    const error = err.response.data;
    if (error) dispatch(setAlert(error.message));
  }
};

// DELETE CONTACT
const deleteContact = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/contacts/${id}`, header);
    dispatch({ type: DELETE_CONTACT, payload: response.data });
    window.location.href = "/contacts";
  } catch (err) {
    dispatch({ type: CONTACT_ERROR });
    const error = err.response.data;
    if (error) dispatch(setAlert(error.message));
  }
};

export { getContacts, getContact, createContact, updateContact, deleteContact };
