import React, { useState } from 'react';
import './App.css';
import Tolbar from './container/Tolbar';
import Slidebar from './container/Slidebar';
import Chatbox from './container/Chatbox';
import Defchatbox from './component/Defchatbox';
import Status from './container/Status'; 
import Channels from './container/Channels';
import Settingcon from './container/Settingcon';
import Profile from './container/Profile';

import Community from './container/Community';

function App() {
  const metaurl = "https://www.meta.ai/";

  const [showProfile,setProile] = useState(false);
  const [showChannel,setChannel] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const [showStatus, setShowStatus] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);
  const [showCommunity, SetCommunity] = useState(false);
  const [showSetting,setSetting] = useState(false);


  const handlemetaai = () => {
    window.open(metaurl, "", "");
  };

  const handelProfile =()=>{
    setProile(true);
    setSetting(false);
  setShowSidebar(false);
  setShowStatus(false);
  setChannel(false);
  SetCommunity(false);
  setSelectedChat(null);
  }

const handelsettingClick = ()=>{
  setProile(false);
  setSetting(true);
  setShowSidebar(false);
  setShowStatus(false);
  setChannel(false);
  SetCommunity(false);
  setSelectedChat(null);
}
const handlecommunityClick =()=>{
  setProile(false);
  setSetting(false);
  SetCommunity(true);
  setChannel(false);
    setShowSidebar(false);
    setShowStatus(false);
    setSelectedChat(null);
}

  const handlchannelClick = () => {
    setProile(false);
    setSetting(false);
    setChannel(true);
    SetCommunity(false);
    setShowSidebar(false);
    setShowStatus(false);
    setSelectedChat(null);
  };
  const handleStatusClick = () => {
    setProile(false);
    setSetting(false);
    SetCommunity(false);
    setChannel(false);
    setShowSidebar(false);
    setShowStatus(true);
    setSelectedChat(null);
  };

  const handleChatClick = () => {
    setProile(false);
    setSetting(false);
    setChannel(false);
    SetCommunity(false);
    setShowSidebar(true);
    setShowStatus(false);
    setSelectedChat(null);
  };

  const handleChatSelection = (chat) => {
    setSelectedChat(chat);  // Update selected chat
  };

  return (
    <div className='app'>
      <div className='app_body'>
         {/* <Tolbar />
       <Profile/> */}
    

{/* real check */}
        <Tolbar onStatusClick={handleStatusClick} onChatClick={handleChatClick} onchannelclick={handlchannelClick} oncommunityclick={handlecommunityClick} onmetaclick={handlemetaai} onsettingclick={handelsettingClick}  onProfileClick={handelProfile} />
        {showSidebar && <Slidebar onChatSelect={handleChatSelection} />}
        {showStatus && <Status />}
        {showChannel&& <Channels/>}
        {showCommunity && <Community />}
        {showSetting&& <Settingcon/>}
        { showProfile &&<Profile/>}
        {selectedChat ? (
          <Chatbox selectedChat={selectedChat} /> // Pass selected chat
        ) : (
          <Defchatbox />
        )}
      </div>
    </div>
  );
}

export default App;
