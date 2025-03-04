import React from "react";
import styles from './style.module.css';

const ChatItem = ({ chat, onSelectChat }) => {
  const imageUrl = `http://localhost:3000${chat.dp}`;
  console.log("imageUrl",imageUrl);
  return (
    <div className={styles.chatmain} onClick={() => onSelectChat(chat)}>
     
      <img 
        src={imageUrl} 
        alt={chat.name} 
        className="w-12 h-12 rounded-full mr-4"
      />
      <div className="flex-1">
        <div className={styles.nametime}>
          <p className={styles.chatname}>{chat.name}</p>
          <p>{chat.chattime}</p>
        </div>
        <p >{chat.lastMessage}</p>
      </div>
    </div>
  );
};

export default ChatItem;

// import React from "react";
// import styles from './style.module.css';

// const ChatItem = ({ chat, onSelectChat }) => {
//   return (
//     <div className={styles.chatmain} onClick={() => onSelectChat(chat)}>
//       <img 
//         src={chat.image || "https://via.placeholder.com/50"} 
//         alt={chat.name} 
//         className="w-12 h-12 rounded-full mr-4"
//       />
//       <div className="flex-1">
//         <p className={styles.chatname}>{chat.name}</p>
//         <p>{chat.lastMessage}</p>
//       </div>
//     </div>
//   );
// };

// export default ChatItem;

