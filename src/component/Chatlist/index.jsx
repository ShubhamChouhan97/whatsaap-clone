// import React from "react";
// import ChatItem from "../ChatItem";
// import styles from './style.module.css';

// const ChatList = ({ chats, onSelectChat }) => {
//   return (
//     <div className={styles.chatlisttt}>
//       <div className={styles.chatlistitemc}>
//         {chats.length > 0 ? (
//           chats.map((chat) => (
//             <ChatItem key={chat.id} chat={chat} onSelectChat={onSelectChat} />
//           ))
//         ) : (
//           <p className="text-gray-500 text-center mt-4">No chats available</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ChatList;


import React from "react";
import ChatItem from "../ChatItem";
import styles from './style.module.css';

const ChatList = ({ chats, onSelectChat }) => {
  // console.log("chat are",chats)
  return (
    <div className={styles.chatlisttt}>
      <div className={styles.chatlistitemc}>
        {chats.length > 0 ? (
          chats.map((chat) => (
            <ChatItem key={chat.id} chat={chat} onSelectChat={onSelectChat} />
          ))
        ) : (
          <p>No chats available</p> 
        )}
      </div>
    </div>
  );
};

export default ChatList;

