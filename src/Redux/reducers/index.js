import { combineReducers } from "redux";
import campaign from "./campaign";
import errors from "./errors";
export default combineReducers({
  campaign,
  errors
});
