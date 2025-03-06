// import React, { useState } from 'react';
// import './App.css';
// import Tolbar from './container/Tolbar';
// import Slidebar from './container/Slidebar';
// import Chatbox from './container/Chatbox';
// import Defchatbox from './component/Defchatbox';
// import Status from './container/Status'; 
// import Channels from './container/Channels';
// import Settingcon from './container/Settingcon';
// import Profile from './container/Profile';
// import Login from './container/Login';

// import Community from './container/Community';

// function App() {
//   const metaurl = "https://www.meta.ai/";

//   const [showProfile,setProile] = useState(false);
//   const [showChannel,setChannel] = useState(false);
//   const [showSidebar, setShowSidebar] = useState(true);
//   const [showStatus, setShowStatus] = useState(false);
//   const [selectedChat, setSelectedChat] = useState(null);
//   const [showCommunity, SetCommunity] = useState(false);
//   const [showSetting,setSetting] = useState(false);


//   const handlemetaai = () => {
//     window.open(metaurl, "", "");
//   };

//   const handelProfile =()=>{
//     setProile(true);
//     setSetting(false);
//   setShowSidebar(false);
//   setShowStatus(false);
//   setChannel(false);
//   SetCommunity(false);
//   setSelectedChat(null);
//   }

// const handelsettingClick = ()=>{
//   setProile(false);
//   setSetting(true);
//   setShowSidebar(false);
//   setShowStatus(false);
//   setChannel(false);
//   SetCommunity(false);
//   setSelectedChat(null);
// }
// const handlecommunityClick =()=>{
//   setProile(false);
//   setSetting(false);
//   SetCommunity(true);
//   setChannel(false);
//     setShowSidebar(false);
//     setShowStatus(false);
//     setSelectedChat(null);
// }

//   const handlchannelClick = () => {
//     setProile(false);
//     setSetting(false);
//     setChannel(true);
//     SetCommunity(false);
//     setShowSidebar(false);
//     setShowStatus(false);
//     setSelectedChat(null);
//   };
//   const handleStatusClick = () => {
//     setProile(false);
//     setSetting(false);
//     SetCommunity(false);
//     setChannel(false);
//     setShowSidebar(false);
//     setShowStatus(true);
//     setSelectedChat(null);
//   };

//   const handleChatClick = () => {
//     setProile(false);
//     setSetting(false);
//     setChannel(false);
//     SetCommunity(false);
//     setShowSidebar(true);
//     setShowStatus(false);
//     setSelectedChat(null);
//   };

//   const handleChatSelection = (chat) => {
//     setSelectedChat(chat);  // Update selected chat
//   };

//   return (
//     <div className='app'>
//       <div className='app_body'>
       
//     <Login/>


// {/* real check */}
//         <Tolbar onStatusClick={handleStatusClick} onChatClick={handleChatClick} onchannelclick={handlchannelClick} oncommunityclick={handlecommunityClick} onmetaclick={handlemetaai} onsettingclick={handelsettingClick}  onProfileClick={handelProfile} />
//         {showSidebar && <Slidebar onChatSelect={handleChatSelection} />}
//         {showStatus && <Status />}
//         {showChannel&& <Channels/>}
//         {showCommunity && <Community />}
//         {showSetting&& <Settingcon/>}
//         { showProfile &&<Profile/>}
//         {selectedChat ? (
//           <Chatbox selectedChat={selectedChat} /> // Pass selected chat
//         ) : (
//           <Defchatbox />
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

// version 2
// import React, { useState, useEffect } from "react";
// import "./App.css";
// import Tolbar from "./container/Tolbar";
// import Slidebar from "./container/Slidebar";
// import Chatbox from "./container/Chatbox";
// import Defchatbox from "./component/Defchatbox";
// import Status from "./container/Status";
// import Channels from "./container/Channels";
// import Settingcon from "./container/Settingcon";
// import Profile from "./container/Profile";
// import Login from "./container/Login";
// import Community from "./container/Community";

