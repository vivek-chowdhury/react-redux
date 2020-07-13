import * as Actions from "./profileActionTypes";

// Initial language list
const profile = {
  languages: [],
  roles: [],
  userTypes: [],
  permissions: [],
};

/**
 * @description This function is responsible for manipulating profile state. It take previous
 * state and return new state depending on the action.
 *
 * @param {*} state
 * @param {*} action
 */
export default function profileReducer(state = profile, action) {
  switch (action.type) {
    case Actions.LANGUAGES_LOADED_SUCCESSFULLY:
      return {
        ...state,
        languages: action.response,
      };
    case Actions.LANGUAGES_LOADED_FAILED:
      return {
        ...state,
        languages: [],
      };
    case Actions.PROFILE_STRUCTURE_LOADED:
      return {
        ...state,
        ...action.response,
      };
    default:
      return state;
  }
}
