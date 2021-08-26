
import {Auth} from "./Auth"
import { instance } from "../config/api.config";



export const Volenteer = {
  
  async getVolenteer() {
   
    return await instance.get(`/roles?data=volenteer`)
     
  },
  async getByVolenteerName(fullName) {
   
    return await instance
    .get(`/user?data=${fullName}`).then(res=>{
      console.log("response",res)
      return res
    })
    },
    async editVolenteer(id,data) {
   
      return await instance
        .put(`/updateuser/${id}`,data).then(res=>{
          console.log("response",res)
          return res
        })
       
    },
    async addVolenteer(data) {
   
      return await instance
        .post(`/signup`,data).then(res=>{
          console.log("response",res)
          return res
        })
       
    },
};
