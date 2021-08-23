import React , {useState, useEffect} from "react";
import Paper from "@material-ui/core/Paper";
import TopbarUser from "../../../Topbar/TopbarUser";
import { ViewWrapper } from "./Chat.styles"
import Frame from "../../../../assets/images/Frame.png";
import Chat from "../../../../components/uielements/Chat/Chat";
import ActiveUser from "../../../../components/uielements/ActiveUser/ActiveUser";
import Message from "../../../../components/uielements/Message/Message";
import { useDispatch } from "react-redux";
import { setChat } from "../../../../redux/chat";

export default function ManagerChat() {

   const dispatch = useDispatch()

  const [showChatContainer, setShowChatContainer] = useState(true);
  const [showMessageContainer, setShowMessageContainer] = useState(true);

  useEffect(() => {
    if(typeof window !== undefined) {
      window.addEventListener("resize", handleResize)
    }
  }, [])


  const handleResize = () => {
    if (window.innerWidth > 768) {
      setShowMessageContainer(true)
      setShowChatContainer(true)
    } else {
      setShowMessageContainer(false)
      setShowChatContainer(true)
    }
  } 

  const [chats, setChats] =useState([
    {"id": 1,  "name": "Banjamin", "date": "16 jan", "message": "Hello Guys, this is my linked in redeign concept enjoy,", "image": "", "active": false},
    {"id": 2, "name": "Banjamin", "date": "16 jan", "message": "Hello Guys, this is my linked in redeign concept enjoy,", "image": "", "active": false},
    {"id": 3,"name": "Banjamin", "date": "16 jan", "message": "Hello Guys, this is my linked in redeign concept enjoy,", "image": "", "active": false},
    {"id": 4,"name": "Banjamin", "date": "16 jan", "message": "Hello Guys, this is my linked in redeign concept enjoy,", "image": "", "active": false},
    {"id": 5,"name": "Banjamin", "date": "16 jan", "message": "Hello Guys, this is my linked in redeign concept enjoy,", "image": "", "active": false},
    {"id": 6,"name": "Banjamin", "date": "16 jan", "message": "Hello Guys, this is my linked in redeign concept enjoy,", "image": "", "active": false},
    {"id": 7,"name": "Banjamin", "date": "16 jan", "message": "Hello Guys, this is my linked in redeign concept enjoy,", "image": "", "active": false},
    {"id": 8,"name": "Banjamin", "date": "16 jan", "message": "Hello Guys, this is my linked in redeign concept enjoy,", "image": "", "active": false},
    {"id": 9,"name": "Banjamin", "date": "16 jan", "message": "Hello Guys, this is my linked in redeign concept enjoy,", "image": "", "active": false},
    {"id": 10,"name": "Banjamin", "date": "16 jan", "message": "Hello Guys, this is my linked in redeign concept enjoy,", "image": "", "active": false},
    {"id": 11, "name": "Banjamin", "date": "16 jan", "message": "Hello Guys, this is my linked in redeign concept enjoy,", "image": "", "active": false},
    {"id": 12,"name": "Banjamin", "date": "16 jan", "message": "Hello Guys, this is my linked in redeign concept enjoy,", "image": "", "active": false},
    {"id": 13,"name": "Banjamin", "date": "16 jan", "message": "Hello Guys, this is my linked in redeign concept enjoy,", "image": "", "active": false},
  ])


  const [messages, setMessages] = useState([
    {"id": 1 ,"name": "Nik", "message": "Hi jhjghgjh hj hh  ghj gg h hg hj hjg hjg hjg hjg h ghj g h g hjg hj g hj g"},
    {"id": 2, "name": "Nik", "message": "Hi jhjghgjh hj hh  ghj gg h hg hj hjg hjg hjg hjg h ghj g h g hjg hj g hj g"},
    {"id": 1,"name": "Nik", "message": "Hi jhjghgjh hj hh  ghj gg h hg hj hjg hjg hjg hjg h ghj g h g hjg hj g hj g"},
    {"id": 1 ,"name": "Nik", "message": "Hi jhjghgjh hj hh  ghj gg h hg hj hjg hjg hjg hjg h ghj g h g hjg hj g hj g"},
    {"id": 2, "name": "Nik", "message": "Hi jhjghgjh hj hh  ghj gg h hg hj hjg hjg hjg hjg h ghj g h g hjg hj g hj g"},
    {"id": 2,"name": "Nik", "message": "Hi jhjghgjh hj hh  ghj gg h hg hj hjg hjg hjg hjg h ghj g h g hjg hj g hj g"},
    {"id": 1 ,"name": "Nik", "message": "Hi jhjghgjh hj hh  ghj gg h hg hj hjg hjg hjg hjg h ghj g h g hjg hj g hj g"},
    {"id": 2, "name": "Nik", "message": "Hi jhjghgjh hj hh  ghj gg h hg hj hjg hjg hjg hjg h ghj g h g hjg hj g hj g"},
    {"id": 2,"name": "Nik", "message": "Hi jhjghgjh hj hh  ghj gg h hg hj hjg hjg hjg hjg h ghj g h g hjg hj g hj g"},
    {"id": 1 ,"name": "Nik", "message": "Hi jhjghgjh hj hh  ghj gg h hg hj hjg hjg hjg hjg h ghj g h g hjg hj g hj g"},
    {"id": 2, "name": "Nik", "message": "Hi jhjghgjh hj hh  ghj gg h hg hj hjg hjg hjg hjg h ghj g h g hjg hj g hj g"},
    {"id": 2,"name": "Nik", "message": "Hi jhjghgjh hj hh  ghj gg h hg hj hjg hjg hjg hjg h ghj g h g hjg hj g hj g"},

  ])

  const handleBack = () => {
    setShowChatContainer(true)
    setShowMessageContainer(false)
  }


  const handleChatClick = (index) => {

    if (window.innerWidth < 991) {
      setShowMessageContainer(true)
      setShowChatContainer(false)
    }

    let activeChat = chats.filter((chat, i) => i === index )[0];

    // fetch last 10 message from chat here from service/chat
    dispatch(setChat({chat: activeChat}))

    setChats(chats.map((chat, i) => {
      i === index ? chat.active = true : chat.active = false 
      return chat
    }))
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
              <div className={ showChatContainer ? "show col-xl-3 col-lg-5 p-0 border-right chat-side" : "hide col-xl-3 col-lg-5 p-0 border-right chat-side"}>
                <h3 className="pt-4 pb-4 p-3 ">Messaging</h3>
                <div className="chat-container ">
                  <div className="user-list">
                   {chats && chats.length > 0  && chats.map((chat, index) => {
                        return <Chat chat={chat} handleChatClick={(index) => handleChatClick(index)} index={index} key={index}/>
                      })
                    }
                  </div>
                 
                </div>
              </div>
              <div className={   showMessageContainer ? "show col-xl-9 col-lg-7 h-100 p-0"  : "hide col-xl-9 col-lg-7 h-100 p-0"}>
                  <ActiveUser onBack={handleBack}/>
                  <div className="message-box">
                    { 
                      messages && messages.length > 0 && messages.map((message) => {
                      return <Message message={message}/>
                      })
                    }
                  </div>
                  <div className="send-box">
                      <div className="row p-4">

                      <div className="col-10">
                          <input type="text" className="form-control message-input" placeholder="write a message..."/>
                      </div>
                      <div className="col-2">
                        <button className="btn btn-primary br-15">Send</button>
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
