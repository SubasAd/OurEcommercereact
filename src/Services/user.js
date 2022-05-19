import http from "./httpService";
import apiUrl from "../config.json";


const apiEndpoint = apiUrl.apiUrl + "/api/users";

export const register = (user) => {
  return http.post(apiEndpoint, user);
};

