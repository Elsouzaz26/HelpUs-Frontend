import { instance, setAuthorizationToken } from "../config/api.config";
import { setUser } from "../redux/user";
import { useDispatch, useSelector } from "react-redux";

export const Auth = {
  async authenticated() { 
    const dispatch = useDispatch()
    return await instance
      .get(`/auth`)
      .then((res) => {
        console.log(res)
        dispatch(setUser({ user: res.data.user }))
      }).catch(err => {
        console.log(err)
        return err
      })
    // return !!localStorage.getItem("token");
  },

  async login(data) {
    return await instance
      .post(`/signin`, data)
      .then((res) => {
        const { token } = res.data;
        localStorage.setItem("token", token);
        setAuthorizationToken(token);
        return res.data
      
      }).catch(err => {
        console.log(err)
        return err
      })
  },
  logout() {
    try {
      localStorage.removeItem("token");
      instance.interceptors.request.use((config) => {
        delete config.headers["Authorization"];
        return config;
      });
      window.location = "/";
    } catch (error) {}
  },
};
