import { combineReducers } from "redux";
import loginReducer from "./User/state/userReducer";
import profileReducer from "./User/Profile/profileReducer";

const rootReducer = combineReducers({
  user: loginReducer,
  profile: profileReducer,
});

export default rootReducer;