// function App() {
//   const metaurl = "https://www.meta.ai/";

//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showProfile, setProfile] = useState(false);
//   const [showChannel, setChannel] = useState(false);
//   const [showSidebar, setShowSidebar] = useState(true);
//   const [showStatus, setShowStatus] = useState(false);
//   const [selectedChat, setSelectedChat] = useState(null);
//   const [showCommunity, setCommunity] = useState(false);
//   const [showSetting, setSetting] = useState(false);

//   // 🔹 Check for token on component mount
//   useEffect(() => {
//     const token = localStorage.getItem("token"); // Retrieve token
//     if (token) {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const handleLogin = (token) => {
//     localStorage.setItem("token", token); // Save token
//     setIsLoggedIn(true); // Update state to render the main app
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token"); // Remove token
//     setIsLoggedIn(false); // Update state to show Login page
//   };

//   const handleMetaAI = () => {
//     window.open(metaurl, "_blank");
//   };

//   const handleProfile = () => {
//     setProfile(true);
//     setSetting(false);
//     setShowSidebar(false);
//     setShowStatus(false);
//     setChannel(false);
//     setCommunity(false);
//     setSelectedChat(null);
//   };

//   const handleSettingClick = () => {
//     setProfile(false);
//     setSetting(true);
//     setShowSidebar(false);
//     setShowStatus(false);
//     setChannel(false);
//     setCommunity(false);
//     setSelectedChat(null);
//   };

//   const handleCommunityClick = () => {
//     setProfile(false);
//     setSetting(false);
//     setCommunity(true);
//     setChannel(false);
//     setShowSidebar(false);
//     setShowStatus(false);
//     setSelectedChat(null);
//   };

//   const handleChannelClick = () => {
//     setProfile(false);
//     setSetting(false);
//     setChannel(true);
//     setCommunity(false);
//     setShowSidebar(false);
//     setShowStatus(false);
//     setSelectedChat(null);
//   };

//   const handleStatusClick = () => {
//     setProfile(false);
//     setSetting(false);
//     setCommunity(false);
//     setChannel(false);
//     setShowSidebar(false);
//     setShowStatus(true);
//     setSelectedChat(null);
//   };

//   const handleChatClick = () => {
//     setProfile(false);
//     setSetting(false);
//     setChannel(false);
//     setCommunity(false);
//     setShowSidebar(true);
//     setShowStatus(false);
//     setSelectedChat(null);
//   };

//   const handleChatSelection = (chat) => {
//     setSelectedChat(chat);
//   };

//   // 🔹 If user is not logged in, show the login page and pass handleLogin
//   if (!isLoggedIn) {
//     return <Login onLogin={handleLogin} />;
//   }

//   return (
//     <div className="app">
//       <div className="app_body">
//         <Tolbar
//           onStatusClick={handleStatusClick}
//           onChatClick={handleChatClick}
//           onchannelclick={handleChannelClick}
//           oncommunityclick={handleCommunityClick}
//           onmetaclick={handleMetaAI}
//           onsettingclick={handleSettingClick}
//           onProfileClick={handleProfile}
//           onLogout={handleLogout} // Pass logout function
//         />
//         {showSidebar && <Slidebar onChatSelect={handleChatSelection} />}
//         {showStatus && <Status />}
//         {showChannel && <Channels />}
//         {showCommunity && <Community />}
//         {showSetting && <Settingcon />}
//         {showProfile && <Profile />}
//         {selectedChat ? <Chatbox selectedChat={selectedChat} /> : <Defchatbox />}
//       </div>
//     </div>
//   );
// }

// export default App;

// version 3
// import React, { useState, useEffect } from "react";
// import "./App.css";
// import Tolbar from "./container/Tolbar";
// import Slidebar from "./container/Slidebar";
// import Chatbox from "./container/Chatbox";
// import Defchatbox from "./component/Defchatbox";
// import Status from "./container/Status";
// import Channels from "./container/Channels";
// import Settingcon from "./container/Settingcon";
// import Profile from "./container/Profile";
// import Login from "./container/Login";
// import Community from "./container/Community";

