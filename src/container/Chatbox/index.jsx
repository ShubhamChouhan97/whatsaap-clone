import React from 'react';
import styles from './style.module.css';
import Chatcontainer from '../../component/Chatcontainer';

function Chatbox({ selectedChat }) {
    console.log("hello",selectedChat)
  return (
    <div className={styles.chatboxmaindiv}>
      <Chatcontainer selectedChat={selectedChat} />
    </div>
  );
}

export default Chatbox;
