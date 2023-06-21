import { combineReducers } from "redux";
import commentReducers from "reducers/comments";
import authReucer from "reducers/auth";

export default combineReducers({
  comments: commentReducers,
  auth: authReucer,
});
