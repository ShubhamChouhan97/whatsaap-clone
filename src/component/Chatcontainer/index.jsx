// // last verwsion 
// import { Idget } from "../../API/idget";
// import React, { useState, useEffect,useRef } from "react";
// import { io } from "socket.io-client";
// import styles from "./style.module.css";
// import Input from "../../component/Input";
// import Button from "../Button";

// const socket = io("http://localhost:3000");

// function Chatcontainer({ reciverId, selectedChat, details }) {
//   const [message, setMessage] = useState("");
//   const [chatMessages, setChatMessages] = useState([]);
//   const [iddata, setIdData] = useState(null);
//   const lastMessageRef = useRef(null);

//   useEffect(() => {
//     if (lastMessageRef.current) {
//       lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [chatMessages]); // Scroll when chatMessages update

//   useEffect(() => {
//     const fetchMessages = async () => {
//       if (!selectedChat || !details?.chat?.length) return;
//       try {
//         const response = await fetch("http://localhost:3000/api/chat/messages", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ messageIds: details.chat }),
//         });

//         if (!response.ok) throw new Error("Failed to fetch messages");

//         const messages = await response.json();
//         setChatMessages(messages);
//       } catch (error) {
//         console.error("Error fetching messages:", error);
//       }
//     };

//     fetchMessages();
//   }, [selectedChat, details?.chat]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await Idget();
//         setIdData(result);
//       } catch (err) {
//         console.error("Error fetching user ID:", err);
//       }
//     };

//     fetchData();
//   }, []);

//   const userId = iddata;

//   useEffect(() => {
//     if (!selectedChat || !userId) return;

//     socket.emit("join", { userId });

//     const handleMessage = ({ senderId, message,time }) => {
//       const formattedTime = new Date(time).toLocaleString('en-US', {
//         hour: 'numeric',
//         minute: 'numeric',
//         hour12: true
//       });
//       if (senderId === selectedChat._id) {
//         setChatMessages((prev) => [...prev, { sender: details.userName, text: message,time: formattedTime }]);
//       }
//     };

//     socket.on("privateMessage", handleMessage);

//     return () => {
//       socket.off("privateMessage", handleMessage);
//     };
//   }, [selectedChat, userId]);

//   const handleSendMessage = () => {
//     const formattedTime = new Date().toLocaleString('en-US', {
//       hour: 'numeric',
//       minute: 'numeric',
//       hour12: true
//     });
//     if (!message.trim() || !userId || !selectedChat?.reciverobjectid) {
//       console.error("Missing required data:", { message, userId, selectedChat });
//       return;
//     }

//     const newMessage = { sender: "You", text: message,time:formattedTime  };
//     setChatMessages((prevMessages) => [...prevMessages, newMessage]);

//     socket.emit("privateMessage", {
//       reciverId,
//       senderId: userId,
//       receiverobjectId: selectedChat.reciverobjectid,
//       message,
//     });

//     setMessage("");
//   };

//   useEffect(() => {
//     if (!reciverId) return;

//     const handleIncomingMessage = ({ senderIdbyserver, message,time }) => {
//       const formattedTime = new Date(time).toLocaleString('en-US', {
//         hour: 'numeric',
//         minute: 'numeric',
//         hour12: true
//       });
//       if (senderIdbyserver === reciverId) {
//         setChatMessages((prevMessages) => [...prevMessages, { sender: details.userName, text: message,time: formattedTime}]);
//       }
//     };

//     socket.on("privateMessage", handleIncomingMessage);

//     return () => {
//       socket.off("privateMessage", handleIncomingMessage);
//     };
//   }, [reciverId]);

//   return (
//     <div className={styles.chatContainer}>
//       {selectedChat ? (
//         <>
//           <div className={styles.detailsdiv}>
//             <div className={styles.dpimg}>
//               <img src={`http://localhost:3000${details.dp}`} alt={details.userName} />
//             </div>
//             <div className={styles.reciverdetails}>
//               <span className={styles.recivername}>{details.userName}</span><br />
//               <span>{details.livestatus}</span>
           
