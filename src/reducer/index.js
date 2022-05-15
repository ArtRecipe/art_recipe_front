import { combineReducers } from "redux";
import userReducer from "./User.js";
import postReducer from "./Post.js";

const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer,
});

export default rootReducer;
