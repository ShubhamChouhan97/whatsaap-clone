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
import { Idget } from "./API/idget"; 

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
const [ reciverId, setreciverId] =useState(null);
  const [userId, setUserId] = useState(null);
   // Fetch current user ID
    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await Idget();
          setUserId(result);
        } catch (err) {
          console.error("Error fetching user ID:", err);
        }
      };
  
      fetchData();
    }, []);
    // console.log(userId);
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
    // console.log("hhhhhhhhhhh",chat);
  
    // console.log("person id ",person)
    setSelectedChat(chat);
   
    let person = chat._id;
    setreciverId(person);
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
        {selectedChat ? <Chatbox reciverId={reciverId} selectedChat={selectedChat} userId={userId}/> : <Defchatbox />}
      </div>
    </div>
  );
}

export default App;
