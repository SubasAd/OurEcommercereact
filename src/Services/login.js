import http from "./httpService";

import apiUrl from "../config";

const apiEndpoint = apiUrl.apiUrl + "/api/authenticate";

export const login = (user) => {
  
  return http.post(apiEndpoint, user);

};
