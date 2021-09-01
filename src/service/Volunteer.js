
import {Auth} from "./Auth"
import { instance } from "../config/api.config";



export const Volunteer = {
  
  async getVolunteer() {
   
    return await instance.get(`/roles?data=volenteer`)
     
  },
  async getByVolunteerName(fullName) {
   
    return await instance
    .get(`/user?data=${fullName}`).then(res=>{
      console.log("response",res)
      return res
    })
    },
    async editVolunteer(id,data) {
   
      return await instance
        .put(`/updateuser/${id}`,data).then(res=>{
          console.log("response",res)
          return res
        })
       
    },
    async addVolunteer(data) {
   
      return await instance
        .post(`/signup`,data).then(res=>{
          console.log("response",res)
          return res
        })
       
    },
    async getVolunteerByCity(city) {
   
      return await instance
        .get(`/userByCity/?city=${city}&role=volenteer`).then(res=>{
          console.log("response",res)
          return res
        })
       
    },
};
