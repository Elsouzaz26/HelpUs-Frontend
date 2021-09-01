import { createSlice } from "@reduxjs/toolkit";
import { instance } from "../config/api.config";

export const initialState = {
  loading: false,
  hasError: false,
  chat: {},
};

const chatSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    setChat: (state, {payload}) => {
        console.log(payload)
       state.chat = payload.chat 
    },
   
  },
});

// Actions
export const {
  setChat,
} = chatSlice.actions;

//Selector
export const chatSelector = (state) => state.chat;

// Reducer
export default chatSlice.reducer;
