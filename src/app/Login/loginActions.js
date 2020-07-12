import * as Actions from "./loginActionTypes";
import * as Services from "./../../api/LoginServices";

export function onSuccessfulValidation(response) {
  return { type: Actions.USER_VALIDATED_SUCCESSFULLY, response };
}

export function signOutUser() {
  return { type: Actions.SIGN_OUT_LOGGEDIN_USER };
}
export function validateUser(user) {
  return function (dispatch) {
    return Services.validateUser(user.userId, user.password)
      .then((response) => {
        dispatch(onSuccessfulValidation(response));
      })
      .catch((error) => {
        throw error;
      });
  };
}
