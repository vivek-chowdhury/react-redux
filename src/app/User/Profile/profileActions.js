import * as LanguageActions from "./profileActionTypes";
import * as LanguageService from "../../../api/ProfileService";

/**
 * @description This function is invoked when language list is loaded from server,
 * it is responsible for dispatching informaton to reducer.
 *
 * @param {*} response
 */
export function onProfileStructureloaded(response) {
  return { type: LanguageActions.PROFILE_STRUCTURE_LOADED, response };
}

/**
 * @description This function is invoked when application failed to load
 * language list from server.
 *
 * @param {*} error
 */
export function onProfileStructureloadedFailure(error) {
  return { type: LanguageActions.PROFILE_STRUCTURE_FAILED, error };
}

/**
 * @description This function is invoked when language list is loaded from server,
 * it is responsible for dispatching informaton to reducer.
 *
 * @param {*} response
 */
export function onLanguageloaded(response) {
  return { type: LanguageActions.LANGUAGES_LOADED_SUCCESSFULLY, response };
}

/**
 * @description This function is invoked when application failed to load
 * language list from server.
 *
 * @param {*} error
 */
export function onLanguageloadedFailure(error) {
  return { type: LanguageActions.LANGUAGES_LOADED_SUCCESSFULLY, error };
}

/**
 * @description This function is responsible for fetching list of available languages
 * from server.
 */
export function loadLanguages() {
  return function (dispatch) {
    return LanguageService.loadLanguages()
      .then((response) => {
        if (response) {
          dispatch(onLanguageloaded(response));
          return response;
        }
      })
      .catch((error) => {
        throw error;
      });
  };
}

/**
 * @description This function is responsible for fetching list of profile structure data which
 * we will use in Profile screen like available languages, roles, user types etc.
 */
export function loadProfileStructure() {
  return function (dispatch) {
    return LanguageService.loadCompleteSchema()
      .then((response) => {
        if (response) {
          dispatch(onProfileStructureloaded(response));
          return response;
        }
      })
      .catch((error) => {
        throw error;
      });
  };
}
