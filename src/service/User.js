import axios from "axios";
import {Auth} from "./Auth"
import { instance } from "../config/api.config";

export const User = {
  
  async getUser() {
   
    const response = await instance
      .get(`/get-user`)
      .then((res) => {
        try {
          console.log(res);
        } catch (error) {
          console.log(error);
        }
      });
  },
  
};
