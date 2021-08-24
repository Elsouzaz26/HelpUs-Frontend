
import {Auth} from "./Auth"
import { instance } from "../config/api.config";

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

export const Volenteer = {
  
  async getVolenteer() {
   
    return await instance
      .get(`/roles?data=volenteer`).then(res=>{
        console.log("response",res)
        return res
      })
     
  },
  
};