//             </div>
//             <div className={styles.funct}>
//           <Button>
//              <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#5f6368">
//                <path d="M765-144 526-383q-30 22-65.79 34.5-35.79 12.5-76.18 12.5Q284-336 214-406t-70-170q0-100 70-170t170-70q100 0 170 70t70 170.03q0 40.39-12.5 76.18Q599-464 577-434l239 239-51 51ZM384-408q70 0 119-49t49-119q0-70-49-119t-119-49q-70 0-119 49t-49 119q0 70 49 119t119 49Z" />
//              </svg>
//            </Button>
//            <Button>
//              <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#5f6368">
//                <path d="M479.79-192Q450-192 429-213.21t-21-51Q408-294 429.21-315t51-21Q510-336 531-314.79t21 51Q552-234 530.79-213t-51 21Zm0-216Q450-408 429-429.21t-21-51Q408-510 429.21-531t51-21Q510-552 531-530.79t21 51Q552-450 530.79-429t-51 21Zm0-216Q450-624 429-645.21t-21-51Q408-726 429.21-747t51-21Q510-768 531-746.79t21 51Q552-666 530.79-645t-51 21Z" />
//              </svg>
//            </Button>
//          </div>
//           </div>

//           <div className={styles.chatdetails}  >
//             {chatMessages.map((msg, index) => (
//               <div key={index} className={msg.sender === "You" || msg.senderId === userId ? styles.sent : styles.received}  ref={index === chatMessages.length - 1 ? lastMessageRef : null}>
//                 <p>{msg.text}  <span>{msg.time}</span></p>
               
//               </div>
//             ))}
//           </div>

//           <div className={styles.inputsection}>
//           <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill="#5f6368">
//            <path d="M446.67-446.67H200v-66.66h246.67V-760h66.66v246.67H760v66.66H513.33V-200h-66.66v-246.67Z" />
//          </svg>
//             <div className={styles.inputdiv}>
//               <Input 
//                 placeholder="Type a message" 
//                 value={message} 
//                 onChange={(e) => setMessage(e.target.value)}
//                 onKeyDown={(e) => e.key === "Enter" && handleSendMessage()} 
//               />
//             </div>

//             {message ? (
             
//                  <svg onClick={handleSendMessage} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368" style={{ cursor: "pointer" }}>
//                 <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
//               </svg>
             
              
//             ) : (
//               <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
//                 <path d="M480-400q-50 0-85-35t-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35Zm0-240Zm-40 520v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Z" />
//               </svg>
//             )}
//           </div>
//         </>
//       ) : (
//         <p>Select a chat to start messaging.</p>
//       )}
//     </div>
//   );
// }

// export default Chatcontainer;

// version 3
import { Idget } from "../../API/idget";
import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import EmojiPicker from "emoji-picker-react";
import styles from "./style.module.css";
import Input from "../../component/Input";
import Button from "../Button";

const socket = io("http://localhost:3000");

