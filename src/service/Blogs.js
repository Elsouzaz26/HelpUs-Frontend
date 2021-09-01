import { instance } from "../config/api.config";


export const Blogs = {
  async saveBlog(data) { 
     return await instance
      .post(`/addblog`, {
        data: data
      })
      .then((res) => {
        return res
      }).catch(err => {
        console.log(err)
        return false
      })
  },

  
  async getBlogs() { 
    return await instance
     .get(`/getblogs`)
     .then((res) => {
       return res
     }).catch(err => {
       console.log(err)
       return false
     })
    }
};
