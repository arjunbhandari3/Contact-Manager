import { applyMiddleware, compose, createStore } from "redux";
import reduxThunk from "redux-thunk";
import { rootReducer } from "./reducers/rootReducer";

const middlewares = [reduxThunk];

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
