import axios from "axios";
import siteConfig from "./site.config";

const token = localStorage.getItem("token");


export const instance = axios.create({
  baseURL: siteConfig.apiUrl,
  headers: {
    Authorization: `Bearer ${null}`,
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
