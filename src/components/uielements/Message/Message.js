import React, {useEffect, useState} from "react";
import MessagePageWrapper from "./Message.styled";
import Frame from "../../../assets/images/Frame.png"
import { useDispatch, useSelector } from "react-redux";
import rootReducer from "../../../redux";
import { configureStore } from "@reduxjs/toolkit";
import { userSelector } from "../../../redux/user";
import { Messages } from "../../../service/Message";
export default function Message({message}) {

  
  // const store = configureStore({ reducer: rootReducer });
  // const {users: {user}} =store.getState();
//  const user={id:1}

const {user}=useSelector(userSelector);
console.log("user",user._id)

console.log("message",message)

  return (
    <MessagePageWrapper>
      <div className="row">
        {
          user && message && (user._id===message.from._id || user._id===message.from) ? 

          // me in chat
          <div className="col-xl-6 col-lg-12 offset-xl-6 mb-3">
          <div className="clear-fix h-100">
            <span className="float-left mx-40 h-100 me-message">
              {message.message}               
            </span>
            <span className="float-right h-100 flex-reverse ">
              <img src={Frame} className="user-image"/>
            </span> 
          </div>   
        </div>
        :

        // other user in chat
      <div className="col-xl-6 col-lg-12 inset-6 mb-3">
          <div className="clear-fix h-100">
              <span className="float-right mx-40 h-100 user-message">
                {message.message}                             
              </span>
              <span className="float-left h-100 flex-reverse ">
                <img src={Frame} className="user-image"/>
              </span> 
            </div>   
        </div>
         }
       
        
      </div>  
       
    </MessagePageWrapper>
  );
}
