// // import React from 'react'
// // import './App.css'

// // import Tolbar from './container/Tolbar'
// // import Slidebar from './container/Slidebar';

// // import Defchatbox from './component/Defchatbox'

// // function App() {
// //   return (
// //     <div className='app'>
// //     <div className='app_body'>
// //     {/* tolbar
// //       sidebar
// //       chatbar  */}
// // <Tolbar/>
// // <Slidebar/>
// // <Defchatbox/>
// // {/* <Chatbox/> */}
// //     </div>
// //     </div>
// //   )
// // }

// // export default App



// import React, { useState } from 'react';
// import './App.css'
// import Tolbar from './container/Tolbar'
// import Slidebar from './container/Slidebar'
// import Chatbox from './container/Chatbox'
// import Defchatbox from './component/Defchatbox'

// function App() {
//   const [selectedChat, setSelectedChat] = useState(null); // State to track the selected chat

//   // This function will be passed down to the Slidebar to handle chat selection
//   const handleChatSelection = (chatId) => {
//     setSelectedChat(chatId); // Update the selected chat when a chat is clicked
//   };

//   return (
//     <div className='app'>
//       <div className='app_body'>
//         <Tolbar />
//         <Slidebar onChatSelect={handleChatSelection} />
        
//         {/* Conditionally render either the default chatbox or the selected chatbox */}
//         {selectedChat ? (
//           <Chatbox chatId={selectedChat} />
//         ) : (
//           <Defchatbox />
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import './App.css';
import Tolbar from './container/Tolbar';
import Slidebar from './container/Slidebar';
import Chatbox from './container/Chatbox';
import Defchatbox from './component/Defchatbox';

function App() {
  const [selectedChat, setSelectedChat] = useState(null);

  const handleChatSelection = (chat) => {
    setSelectedChat(chat);  // Update selected chat
  };

  return (
    <div className='app'>
      <div className='app_body'>
        <Tolbar />
        <Slidebar onChatSelect={handleChatSelection} /> {/* Pass handler */}
        
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
