import React, { useState, useEffect } from 'react';
import styles from './style.module.css';
import addchat from '../../assets/message.png';
import dot from '../../assets/dots.png';
import searchimg from '../../assets/search.png';
import wlogo from '../../assets/whatsapp.png';
import Button from '../../component/Button';
import Input from '../../component/Input';
import Chatlist from '../../component/Chatlist';
import { fetchChat } from '../../API/fetchchat';
import { io } from "socket.io-client";

const socket = io("http://localhost:3000"); // Ensure this is defined


const Slidebar = ({ onChatSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeButton, setActiveButton] = useState('All'); // Initialize with 'All' as active
  const [chats, setChats] = useState([]);

  // Get email from local storage
  const email = localStorage.getItem("email");
  // console.log("Email is:", email);

  // useEffect(() => {
  //   const getChats = async () => {
  //     if (email) {
  //       try {
  //         const fetchedChats = await fetchChat();
  //         //console.log("Fetched chats:", fetchedChats);
  //         setChats(fetchedChats);
  //       } catch (error) {
  //         console.error("Error fetching chats:", error);
  //       }
  //     }
  //   };

  //   getChats();
  // }, [email]); // Fetch chats when email changes

  const getChats = async () => {
    if (email) {
      try {
        const fetchedChats = await fetchChat();
        setChats(fetchedChats);
      } catch (error) {
        console.error("Error fetching chats:", error);
      }
    }
  };

  useEffect(() => {
    getChats(); // Initial fetch when the component mounts

    // Listen for real-time chat updates from the backend
    socket.on("chat_updated", () => {
      console.log("Chat updated, fetching new chats...");
      getChats(); // Fetch new chats when an update occurs
    });

    return () => {
      socket.off("chat_updated"); // Clean up event listener on unmount
    };
  }, [email]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className={styles.slidebar}>
      <div className={styles.head}>
        <div className={styles.chats}>
          <h2>Chats</h2>
        </div>
        <div className={styles.fun}>
          <img src={addchat} alt="Add Chat" className={styles.icon} />
          <img src={dot} alt="Options" className={styles.icon} />
        </div>
      </div>
      
      <div className={styles.center}>
        <div className={styles.inputbox}>
          <div className={styles.inputsection}>
            <img src={searchimg} alt="search" className={styles.searchicon} />
            <Input className={styles.inputt}
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        
        <div className={styles.selectbtn}>
          <Button onClick={() => handleButtonClick('All')} active={activeButton === 'All'}>All</Button>
          <Button onClick={() => handleButtonClick('Unread')} active={activeButton === 'Unread'}>Unread</Button>
          <Button onClick={() => handleButtonClick('Favourites')} active={activeButton === 'Favourites'}>Favourites</Button>
          <Button onClick={() => handleButtonClick('Groups')} active={activeButton === 'Groups'}>Groups</Button>
        </div>
      </div>

      <div className={styles.chatcontainer}>
        <Chatlist chats={filteredChats} onSelectChat={onChatSelect} />
      </div>
      
      <div className={styles.slidebardown}>
        <img className={styles.wlogo} src={wlogo} alt="WhatsApp Logo" />
        <h2>Get WhatsApp for Windows</h2>
      </div>
    </div>
  );
};

export default Slidebar;
