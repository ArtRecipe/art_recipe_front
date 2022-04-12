import { combineReducers } from "redux";
import userReducer from "./user/index.js";
import networkReducer from "./post/index.js";

const rootReducer = combineReducers({
  user: userReducer,
  network: networkReducer,
});

export default rootReducer;
