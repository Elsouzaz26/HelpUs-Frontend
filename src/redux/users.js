import { createSlice } from "@reduxjs/toolkit";
import { instance } from "../config/api.config";

export const initialState = {
  loading: false,
  hasError: false,
  user: {
    id:1
  },
  isAdmin: false,
};

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {

    setUser: (state, payload) => {
      console.log(payload)
       state.user = payload.user 
    },
   
  },
});

// Actions
export const {
  
  setUser,
} = usersSlice.actions;

//Selector
export const userSelector = (state) => state.user;

// Reducer
export default usersSlice.reducer;
