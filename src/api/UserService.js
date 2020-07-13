import { handleError, handleResponse } from "./serviceUtils";

const baseUrl = process.env.REACT_APP_API_URL + "/users/";

export function updateProfile(source) {
  const user = clearRequestBody(source);
  const userId = user.id || "";
  const url = baseUrl + `${userId}`;

  return fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function registerUser(source) {
  const user = clearRequestBody(source);
  return fetch(baseUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then(handleResponse)
    .catch(handleError);
}

function clearRequestBody(source) {
  const user = { ...source };
  delete user.isLoggedIn;
  delete user.iAgree;
  delete user.rememberMe;
  delete user.error;
  return user;
}
