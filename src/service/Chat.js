import {Auth} from "./Auth"
import { instance } from "../config/api.config";



export const Chats = {
  
  async getChats() {
   
    return await instance.get(`/getchats`)
     
  },
}