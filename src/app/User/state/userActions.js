import * as LoginActions from "../Login/loginActionTypes";
import * as ProfileActions from "../Profile/profileActionTypes";
import * as LoginServices from "../../../api/LoginServices";
import * as ProfileServices from "../../../api/UserService";

/**
 * @description This function is responsible for dispatching 'USER_VALIDATED_SUCCESSFULLY'
 * action to reducer.
 * @param {*} response Contains response of server
 */
export function onSuccessfulValidation(response) {
  return { type: LoginActions.USER_VALIDATED_SUCCESSFULLY, response };
}

/**
 * @description This functon is responsible for dispatching successful profile
 * updation action to reducer.
 * @param {*} response
 */
export function onSuccessfulProfileUpdation(response) {
  return { type: ProfileActions.PROFILE_UPDATED_SUCCESSFULLY, response };
}

/**
 * @description This functon is responsible for dispatching failure profile
 * updation action to reducer.
 * @param {*} response
 */
export function onProfileUpdationFailed(error) {
  return { type: ProfileActions.PROFILE_UPDATION_FAILED, error };
}

/**
 * @description This functon is responsible for dispatching action when user
 * is registered successfully.
 *
 * @param {*} response
 */
export function onSuccessfulRegistration(response) {
  return { type: ProfileActions.USER_REGISTERED_SUCCESSFULLY, response };
}

/**
 * @description This functon is responsible for dispatching failure action when user failed to
 * register
 * @param {*} response
 */
export function onUserRegistrationFailed(error) {
  return { type: ProfileActions.USER_REGISTRATION_FAILED, error };
}

/**
 * @description This function is responsible for dispatching SIGN_OUT_LOGGEDIN_USER action to reducer.
 */
export function signOutUser() {
  return { type: LoginActions.SIGN_OUT_LOGGEDIN_USER };
}

/**
 * @description This function is responsible for dispatching REMEMBER_ME action to reducer.
 */
export function toggleRememberMe(isRemembered) {
  return { type: LoginActions.REMEMBER_ME, rememberMe: isRemembered };
}

/**
 * @description This function is invoked when Login component start validating user credentials.
 * This function make use of middleware (thunk) to hit Rest API which will validate user credential and
 * return response accordingly.
 *
 * @param {*} user Contains user credential
 */
export function validateUser(user) {
  return function (dispatch) {
    return LoginServices.validateUser(user.id, user.password)
      .then((response) => {
        dispatch(onSuccessfulValidation(response));
      })
      .catch((error) => {
        throw error;
      });
  };
}

/**
 * @description This function is invoked when has updated profile information and
 * clicks on the save button. It is responsible for sending updated information to
 * server.
 *
 * @param {*} user Contains user detail
 */
export function updateProfile(user) {
  return function (dispatch) {
    return ProfileServices.updateProfile(user)
      .then((response) => {
        if (!response.error) {
          dispatch(onSuccessfulProfileUpdation(user));
        } else {
          dispatch(onProfileUpdationFailed(response.error));
        }
      })
      .catch((error) => {
        throw error;
      });
  };
}

/**
 * @description This function is invoked when has updated profile information and
 * clicks on the save button. It is responsible for sending updated information to
 * server.
 *
 * @param {*} user Contains user detail
 */
export function registerUser(user) {
  return function (dispatch) {
    return ProfileServices.registerUser(user)
      .then((response) => {
        if (!response.error) {
          dispatch(onSuccessfulRegistration(user));
        } else {
          dispatch(onUserRegistrationFailed(response.error));
        }
        return response;
      })
      .catch((error) => {
        throw error;
      });
  };
}
