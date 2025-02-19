import React, { useState } from 'react';
import './App.css';
import Tolbar from './container/Tolbar';
import Slidebar from './container/Slidebar';
import Chatbox from './container/Chatbox';
import Defchatbox from './component/Defchatbox';
import Status from './container/Status'; 
import Channels from './container/Channels';
import Settingcon from './container/Settingcon';


import Community from './container/Community';

function App() {
  const metaurl = "https://www.meta.ai/"
  const [showChannel,setChannel] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const [showStatus, setShowStatus] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);
  const [showCommunity, SetCommunity] = useState(false);
  const [showSetting,setSetting] = useState(false);


  const handlemetaai = () => {
    window.open(metaurl, "", "");
  };


const handelsettingClick = ()=>{
  setSetting(true);
  setShowSidebar(false);
  setShowStatus(false);
  setChannel(false);
  SetCommunity(false);
  setSelectedChat(null);
}
const handlecommunityClick =()=>{
  setSetting(false);
  SetCommunity(true);
  setChannel(false);
    setShowSidebar(false);
    setShowStatus(false);
    setSelectedChat(null);
}

  const handlchannelClick = () => {
    setSetting(false);
    setChannel(true);
    SetCommunity(false);
    setShowSidebar(false);
    setShowStatus(false);
    setSelectedChat(null);
  };
  const handleStatusClick = () => {
    setSetting(false);
    SetCommunity(false);
    setChannel(false);
    setShowSidebar(false);
    setShowStatus(true);
    setSelectedChat(null);
  };

  const handleChatClick = () => {
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
       <Settingcon/> */}
    

{/* real check */}
        <Tolbar onStatusClick={handleStatusClick} onChatClick={handleChatClick} onchannelclick={handlchannelClick} oncommunityclick={handlecommunityClick} onmetaclick={handlemetaai} onsettingclick={handelsettingClick} />
        {showSidebar && <Slidebar onChatSelect={handleChatSelection} />}
        {showStatus && <Status />}
        {showChannel&& <Channels/>}
        {showCommunity && <Community />}
        {showSetting&& <Settingcon/>}
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
