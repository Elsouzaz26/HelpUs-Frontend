import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import TopbarUser from "../../../Topbar/TopbarUser";
import { ViewWrapper } from "./Chat.styles"
import Frame from "../../../../assets/images/Frame.png";
import Chat from "../../../../components/uielements/Chat/Chat";
import ActiveUser from "../../../../components/uielements/ActiveUser/ActiveUser";
import Message from "../../../../components/uielements/Message/Message";
import { useDispatch, useSelector } from "react-redux";
import rootReducer from "../../../../redux";
import { configureStore } from "@reduxjs/toolkit";
import { setChat } from "../../../../redux/chat";
import Socket from "../../../../config/socket.config"
import { Chats } from "../../../../service/Chat";
import { userSelector } from "../../../../redux/user";
import { Messages } from "../../../../service/Message";

// import chat from "../../../../../../backend/models/chat";


export default function ManagerChat() {

  const dispatch = useDispatch()

  const [showChatContainer, setShowChatContainer] = useState(true);
  const [showMessageContainer, setShowMessageContainer] = useState(true);
  const [ActiveChatID, setActiveChatId] = useState("")
  const [To, setTo] = useState("")
  const [From, setFrom] = useState("")
  const [Newmessage, setNewmessage] = useState("")

  const {user} = useSelector(userSelector);
  useEffect(() => {

    (async () => {
      Chats.getChats().then(res => {
        console.log(res.data)
        setChats([...res.data])
      })
        .catch(err => console.log(err))
    })();
    if (typeof window !== undefined) {
      window.addEventListener("resize", handleResize)
    }
  }, [])

  // const store = configureStore({ reducer: rootReducer });
  // const {users: {user}} =store.getState();

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setShowMessageContainer(true)
      setShowChatContainer(true)
    } else {
      setShowMessageContainer(false)
      setShowChatContainer(true)
    }
  }

  const [chats, setChats] = useState([
    { "id": 1, "name": "Banjamin", "date": "16 jan", "message": "Hello Guys, this is my linked in redeign concept enjoy,", "image": "", "active": false },
    { "id": 2, "name": "Banjamin", "date": "16 jan", "message": "Hello Guys, this is my linked in redeign concept enjoy,", "image": "", "active": false },
    { "id": 3, "name": "Banjamin", "date": "16 jan", "message": "Hello Guys, this is my linked in redeign concept enjoy,", "image": "", "active": false },
    { "id": 4, "name": "Banjamin", "date": "16 jan", "message": "Hello Guys, this is my linked in redeign concept enjoy,", "image": "", "active": false },
    { "id": 5, "name": "Banjamin", "date": "16 jan", "message": "Hello Guys, this is my linked in redeign concept enjoy,", "image": "", "active": false },
    { "id": 6, "name": "Banjamin", "date": "16 jan", "message": "Hello Guys, this is my linked in redeign concept enjoy,", "image": "", "active": false },
    { "id": 7, "name": "Banjamin", "date": "16 jan", "message": "Hello Guys, this is my linked in redeign concept enjoy,", "image": "", "active": false },
    { "id": 8, "name": "Banjamin", "date": "16 jan", "message": "Hello Guys, this is my linked in redeign concept enjoy,", "image": "", "active": false },
    { "id": 9, "name": "Banjamin", "date": "16 jan", "message": "Hello Guys, this is my linked in redeign concept enjoy,", "image": "", "active": false },
    { "id": 10, "name": "Banjamin", "date": "16 jan", "message": "Hello Guys, this is my linked in redeign concept enjoy,", "image": "", "active": false },
    { "id": 11, "name": "Banjamin", "date": "16 jan", "message": "Hello Guys, this is my linked in redeign concept enjoy,", "image": "", "active": false },
    { "id": 12, "name": "Banjamin", "date": "16 jan", "message": "Hello Guys, this is my linked in redeign concept enjoy,", "image": "", "active": false },
    { "id": 13, "name": "Banjamin", "date": "16 jan", "message": "Hello Guys, this is my linked in redeign concept enjoy,", "image": "", "active": false },
  ])


  const [messages, setMessages] = useState([
    { "id": 1, "name": "Nik", "message": "Hi jhjghgjh hj hh  ghj gg h hg hj hjg hjg hjg hjg h ghj g h g hjg hj g hj g" },
    { "id": 2, "name": "Nik", "message": "Hi jhjghgjh hj hh  ghj gg h hg hj hjg hjg hjg hjg h ghj g h g hjg hj g hj g" },
    { "id": 1, "name": "Nik", "message": "Hi jhjghgjh hj hh  ghj gg h hg hj hjg hjg hjg hjg h ghj g h g hjg hj g hj g" },
    { "id": 1, "name": "Nik", "message": "Hi jhjghgjh hj hh  ghj gg h hg hj hjg hjg hjg hjg h ghj g h g hjg hj g hj g" },
    { "id": 2, "name": "Nik", "message": "Hi jhjghgjh hj hh  ghj gg h hg hj hjg hjg hjg hjg h ghj g h g hjg hj g hj g" },
    { "id": 2, "name": "Nik", "message": "Hi jhjghgjh hj hh  ghj gg h hg hj hjg hjg hjg hjg h ghj g h g hjg hj g hj g" },
    { "id": 1, "name": "Nik", "message": "Hi jhjghgjh hj hh  ghj gg h hg hj hjg hjg hjg hjg h ghj g h g hjg hj g hj g" },
    { "id": 2, "name": "Nik", "message": "Hi jhjghgjh hj hh  ghj gg h hg hj hjg hjg hjg hjg h ghj g h g hjg hj g hj g" },
    { "id": 2, "name": "Nik", "message": "Hi jhjghgjh hj hh  ghj gg h hg hj hjg hjg hjg hjg h ghj g h g hjg hj g hj g" },
    { "id": 1, "name": "Nik", "message": "Hi jhjghgjh hj hh  ghj gg h hg hj hjg hjg hjg hjg h ghj g h g hjg hj g hj g" },
    { "id": 2, "name": "Nik", "message": "Hi jhjghgjh hj hh  ghj gg h hg hj hjg hjg hjg hjg h ghj g h g hjg hj g hj g" },
    { "id": 2, "name": "Nik", "message": "Hi jhjghgjh hj hh  ghj gg h hg hj hjg hjg hjg hjg h ghj g h g hjg hj g hj g" },

  ])

  const handleBack = () => {
    setShowChatContainer(true)
    setShowMessageContainer(false)
  }
  const handleChange = (e) => {
    setNewmessage(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    Socket.emit("new-message", {
      room: ActiveChatID,
      to: To,
      from: From,
      message: Newmessage
    })
  }

  const handleChatClick = (index) => {

    if (window.innerWidth < 991) {
      setShowMessageContainer(true)
      setShowChatContainer(false)
    }

    let activeChat = chats.filter((chat, i) => i === index)[0];
    console.log(activeChat)
    setActiveChatId(activeChat._id)
    console.log(user._id)
    if (activeChat.user1._id !== user._id) {
      setTo(activeChat.user1._id)
      setFrom(activeChat.user2._id)
    } else {
      setTo(activeChat.user2._id)
      setFrom(activeChat.user1._id)
    }
    Socket.emit("join-room", { room: activeChat._id })
    // fetch last 10 message from chat here from service/chat
    getMessaages(activeChat._id) // last 10 message
    dispatch(setChat({ chat: activeChat }))
    setChats(chats.map((chat, i) => {
      i === index ? chat.active = true : chat.active = false

      return chat
    }))
  }

  const getMessaages = (id) => {
    Messages.getMessage(id).then((res) => {
      console.log("res",res)
    }).catch()
  }


  Socket.on("on-new-message", (data) => {
    console.log("frontend", data)
    setMessages([...data])
  })

  return (
    <ViewWrapper>
      <div className="mb-5">
        <div className=" clearfix mt-0 mb-5">
          <span class=" float-left ">

          </span>
          <span className="float-right">
            {" "}
            <TopbarUser />
          </span>
        </div>

        <div className="container-fluid ">
          <div className="row">
            <div className="col-12">
              <h3>Manager Chat Interface with Group Leader</h3>
            </div>
          </div>

          <Paper className="paper rounded mt-4">
            <div className="container-fluid message-container">
              <div className="row h-100 ">
                <div className={showChatContainer ? "show col-xl-3 col-lg-5 p-0 border-right chat-side" : "hide col-xl-3 col-lg-5 p-0 border-right chat-side"}>
                  <h3 className="pt-4 pb-4 p-3 ">Messaging</h3>
                  <div className="chat-container ">
                    <div className="user-list">
                      {chats && chats.length > 0 && chats.map((chat, index) => {
                        return <Chat chat={chat} handleChatClick={(index) => handleChatClick(index)} index={index} key={index} />
                      })
                      }
                    </div>

                  </div>
                </div>
                <div className={showMessageContainer ? "show col-xl-9 col-lg-7 h-100 p-0" : "hide col-xl-9 col-lg-7 h-100 p-0"}>
                  <ActiveUser onBack={handleBack} />
                  <div className="message-box">
                    {
                      messages && messages.length > 0 && messages.map((message) => {
                        return <Message message={message} />
                      })
                    }
                  </div>
                  <div className="send-box">
                    <div className="row p-4">

                      <div className="col-10">
                        <input type="text" className="form-control message-input" value={Newmessage} onChange={handleChange} placeholder="write a message..." />
                      </div>
                      <div className="col-2">
                        <button className="btn btn-primary br-15" onClick={onSubmit}>Send</button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </Paper>
        </div>

      </div>
    </ViewWrapper>
  );
}
