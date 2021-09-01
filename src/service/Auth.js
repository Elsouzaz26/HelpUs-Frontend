import { instance, setAuthorizationToken } from "../config/api.config";
import { setUser } from "../redux/user";
import { useDispatch, useSelector } from "react-redux";



export const Auth = {
  async authenticated() { 
    const dispatch = useDispatch()
     await instance
      .get(`/auth`)
      .then((res) => {
        if(res.data.status == 200) {
          dispatch(setUser({ user: res.data.user }))
          return true        
        }
        return false
      }).catch(err => {
        console.log(err)
        return false
      })

    
    return !!localStorage.getItem("token");
  },

  async login(data) {
    return await instance
      .post(`/signin`, data)
      .then((res) => {
        const { token , user} = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user))
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
