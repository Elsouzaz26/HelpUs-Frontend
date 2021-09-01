
import {Auth} from "./Auth"
import { instance } from "../config/api.config";


export const Senior = {
  
  async getSenior() {
   
    return await instance
      .get(`/roles?data=senior`).then(res=>{
        console.log("response",res)
        return res
      })
     
  },
  async getBySeniorName(fullName) {
   
    return await instance
    .get(`/user?data=${fullName}`).then(res=>{
      console.log("response",res)
      return res
    })
    },
  
      async editSenior(id,data) {
   
        return await instance
          .put(`/updateuser/${id}`,data).then(res=>{
            console.log("response",res)
            return res
          })
         
      },
      async addSenior(data) {
   
        return await instance
          .post(`/signup`,data).then(res=>{
            console.log("response",res)
            return res
          })
         
      },

      async getSeniorByCity(city) {
   
        return await instance
          .get(`/userByCity/?city=${city}&role=senior`).then(res=>{
            console.log("response",res)
            return res
          })
         
      },

      
  
};
