import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import alertReducer from "./alertReducer";
import authReducer from "./authReducer";
import contactReducer from "./contactReducer";

export const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  alert: alertReducer,
  contact: contactReducer,
});
