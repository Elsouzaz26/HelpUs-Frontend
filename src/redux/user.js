import { createSlice } from "@reduxjs/toolkit";
import { instance } from "../config/api.config";

export const initialState = {
  loading: false,
  hasError: false,
  user: {},
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser: (state, {payload}) => {
        console.log(payload)
       state.user = payload.user 
    },
   
  },
});

// Actions
export const {
  setUser,
} = userSlice.actions;

//Selector
export const userSelector = (state) => state.user;

// Reducer
export default userSlice.reducer;
