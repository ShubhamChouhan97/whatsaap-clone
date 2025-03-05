// import React from 'react';
// import styles from './style.module.css';
// import Input from '../../component/Input';
// import Button from '../Button';

// function Chatcontainer({ selectedChat }) {
//   const imageUrl = `http://localhost:3000${selectedChat.dp}`;
//   // console.log(selectedChat)
//   if (!selectedChat) {
//     return <p>Select a chat to start messaging.</p>;
//   }

//   return (
//     <div>
//       <div className={styles.detailsdiv}>
//         <div className={styles.dpimg}>
//           <img src={imageUrl} alt={selectedChat.name} />
//         </div>
        
//         <div className={styles.reciverdetails}>
//           <span className={styles.recivername}>{selectedChat.name}</span><br />
//           <span>Last seen </span>
//         </div>
//         <div className={styles.funct}>
//        <Button><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#5f6368"><path d="M765-144 526-383q-30 22-65.79 34.5-35.79 12.5-76.18 12.5Q284-336 214-406t-70-170q0-100 70-170t170-70q100 0 170 70t70 170.03q0 40.39-12.5 76.18Q599-464 577-434l239 239-51 51ZM384-408q70 0 119-49t49-119q0-70-49-119t-119-49q-70 0-119 49t-49 119q0 70 49 119t119 49Z"/></svg></Button>         <Button><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#5f6368"><path d="M479.79-192Q450-192 429-213.21t-21-51Q408-294 429.21-315t51-21Q510-336 531-314.79t21 51Q552-234 530.79-213t-51 21Zm0-216Q450-408 429-429.21t-21-51Q408-510 429.21-531t51-21Q510-552 531-530.79t21 51Q552-450 530.79-429t-51 21Zm0-216Q450-624 429-645.21t-21-51Q408-726 429.21-747t51-21Q510-768 531-746.79t21 51Q552-666 530.79-645t-51 21Z"/></svg></Button>
//          </div>
//       </div>

//       <div className={styles.chatdetails}>
//         {selectedChat.chat.map((msg, index) => (
//           <div key={index} className={msg.sender === "You" ? styles.sent : styles.received}>
//             <p><strong>{msg.sender}:</strong> {msg.text}</p>
//             <span>{msg.time}</span>
//           </div>
//         ))}
//       </div>

//       <div className={styles.inputsection}>
//         <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill="#5f6368">
//           <path d="M446.67-446.67H200v-66.66h246.67V-760h66.66v246.67H760v66.66H513.33V-200h-66.66v-246.67Z"/>
//         </svg>               
//         <div className={styles.inputdiv}>
//           <Input placeholder="Type a message" />
//         </div>
//         <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-400q-50 0-85-35t-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35Zm0-240Zm-40 520v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Zm40-360q17 0 28.5-11.5T520-520v-240q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v240q0 17 11.5 28.5T480-480Z"/></svg>
//         <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"/></svg>
//       </div>
//     </div>
//   );
// }

// export default Chatcontainer;


import React, { useState } from "react";
import styles from "./style.module.css";
import Input from "../../component/Input";
import Button from "../Button";

function Chatcontainer({ selectedChat }) {
  const [message, setMessage] = useState("");

  if (!selectedChat) {
    return <p>Select a chat to start messaging.</p>;
  }

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() === "") return;
    console.log("Message sent:", message);
    setMessage(""); // Clear input after sending
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevents new line in input field
      handleSendMessage();
    }
  };

  return (
    <div>
      <div className={styles.detailsdiv}>
        <div className={styles.dpimg}>
          <img src={`http://localhost:3000${selectedChat.dp}`} alt={selectedChat.name} />
        </div>
        <div className={styles.reciverdetails}>
          <span className={styles.recivername}>{selectedChat.name}</span><br />
          <span>Last seen</span>
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
        {selectedChat.chat.map((msg, index) => (
          <div key={index} className={msg.sender === "You" ? styles.sent : styles.received}>
            <p><strong>{msg.sender}:</strong> {msg.text}</p>
            <span>{msg.time}</span>
          </div>
        ))}
      </div>

      <div className={styles.inputsection}>
        <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill="#5f6368">
          <path d="M446.67-446.67H200v-66.66h246.67V-760h66.66v246.67H760v66.66H513.33V-200h-66.66v-246.67Z" />
        </svg>
        <div className={styles.inputdiv}>
          <Input 
            placeholder="Type a message" 
            value={message} 
            onChange={handleInputChange} 
            onKeyDown={handleKeyPress} 
          />
        </div>

        {message ? (
          <svg onClick={handleSendMessage} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368" style={{ cursor: "pointer" }}>
            <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
            <path d="M480-400q-50 0-85-35t-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35Zm0-240Zm-40 520v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Zm40-360q17 0 28.5-11.5T520-520v-240q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v240q0 17 11.5 28.5T480-480Z" />
          </svg>
        )}
      </div>
    </div>
  );
}

export default Chatcontainer;