// function App() {
//   const metaurl = "https://www.meta.ai/";
//   const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
//   const [showProfile, setProfile] = useState(false);
//   const [showChannel, setChannel] = useState(false);
//   const [showSidebar, setShowSidebar] = useState(true);
//   const [showStatus, setShowStatus] = useState(false);
//   const [selectedChat, setSelectedChat] = useState(null);
//   const [showCommunity, setCommunity] = useState(false);
//   const [showSetting, setSetting] = useState(false);

//   // 🔹 Check for token changes dynamically
//   useEffect(() => {
//     const handleStorageChange = () => {
//       const token = localStorage.getItem("token");
//       setIsLoggedIn(!!token);
//     };

//     window.addEventListener("storage", handleStorageChange);
//     return () => window.removeEventListener("storage", handleStorageChange);
//   }, []);

//   const handleLogin = (token) => {
//     localStorage.setItem("token", token); // Save token
//     setIsLoggedIn(true); // Update state
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token"); // Remove token
//     setIsLoggedIn(false); // Force re-render
//   };

//   const handleMetaAI = () => window.open(metaurl, "_blank");

//   const handleProfile = () => {
//     setProfile(true);
//     setSetting(false);
//     setShowSidebar(false);
//     setShowStatus(false);
//     setChannel(false);
//     setCommunity(false);
//     setSelectedChat(null);
//   };

//   const handleSettingClick = () => {
//     setProfile(false);
//     setSetting(true);
//     setShowSidebar(false);
//     setShowStatus(false);
//     setChannel(false);
//     setCommunity(false);
//     setSelectedChat(null);
//   };

//   const handleCommunityClick = () => {
//     setProfile(false);
//     setSetting(false);
//     setCommunity(true);
//     setChannel(false);
//     setShowSidebar(false);
//     setShowStatus(false);
//     setSelectedChat(null);
//   };

//   const handleChannelClick = () => {
//     setProfile(false);
//     setSetting(false);
//     setChannel(true);
//     setCommunity(false);
//     setShowSidebar(false);
//     setShowStatus(false);
//     setSelectedChat(null);
//   };

//   const handleStatusClick = () => {
//     setProfile(false);
//     setSetting(false);
//     setCommunity(false);
//     setChannel(false);
//     setShowSidebar(false);
//     setShowStatus(true);
//     setSelectedChat(null);
//   };

//   const handleChatClick = () => {
//     setProfile(false);
//     setSetting(false);
//     setChannel(false);
//     setCommunity(false);
//     setShowSidebar(true);
//     setShowStatus(false);
//     setSelectedChat(null);
//   };

//   const handleChatSelection = (chat) => {
//     setSelectedChat(chat);
//   };

//   // 🔹 If user is not logged in, show login page
//   if (!isLoggedIn) {
//     return <Login onLogin={handleLogin} />;
//   }

//   return (
//     <div className="app">
//       <div className="app_body">
//         <Tolbar
//           onStatusClick={handleStatusClick}
//           onChatClick={handleChatClick}
//           onchannelclick={handleChannelClick}
//           oncommunityclick={handleCommunityClick}
//           onmetaclick={handleMetaAI}
//           onsettingclick={handleSettingClick}
//           onProfileClick={handleProfile}
//           onLogout={handleLogout}
//         />
//         {showSidebar && <Slidebar onChatSelect={handleChatSelection} />}
//         {showStatus && <Status />}
//         {showChannel && <Channels />}
//         {showCommunity && <Community />}
//         {showSetting && <Settingcon />}
//         {showProfile && <Profile />}
//         {selectedChat ? <Chatbox selectedChat={selectedChat} /> : <Defchatbox />}
//       </div>
//     </div>
//   );
// }

// export default App;
//
//version 4

