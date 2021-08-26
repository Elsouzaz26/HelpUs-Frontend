import {Auth} from "./Auth"
import { instance } from "../config/api.config";



export const Messages = {
  
  async getMessage(id) {
   
    return await instance.get(`/getmessages/${id}`)
     
  },
}