const baseUrl = process.env.REACT_APP_API_URL + "/Login";

export function validateUser(userid, password) {
  const url = baseUrl + `?userid=${userid}&password=${password}`;
  return fetch(url).then(handleResponse).catch(handleError);
}

async function handleResponse(response) {
  if (response.ok) return response.json();
  if (response.status === 400) {
    // So, a server-side validation error occurred.
    // Server side validation returns a string error message, so parse as text instead of json.
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("Network response was not ok.");
}

function handleError(error) {
  console.error("API call failed. " + error);
  throw error;
}
