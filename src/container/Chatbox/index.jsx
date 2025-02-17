import React from 'react'
import styles from './style.module.css';
import defimg from '../../assets/default.png';
// import Defchatbox from '../Defchatbox';
// import Chatcontainer from '../Chatcontainer';
import Defchatbox from '../../component/Defchatbox';
import Chatcontainer from '../../component/Chatcontainer';


function Chatbox() {
  return (
    <div className={ styles.chatboxmaindiv }>
      {/* <Defchatbox/> */}
      <Chatcontainer/>
    </div>
  )
}

export default Chatbox
