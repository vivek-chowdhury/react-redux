import * as Actions from "./loginActionTypes";

const initialUser = {
  id: "",
  password: "",
  error: "",
};

export default function loginReducer(state = initialUser, action) {
  //   debugger;
  switch (action.type) {
    case Actions.USER_VALIDATED_SUCCESSFULLY:
      return {
        ...state,
        ...action.response,
      };
    default:
      return state;
  }
}
