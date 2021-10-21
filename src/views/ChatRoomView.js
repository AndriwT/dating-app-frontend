import { Button, TextField } from "@mui/material";
import React, { useEffect, useContext } from "react";
import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import io from "socket.io-client"
import { UserContext } from "../context/UserContext";
const apiUrl = process.env.REACT_APP_API_URL;

const ChatRoomView = () => {
  const {user, getUserById} = useContext(UserContext);
  const userTwoId = getQueryVariable('id');
  const socketRef = useRef();
  const chatIdRef = useRef(chatIdGenerator(user.uid, userTwoId))
  const [state, setState] = useState({message: ""});
  const [chat, setChat] = useState([]);
  const [chatUser, setChatUser] = useState(null)

  const getChatUserObject = async () => {
    const chatUserObject = await getUserById(userTwoId);
    console.log(chatUserObject);
    setChatUser(chatUserObject);
  }
  
  useEffect(() => {
    getMessagesByChatroomId();
    getChatUserObject()
  }, [])


  const getMessagesByChatroomId = async () => {
    const response = await axios.post(
      `${apiUrl}/api/chatroom`,
      {id: chatIdRef.current}
    );
    setChat(response.data);
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable is not found', variable);
}


function getIdValue (id) {
  let value = 0;
  for (let i = 0; i < id.length; i++) {
    value += id.charCodeAt(i) + i
  }
  return value;
}


function chatIdGenerator (userIdOne, userIdTwo) {
  // console.log("USER ID 1: ",userIdOne,"USER ID 2", userIdTwo);
  const userIdOneValue = getIdValue(userIdOne);
  const userIdTwoValue = getIdValue(userIdTwo);

  if (userIdOneValue > userIdTwoValue) {
    return userIdOne + userIdTwo;
  }
  return userIdTwo + userIdOne;
}



  const onTextChange = (e) => {
    setState({ [e.target.name]: e.target.value });
  };

// console.log("CHATROOM ID: ", chatIdRef);
  useEffect(() => {
    socketRef.current = io.connect(`${apiUrl}?id=` + chatIdRef.current); // changed "http://localhost:5000?id=" --> `${apiUrl}?id=`
    socketRef.current.on("message", (currentMessage) => {
      setChat([...chat, currentMessage]);
    })
    return () => socketRef.current.disconnect();
  }, [chat])

  const onMessageSubmit = (e) => {
    const { message } = state;
    socketRef.current.emit("message", { message, to: userTwoId, from: user.uid, date: +new Date(), chatroom_id: chatIdRef.current });
    e.preventDefault();
    setState({ message: ""});
  };
  

  const renderChat = () => {
    return chat.map(({ message }, index) => (
      <div key={index}>
        <h5>
          <span>{message}</span>
        </h5>
      </div>
    ));
  };



  return (
    <>
      <div className="chat-container">
        <h2 className="matches-title" style={{marginBottom: 30}}>Chat Room</h2>
        <div className="render-chat">
        <div>

          {
          (chatUser && chatUser.name && (

              <h3>You are chatting with {chatUser.name}</h3>
            ))
          }
        </div>

          <hr />
          <div className="messages-container">
          {renderChat()}
          </div>
          <div style={{ marginTop: "22px" }}>
            <TextField
              style={{ width: "100%" }}
              name="message"
              onChange={(e) => onTextChange(e)}
              value={state.message}
              id="outlined-multiline-static"
              variant="outlined"
              label="Message"
            />
            <div style={{marginTop: 20}}>
            <Button variant="contained" onClick={onMessageSubmit} style={{background: "purple", width: "100%"}}>Send</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatRoomView;

// TODO: function to pass a chatroom id to try to find the messages that belong to that chatroom,
// this function can be made in context and passed here thru context.

// here you connect socket io to send messages to the backend and to received messages FROM the back end