import React, { useState, useEffect } from "react";
import "./App.css";
import Tolbar from "./container/Tolbar";
import Slidebar from "./container/Slidebar";
import Chatbox from "./container/Chatbox";
import Defchatbox from "./component/Defchatbox";
import Status from "./container/Status";
import Channels from "./container/Channels";
import Settingcon from "./container/Settingcon";
import Profile from "./container/Profile";
import Login from "./container/Login";
import Community from "./container/Community";

function App() {
  const metaurl = "https://www.meta.ai/";
  const [isLoggedIn, setIsLoggedIn] = useState(checkAuth());
  const [showProfile, setProfile] = useState(false);
  const [showChannel, setChannel] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const [showStatus, setShowStatus] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);
  const [showCommunity, setCommunity] = useState(false);
  const [showSetting, setSetting] = useState(false);

  // Function to check authentication from localStorage and cookies
  function checkAuth() {
    const token = localStorage.getItem("token");
    const cookieToken = document.cookie.split("; ").find(row => row.startsWith("auth_token="));
    return !!token && !!cookieToken;
  }

  useEffect(() => {
    const handleStorageChange = () => {
      if (!checkAuth()) {
        setIsLoggedIn(false);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    // Periodically check authentication to detect cookie changes
    const cookieInterval = setInterval(() => {
      if (!checkAuth()) {
        setIsLoggedIn(false);
      }
    }, 3000); // Check every 3 seconds

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      clearInterval(cookieInterval);
    };
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem("token", token); // Save token
    document.cookie = "auth_token=" + token + "; path=/; Secure"; // Set authentication cookie
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from storage

    // Delete authentication cookie
    document.cookie =
      "auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; Secure";

    setIsLoggedIn(false); // Force re-render
  };

  const handleMetaAI = () => window.open(metaurl, "_blank");

  const handleProfile = () => {
    setProfile(true);
    setSetting(false);
    setShowSidebar(false);
    setShowStatus(false);
    setChannel(false);
    setCommunity(false);
    setSelectedChat(null);
  };

  const handleSettingClick = () => {
    setProfile(false);
    setSetting(true);
    setShowSidebar(false);
    setShowStatus(false);
    setChannel(false);
    setCommunity(false);
    setSelectedChat(null);
  };

  const handleCommunityClick = () => {
    setProfile(false);
    setSetting(false);
    setCommunity(true);
    setChannel(false);
    setShowSidebar(false);
    setShowStatus(false);
    setSelectedChat(null);
  };

  const handleChannelClick = () => {
    setProfile(false);
    setSetting(false);
    setChannel(true);
    setCommunity(false);
    setShowSidebar(false);
    setShowStatus(false);
    setSelectedChat(null);
  };

  const handleStatusClick = () => {
    setProfile(false);
    setSetting(false);
    setCommunity(false);
    setChannel(false);
    setShowSidebar(false);
    setShowStatus(true);
    setSelectedChat(null);
  };

  const handleChatClick = () => {
    setProfile(false);
    setSetting(false);
    setChannel(false);
    setCommunity(false);
    setShowSidebar(true);
    setShowStatus(false);
    setSelectedChat(null);
  };

  const handleChatSelection = (chat) => {
    setSelectedChat(chat);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="app">
      <div className="app_body">
        <Tolbar
          onStatusClick={handleStatusClick}
          onChatClick={handleChatClick}
          onchannelclick={handleChannelClick}
          oncommunityclick={handleCommunityClick}
          onmetaclick={handleMetaAI}
          onsettingclick={handleSettingClick}
          onProfileClick={handleProfile}
          onLogout={handleLogout}
        />
        {showSidebar && <Slidebar onChatSelect={handleChatSelection} />}
        {showStatus && <Status />}
        {showChannel && <Channels />}
        {showCommunity && <Community />}
        {showSetting && <Settingcon />}
        {showProfile && <Profile />}
        {selectedChat ? <Chatbox selectedChat={selectedChat}/> : <Defchatbox />}
      </div>
    </div>
  );
}

export default App;
