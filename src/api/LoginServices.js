import { handleError, handleResponse } from "./serviceUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/Login";

export function validateUser(userid, password) {
  const url = baseUrl + `?userid=${userid}&password=${password}`;
  return fetch(url).then(handleResponse).catch(handleError);
}
