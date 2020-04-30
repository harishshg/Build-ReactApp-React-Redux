import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/authors/";

export function getAuthors() {
  return fetch(baseUrl) // to make api calls , its a promise based api.
    .then(handleResponse)
    .catch(handleError); // and if any errors occurs catch error is called.
}
