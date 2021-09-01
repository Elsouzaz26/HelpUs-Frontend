import React from "react";
import ChatPageWrapper from "./Chat.styled"
import Male from "../../../assets/images/male-avatar.png"
import Female from "../../../assets/images/female-avatar.png"

import {  useSelector } from "react-redux";
import { userSelector } from "../../../redux/user";
import moment from "moment";



export default function Chat({handleChatClick, index, chat, activeChatID}) {
  const {user}=useSelector(userSelector);

  console.log(chat)
  return (
    <ChatPageWrapper>
      <div className={chat._id === activeChatID ? "chat active pad-15" : "chat pad-15"}  onClick={() =>handleChatClick(index)}>
      <div>
        <span>
          <img className="user-image" src={ (user._id!== chat.user1._id) ? (chat.user1.gender === "male" ?Male : Female  ) :  (chat.user2.gender === "male" ? Male : Female  ) }/>
        </span>
        <span className="ml-2 flex mx-50">
          <span className="clear-fix">
            <span className="float-left">
            <h6 >{ user._id!==chat.user1._id ? chat.user1.fullName: chat.user2.fullName}</h6>
            </span>
            <span className="float-right text-right">
              {moment(chat.createdAt).fromNow()}
            </span>
          </span>
          <span class="chat-message">
            {chat.lastMsg}
          </span>
        </span>
        </div>
    </div>
    </ChatPageWrapper>
  );
}
