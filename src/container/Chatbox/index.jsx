// import React from 'react';
// import styles from './style.module.css';
// import Chatcontainer from '../../component/Chatcontainer';
// import { Chatofuser } from '../../API/chatofuser';

// function Chatbox({ selectedChat }) {
  
//     console.log("hello",selectedChat)
//   return (
//     <div className={styles.chatboxmaindiv}>
//       <Chatcontainer selectedChat={selectedChat} />
//     </div>
//   );
// }

// export default Chatbox;
import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import Chatcontainer from '../../component/Chatcontainer';
import { Chatofuser } from '../../API/chatofuser';

function Chatbox({ reciverId,selectedChat, userId }) {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selectedChat || !userId) return;

    const fetchChat = async () => {
      setLoading(true);
      try {
        const response = await Chatofuser(userId, reciverId);
        // console.log("response server",response);    
        setDetails(response);
      } catch (error) {
        console.error("Error fetching chat:", error);
        setDetails([]); // Reset chat in case of error
      } finally {
        setLoading(false);
      }
    };

    fetchChat();
  }, [reciverId, userId]);
  return (
    <div className={styles.chatboxmaindiv}>
      {loading ? <p>Loading...</p> : <Chatcontainer reciverId={reciverId} selectedChat={selectedChat} details={details} />}
    </div>
  );
}

export default Chatbox;

