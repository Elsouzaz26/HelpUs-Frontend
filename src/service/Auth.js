import { instance, setAuthorizationToken } from "../config/api.config";
import jwt_decode from "jwt-decode";
 

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.status === 401) {
      Auth.logout();
    }
  }
);

export const Auth = {
  authenticated() {
    var token = localStorage.getItem("token");
    var decoded = jwt_decode(token)
    console.log("decoded",decoded)
    if((decoded.user.emailAddress)!==localStorage.getItem("email")){
      window.location.replace("/signin")
    }
    return !!localStorage.getItem("token");
  },

  async login(data) {
    return await instance
      .post(`/signin`, data)
      .then((res) => {
        try {
          console.log("auth login");
          console.log(res)
          const { token, user } = res.data;
          localStorage.setItem("token", token);
          localStorage.setItem("email",user.emailAddress)
          setAuthorizationToken(token);
          return res.data
        } catch (error) {
          console.log(error);
        }
      });
  },
  logout() {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("email")
      instance.interceptors.request.use((config) => {
        delete config.headers["Authorization"];
        return config;
      });
      window.location = "/";
    } catch (error) {}
  },
};
