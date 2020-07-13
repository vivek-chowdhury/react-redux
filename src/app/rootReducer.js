import { combineReducers } from "redux";
import loginReducer from "./User/state/userReducer";

const rootReducer = combineReducers({
  user: loginReducer,
});

export default rootReducer;
