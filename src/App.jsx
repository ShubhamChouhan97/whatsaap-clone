import React, { useState } from 'react';
import './App.css';
import Tolbar from './container/Tolbar';
import Slidebar from './container/Slidebar';
import Chatbox from './container/Chatbox';
import Defchatbox from './component/Defchatbox';
import Status from './container/Status'; 
import Channels from './container/Channels';

import Community from './container/Community';

function App() {
  const metaurl = "https://www.meta.ai/"
  const [showChannel,setChannel] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const [showStatus, setShowStatus] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);
  const [showCommunity, SetCommunity] = useState(false);

  const handlemetaai = () => {
    window.open(metaurl, "", "");
  };

const handlecommunityClick =()=>{
  SetCommunity(true);
  setChannel(false);
    setShowSidebar(false);
    setShowStatus(false);
}

  const handlchannelClick = () => {
    setChannel(true);
    SetCommunity(false);
    setShowSidebar(false);
    setShowStatus(false);
  };
  const handleStatusClick = () => {
    SetCommunity(false);
    setChannel(false);
    setShowSidebar(false);
    setShowStatus(true);
  };

  const handleChatClick = () => {
    setChannel(false);
    SetCommunity(false);
    setShowSidebar(true);
    setShowStatus(false);
  };

  const handleChatSelection = (chat) => {
    setSelectedChat(chat);  // Update selected chat
  };

  return (
    <div className='app'>
      <div className='app_body'>
        {/* <Tolbar />
        <Community/> */}
        {/* <Status/> */}
       {/* <Channels/> */}
      {/* <Slidebar onChatSelect={handleChatSelection} />  */}
        

{/* real check */}
        <Tolbar onStatusClick={handleStatusClick} onChatClick={handleChatClick} onchannelclick={handlchannelClick} oncommunityclick={handlecommunityClick} onmetaclick={handlemetaai}/>
        {showSidebar && <Slidebar onChatSelect={handleChatSelection} />}
        {showStatus && <Status />}
        {showChannel&& <Channels/>}
        {showCommunity && <Community />}
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
