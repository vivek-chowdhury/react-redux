import * as Actions from "../Login/loginActionTypes";
import * as ProfileActions from "./../Profile/profileActionTypes";

// Contains initial state
const initialUser = {
  id: "vivek.chowdhury",
  password: "vchowdhury",
  error: "",
  isLoggedIn: false,
  rememberMe: true,
  iAgree: false,
};

/**
 *@description This function is responsible for returning new state as per the 
 action. It takes previous state and action which need to perform on the state.
  
 * @param {*} state
 * @param {*} action
 */
export default function loginReducer(state = initialUser, action) {
  switch (action.type) {
    case Actions.USER_VALIDATED_SUCCESSFULLY:
      return {
        ...state,
        ...action.response,
        isLoggedIn: true,
      };
    case ProfileActions.PROFILE_UPDATED_SUCCESSFULLY:
      return {
        ...state,
        ...action.response,
      };
    case Actions.SIGN_OUT_LOGGEDIN_USER:
      return state.rememberMe ? { ...state, isLoggedIn: false } : initialUser;
    case Actions.REMEMBER_ME:
      return {
        ...state,
        rememberMe: action.rememberMe,
      };
    default:
      return state;
  }
}
