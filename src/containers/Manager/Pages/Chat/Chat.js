import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import TopbarUser from "../../../Topbar/TopbarUser";
import { ViewWrapper } from "./Chat.styles"
import Frame from "../../../../assets/images/Frame.png";
import Chat from "../../../../components/uielements/Chat/Chat";
import ActiveUser from "../../../../components/uielements/ActiveUser/ActiveUser";
import Message from "../../../../components/uielements/Message/Message";
import { useDispatch, useSelector } from "react-redux";
import { setChat } from "../../../../redux/chat";
import Socket from "../../../../config/socket.config"
import { Chats } from "../../../../service/Chat";
import { userSelector } from "../../../../redux/user";
import { chatSelector } from "../../../../redux/chat";
import { Messages } from "../../../../service/Message";
import {Toast} from "../../../../service/Toast";

export default function ManagerChat() {

  const dispatch = useDispatch()

  const [showChatContainer, setShowChatContainer] = useState(true);
  const [showMessageContainer, setShowMessageContainer] = useState(true);
  const [ActiveChatID, setActiveChatId] = useState("")
  const [To, setTo] = useState("")
  const [From, setFrom] = useState("")
  const [Newmessage, setNewmessage] = useState("")
  const [activeUser, setactiveUser] = useState({})
  const[active,setactive]=useState(false)
  const { user } = useSelector(userSelector);
  const { chat } = useSelector(chatSelector);
  
  const [chats, setChats] = useState([])
  const [messages, setMessages] = useState([])

  useEffect(() => {

    (async () => {
      getChats()

    })();

    if (typeof window !== undefined) {
      window.addEventListener("resize", handleResize)
    }


    
  }, [])


  

  const getChats = () => {
    Chats.getChats().then(res => {
      setChats([...res.data])
    })
      .catch(err => console.log(err))
  }


  const handleResize = () => {

    console.log(ActiveChatID)
    if (window.innerWidth > 768) {
      setShowMessageContainer(true)
      setShowChatContainer(true)
    } else {
      setShowMessageContainer(false)
      setShowChatContainer(true)
    }
  }


  const handleBack = () => {
    setShowChatContainer(true)
    setShowMessageContainer(false)
  }

  const validate=()=>{
    let formIsValid = true;
        if (!Newmessage) {
          formIsValid = false;
          Toast.fire("error","message is required")
        }
        return formIsValid
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if(validate()){

    console.log(ActiveChatID)

    Socket.emit("new-message", {
      room: ActiveChatID,
      to: To,
      from: From,
      message: Newmessage
    })
    setNewmessage("")
  }
}

  const handleChatClick = (index) => {

    if (window.innerWidth < 991) {
      setShowMessageContainer(true)
      setShowChatContainer(false)
    }

    let activeChat = chats.filter((chat, i) => i === index)[0];

    dispatch(setChat({ chat: activeChat }))

    if (activeChat.user1._id !== user._id) {
      setactiveUser(activeChat.user1)
      setTo(activeChat.user1._id)
      setFrom(activeChat.user2._id)
    } else {
      setactiveUser(activeChat.user2)
      setTo(activeChat.user2._id)
      setFrom(activeChat.user1._id)
    }


    Socket.emit("join-room", { room: activeChat._id })

    getMessages(activeChat._id).then((res) => {
      setMessages([...res.data])
      scrollToBottom()
    })

    setActiveChatId(activeChat._id)
    localStorage.setItem("activeChatId", activeChat._id)
    setactive(true)

    

    

  }


  useEffect(() => {

    Socket.on("on-new-message", (data) => {  
      
      console.log(data)      
      if(data.chat == localStorage.getItem("activeChatId")) { 
        setMessages([...messages, data])

      } 

      scrollToBottom()
      getChats()
    })
    
  }, [Socket, messages])

  const getMessages = async (id, skip=0) => {
    return Messages.getMessage(id, skip)
  }

  const scrollToBottom = () => {
    let el = document.getElementsByClassName("message-box")[0]
    if(el){
    el.scrollTop = el.scrollHeight;
    }
  }


  const handleScroll = (e, activeChatID, skip) => {
    let el = document.getElementsByClassName("message-box")[0]
    if (el.scrollTop === 0) {
      getMessages(activeChatID,skip.length).then((res) => {
      setMessages((res.data).concat([...messages]))
    })
  
    } 
  }

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
                        return <Chat chat={chat} handleChatClick={(index) => handleChatClick(index)} activeChatID={ActiveChatID} index={index} key={index} />
                      })
                      }
                    </div>

                  </div>
                </div>

                <div className={showMessageContainer ? "show col-xl-9 col-lg-7 h-100 p-0" : "hide col-xl-9 col-lg-7 h-100 p-0"}>

                  {/* {
                    messages && messages.length === 0 && (
                      <div className="row h-100">
                        <div className="col-12 h-100 flex-item">
                          <span className="w-100 text-center">
                            Click a Group leader to start a chat
                          </span>
                        </div>
                      </div>
                    )
                  } */}

                  {
                    active ? (
                      <div className="h-100">
                        <ActiveUser user={activeUser} onBack={handleBack} />
                        <div className="message-box" id="message-container" onScroll={(e) => handleScroll(e, ActiveChatID, messages)} style={{ overflowX: "hidden" }}>
                          {
                            messages && messages.length > 0 && messages.map((message) => {
                              return <Message message={message} />
                            })
                          }
                        </div>
                        <div className="send-box">
                          <div className="row p-4">
                            <div className="col-10">
                              <input type="text" className="form-control message-input" value={Newmessage} onChange={(e) => setNewmessage(e.target.value)} placeholder="write a message..." />
                            </div>
                            <div className="col-2">
                              <button className="btn btn-primary br-15" onClick={onSubmit}>Send</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ):
                    (
                      <div className="row h-100">
                        <div className="col-12 h-100 flex-item">
                          <span className="w-100 text-center">
                          Click a Group leader to start a chat
                          </span>
                        </div>
                      </div>
                    )
                  }

                </div>
              </div>
            </div>
          </Paper>
        </div>
      </div>
    </ViewWrapper>
  );
}
