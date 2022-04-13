import { combineReducers } from "redux";
import userReducer from "./user/index.js";
import postReducer from "./post/index.js";

const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer,
});

export default rootReducer;
