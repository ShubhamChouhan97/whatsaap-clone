import React, { useState } from 'react';
import './App.css';
import Tolbar from './container/Tolbar';
import Slidebar from './container/Slidebar';
import Chatbox from './container/Chatbox';
import Defchatbox from './component/Defchatbox';
import Status from './container/Status'; 
import Channels from './container/Channels';

function App() {

  const [showChannel,setChannel] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const [showStatus, setShowStatus] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);

  const handlchannelClick = () => {
    setChannel(true);
    setShowSidebar(false);
    setShowStatus(false);
  };
  const handleStatusClick = () => {
    setChannel(false);
    setShowSidebar(false);
    setShowStatus(true);
  };

  const handleChatClick = () => {
    setChannel(false);
    setShowSidebar(true);
    setShowStatus(false);
  };

  const handleChatSelection = (chat) => {
    setSelectedChat(chat);  // Update selected chat
  };

  return (
    <div className='app'>
      <div className='app_body'>
        {/* <Tolbar /> */}
        {/* <Status/> */}
       {/* <Channels/> */}
      {/* <Slidebar onChatSelect={handleChatSelection} />  */}
        

{/* real check */}
        <Tolbar onStatusClick={handleStatusClick} onChatClick={handleChatClick} onchannelclick={handlchannelClick}/>
        {showSidebar && <Slidebar onChatSelect={handleChatSelection} />}
        {showStatus && <Status />}
        {showChannel&& <Channels/>}
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
