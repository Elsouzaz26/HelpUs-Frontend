import { instance } from "../config/api.config";


export const Distributions = {
  async getDistributions() { 
     return await instance
      .get(`/getDistributions`)
      .then((res) => {
        return res
      }).catch(err => {
        console.log(err)
        return false
      })
  },
  async saveDistributions(data) { 
    return await instance
     .post(`/saveDistributions`, {
       data: data
     })
     .then((res) => {
       return res
     }).catch(err => {
       console.log(err)
       return false
     })
 },
 async renewDistributions(data) { 
  return await instance
   .post(`/renewDistributions`, {
     data: data
   })
   .then((res) => {
     return res
   }).catch(err => {
     console.log(err)
     return false
   })
}
};
