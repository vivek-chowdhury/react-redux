import { combineReducers } from "redux";
import loginReducer from "./Login/loginReducer";

const rootReducer = combineReducers({
  user: loginReducer,
});

export default rootReducer;