function ChatContainer({ reciverId, selectedChat, details }) {
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [iddata, setIdData] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const lastMessageRef = useRef(null);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages]);

  useEffect(() => {
    const fetchMessages = async () => {
      if (!selectedChat || !details?.chat?.length) return;
      try {
        const response = await fetch("http://localhost:3000/api/chat/messages", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messageIds: details.chat }),
        });

        if (!response.ok) throw new Error("Failed to fetch messages");

        const messages = await response.json();
        setChatMessages(messages);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, [selectedChat, details?.chat]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await Idget();
        setIdData(result);
      } catch (err) {
        console.error("Error fetching user ID:", err);
      }
    };

    fetchData();
  }, []);

  const userId = iddata;

  useEffect(() => {
    if (!selectedChat || !userId) return;

    socket.emit("join", { userId });

    const handleMessage = ({ senderId, message, time }) => {
      const formattedTime = new Date(time).toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });

      if (senderId === selectedChat._id) {
        setChatMessages((prev) => [...prev, { sender: details.userName, text: message, time: formattedTime }]);
      }
    };

    socket.on("privateMessage", handleMessage);

    return () => {
      socket.off("privateMessage", handleMessage);
    };
  }, [selectedChat, userId]);

  const handleSendMessage = () => {
    const formattedTime = new Date().toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    if (!message.trim() || !userId || !selectedChat?.reciverobjectid) {
      console.error("Missing required data:", { message, userId, selectedChat });
      return;
    }

    const newMessage = { sender: "You", text: message, time: formattedTime };
    setChatMessages((prevMessages) => [...prevMessages, newMessage]);

    socket.emit("privateMessage", {
      reciverId,
      senderId: userId,
      receiverobjectId: selectedChat.reciverobjectid,
      message,
    });

    setMessage("");
  };

  useEffect(() => {
    if (!reciverId) return;

    const handleIncomingMessage = ({ senderIdbyserver, message, time }) => {
      const formattedTime = new Date(time).toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });

      if (senderIdbyserver === reciverId) {
        setChatMessages((prevMessages) => [...prevMessages, { sender: details.userName, text: message, time: formattedTime }]);
      }
    };

    socket.on("privateMessage", handleIncomingMessage);

    return () => {
      socket.off("privateMessage", handleIncomingMessage);
    };
  }, [reciverId]);
  const fileInputRef = useRef(null);

  function fileselect() {
    // console selected value
    console.log(fileInputRef.current.files);
    fileInputRef.current.click();

  }
  
 
  
  // file select
 

  return (
    <div className={styles.chatContainer}>
      {selectedChat ? (
        <>
          <div className={styles.detailsdiv}>
            <div className={styles.dpimg}>
              <img src={`http://localhost:3000${details.dp}`} alt={details.userName} />
            </div>
            <div className={styles.reciverdetails}>
              <span className={styles.recivername}>{details.userName}</span>
              <br />
              <span>{details.livestatus}</span>
            </div>
            <div className={styles.funct}>
           <Button>
              <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#5f6368">
                <path d="M765-144 526-383q-30 22-65.79 34.5-35.79 12.5-76.18 12.5Q284-336 214-406t-70-170q0-100 70-170t170-70q100 0 170 70t70 170.03q0 40.39-12.5 76.18Q599-464 577-434l239 239-51 51ZM384-408q70 0 119-49t49-119q0-70-49-119t-119-49q-70 0-119 49t-49 119q0 70 49 119t119 49Z" />
             </svg>
            </Button>
            <Button>
              <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#5f6368">
                <path d="M479.79-192Q450-192 429-213.21t-21-51Q408-294 429.21-315t51-21Q510-336 531-314.79t21 51Q552-234 530.79-213t-51 21Zm0-216Q450-408 429-429.21t-21-51Q408-510 429.21-531t51-21Q510-552 531-530.79t21 51Q552-450 530.79-429t-51 21Zm0-216Q450-624 429-645.21t-21-51Q408-726 429.21-747t51-21Q510-768 531-746.79t21 51Q552-666 530.79-645t-51 21Z" />
              </svg>
            </Button>
        </div>
          </div>

          <div className={styles.chatdetails}>
            {chatMessages.map((msg, index) => (
              <div
                key={index}
                className={msg.sender === "You" || msg.senderId === userId ? styles.sent : styles.received}
                ref={index === chatMessages.length - 1 ? lastMessageRef : null}
              >
                <p>
                  {msg.text} <span>{msg.time}</span>
                </p>
              </div>
            ))}
          </div>

          <div className={styles.inputsection}>
          <div className={styles.filldiv} onClick={fileselect}>
  <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill="#5f6368">
    <path d="M446.67-446.67H200v-66.66h246.67V-760h66.66v246.67H760v66.66H513.33V-200h-66.66v-246.67Z" />
  </svg>
  <input
    type="file"
    ref={fileInputRef}
    style={{ display: "none" }} // Hide the file input
    onChange={(e) => console.log("File selected:", e.target.files[0])} // Handle file selection
  />
</div>

            {/* Emoji Picker Button */}
            <button
              onClick={() => setShowEmojiPicker((prev) => !prev)}
              className={styles.emojiButton}
            >
              😀
            </button>

            {/* Emoji Picker Component */}
            {showEmojiPicker && (
              <div className={styles.emojiPicker}>
                <EmojiPicker
                  onEmojiClick={(emojiObject) => {
                    setMessage((prevMessage) => prevMessage + emojiObject.emoji);
                    // Do NOT close the emoji picker here
                  }}
                />
              </div>
            )}

            <div className={styles.inputdiv}>
            <Input placeholder="Type a message" value={message} onChange={(e) => {
                           setShowEmojiPicker(false);
                           setMessage(e.target.value);}}
           onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}/>
            </div>

            {message ? (
              <svg
                onClick={handleSendMessage}
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5f6368"
                style={{ cursor: "pointer" }}
              >
                <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                <path d="M480-400q-50 0-85-35t-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35Zm0-240Zm-40 520v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Z" />
              </svg>
            )}
          </div>
        </>
      ) : (
        <p>Select a chat to start messaging.</p>
      )}
    </div>
  );
}

export default ChatContainer;
