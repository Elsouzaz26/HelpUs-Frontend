import { instance } from "../config/api.config";


export const Groups = {
  async getGroups() { 
     return await instance
      .get(`/getgroup`)
      .then((res) => {
        return res
      }).catch(err => {
        console.log(err)
        return false
      })
  },
  async getGroupsByDateAndCity(city, date) { 
    return await instance
     .post(`/getgroupByDateAndCity`, {
       city,
       date 
     })
     .then((res) => {
       return res
     }).catch(err => {
       console.log(err)
       return false
     })
 },
  async saveGroups(data) { 
    return await instance
     .post(`/saveGroup`, {
         data: data
     })
     .then((res) => {
       return res
     }).catch(err => {
       console.log(err)
       return false
     })
 },
 async kmean(data) { 
    return await instance
     .post(`/kmean`, {data})
     .then((res) => {
       return res
     }).catch(err => {
       console.log(err)
       return false
     })
 },
 async getSeniorBygroupId(id) { 
  console.log("newid",id)
  return await instance
   .get(`/getseniorBygroup?id=${id}`)
   .then((res) => {
     return res
   }).catch(err => {
     console.log(err)
     return false
   })
},

async updateGroup(id, status) { 
  console.log("newid",id)
  console.log(status)
  return await instance
   .put(`/updategroup/${id}`, {status: status})
   .then((res) => {
     return res
   }).catch(err => {
     console.log(err)
     return false
   })
},

};