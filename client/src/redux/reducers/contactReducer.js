import {
  CREATE_CONTACT,
  DELETE_CONTACT,
  GET_CONTACT,
  GET_CONTACTS,
  UPDATE_CONTACT,
} from "../constants/constants";

const initialState = {
  contacts: [],
  contact: null,
};

const contactReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CONTACTS:
      console.log("GET_CONTACTS", payload);
      return {
        ...state,
        contacts: payload,
      };
    case GET_CONTACT:
      return {
        ...state,
        contact: payload,
      };
    case CREATE_CONTACT:
      return {
        ...state,
        contacts: [payload, ...state.contacts],
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact._id === payload._id ? payload : contact
        ),
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact._id !== payload),
      };
    default:
      return state;
  }
};
export default contactReducer;
