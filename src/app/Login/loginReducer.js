import * as Actions from "./loginActionTypes";

const initialUser = {
  id: "",
  password: "",
  error: "",
  isLoggedIn: false,
};

export default function loginReducer(state = initialUser, action) {
  //   debugger;
  switch (action.type) {
    case Actions.USER_VALIDATED_SUCCESSFULLY:
      return {
        ...state,
        ...action.response,
        isLoggedIn: true,
      };
    case Actions.SIGN_OUT_LOGGEDIN_USER:
      return initialUser;
    default:
      return state;
  }
}
