import React from "react";
import ChatPageWrapper from "./Chat.styled"
import Frame from "../../../assets/images/Frame.png"


export default function Chat({handleChatClick, index, chat}) {

  return (
    <ChatPageWrapper>
      <div className={chat.active ? "active pad-15": " pad-15"} onClick={() =>handleChatClick(index)}>
        <span>
          <img className="user-image" src={Frame}/>
        </span>
        <span className="ml-2 flex mx-50">
          <span className="clear-fix">
            <span className="float-left">
            <h6 >{chat.name}</h6>
            </span>
            <span className="float-right text-right">
              {chat.date}
            </span>
          </span>
          <span class="chat-message">
            {chat.message}
          </span>
        </span>
      </div>
       
    </ChatPageWrapper>
  );
}
