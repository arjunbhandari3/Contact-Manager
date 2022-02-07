import { v4 as uuidv4 } from "uuid";
import { REMOVE_ALERT, SET_ALERT } from "../constants/constants";

export const setAlert = (message) => async (dispatch) => {
  const id = uuidv4();
  dispatch({ type: SET_ALERT, payload: { message, id } });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 4000);
};
