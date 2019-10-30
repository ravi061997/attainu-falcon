import { createStore } from "redux";
import mailReducer from "./reducers/mailReducer";

const store = createStore(
  mailReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
