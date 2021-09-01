import axios from "axios";
import siteConfig from "./site.config";
import { Auth } from "../service/Auth";
const token = localStorage.getItem("token");


export const instance = axios.create({
  baseURL: siteConfig.apiUrl,
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});

export function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}


instance.interceptors.response.use(
  (response) => {

    console.log(response)
    return response;
  },
  (error) => {

    console.log(error)
    if (error.response.status === 401) {
      // Auth.logout();
    }

    return Promise.reject(error.response);
  }
);


