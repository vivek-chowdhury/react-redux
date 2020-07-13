import { handleError, handleResponse } from "./serviceUtils";

const baseUrl = process.env.REACT_APP_API_URL;

/**
 * @description This function is responsible for fetching list of available
 * language list from server.
 *
 * @param {*} userid
 * @param {*} password
 */
export function loadLanguages(userid, password) {
  const url = baseUrl + "/languages/";
  return fetch(url).then(handleResponse).catch(handleError);
}

/**
 * @description This function is responsible for fetching list of available
 * language list from server.
 *
 * @param {*} userid
 * @param {*} password
 */
export function loadCompleteSchema(userid, password) {
  const url = baseUrl + "/schemaOptions/";
  return fetch(url).then(handleResponse).catch(handleError);
}
