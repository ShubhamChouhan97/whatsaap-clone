// import React, { useState } from 'react';
// import styles from './style.module.css';
// import addchat from '../../assets/message.png';
// import dot from '../../assets/dots.png';
// import searchimg from '../../assets/search.png';
// import wlogo from '../../assets/whatsapp.png';
// import Button from '../../component/Button';
// import Input from '../../component/Input';
// import Chatlist from '../../component/Chatlist';
// import { fetchChat } from '../../API/fetchchat';

// // const dummyChats = [
// //   {
// //     id: 1,
// //     name: "Alice Johnson",
// //     lastMessage: "See you tomorrow!",
// //     chattime: "9:05 AM",
// //     image: "https://i.pinimg.com/736x/69/a5/60/69a5602fb6377d1fef9bb45e8db9e415.jpg",
// //     messages: [
// //       { sender: "Alice", text: "Hey, how are you?", time: "9:00 AM" },
// //       { sender: "You", text: "I'm good! What about you?", time: "9:05 AM" },
// //       { sender: "Alice", text: "See you tomorrow!", time: "9:15 AM" },
// //       { sender: "Alice", text: "Hey, how are you?", time: "9:00 AM" },
// //       { sender: "You", text: "I'm good! What about you?", time: "9:05 AM" },
// //       { sender: "Alice", text: "See you tomorrow!", time: "9:15 AM" },
// //       { sender: "Alice", text: "Hey, how are you?", time: "9:00 AM" },
// //       { sender: "You", text: "I'm good! What about you?", time: "9:05 AM" },
// //       { sender: "Alice", text: "See you tomorrow!", time: "9:15 AM" },
// //       { sender: "Alice", text: "Hey, how are you?", time: "9:00 AM" },
// //       { sender: "You", text: "I'm good! What about you?", time: "9:05 AM" },
// //       { sender: "Alice", text: "See you tomorrow!", time: "9:15 AM" },
// //       { sender: "Alice", text: "Hey, how are you?", time: "9:00 AM" },
// //       { sender: "You", text: "I'm good! What about you?", time: "9:05 AM" },
// //       { sender: "Alice", text: "See you tomorrow!", time: "9:15 AM" },
// //       { sender: "Alice", text: "Hey, how are you?", time: "9:00 AM" },
// //       { sender: "You", text: "I'm good! What about you?", time: "9:05 AM" },
// //       { sender: "Alice", text: "See you tomorrow!", time: "9:15 AM" },
// //       { sender: "Alice", text: "Hey, how are you?", time: "9:00 AM" },
// //       { sender: "You", text: "I'm good! What about you?", time: "9:05 AM" },
// //       { sender: "Alice", text: "See you tomorrow!", time: "9:15 AM" },
// //       { sender: "Alice", text: "Hey, how are you?", time: "9:00 AM" },
// //       { sender: "You", text: "I'm good! What about you?", time: "9:05 AM" },
// //       { sender: "Alice", text: "See you tomorrow!", time: "9:15 AM" },
// //       { sender: "Alice", text: "Hey, how are you?", time: "9:00 AM" },
// //       { sender: "You", text: "I'm good! What about you?", time: "9:05 AM" },
// //       { sender: "Alice", text: "See you tomorrow!", time: "9:15 AM" },
// //       { sender: "Alice", text: "Hey, how are you?", time: "9:00 AM" },
// //       { sender: "You", text: "I'm good! What about you?", time: "9:05 AM" },
// //       { sender: "Alice", text: "See you tomorrow!", time: "9:15 AM" },
// //       { sender: "You", text: "I'm good! What about you?", time: "9:05 AM" }
// //     ]
// //   },
// //   {
// //     id: 2,
// //     name: "Robert Williams",
// //     lastMessage: "Can you send the report?",
// //     chattime: "2:45 PM",
// //     image: "https://lh3.googleusercontent.com/-M8QEca2-C1M/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclEE-cxGBPXiSIGd_-tv4R5KkP83A/photo.jpg",
// //     messages: [
// //       { sender: "Robert", text: "Hey, did you finish the report?", time: "2:30 PM" },
// //       { sender: "You", text: "Almost done, will send soon.", time: "2:35 PM" },
// //       { sender: "Robert", text: "Can you send the report?", time: "2:45 PM" }
// //     ]
// //   },
// //   {
// //     id: 3,
// //     name: "Emily Carter",
// //     lastMessage: "Let's meet at 5.",
// //     chattime: "3:30 PM",
// //     image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJa33QMTNDs1OYbg2XUVKjHxtIX+/toC",
// //     messages: [
// //       { sender: "Emily", text: "Hey, are you free this evening?", time: "3:00 PM" },
// //       { sender: "You", text: "Yeah, what’s up?", time: "3:15 PM" },
// //       { sender: "Emily", text: "Let's meet at 5.", time: "3:30 PM" }
// //     ]
// //   },
// //   {
// //     id: 4,
// //     name: "John Smith",
// //     lastMessage: "Game night at my place!",
// //     chattime: "7:10 PM",
// //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC-ZuXK4xRqXUBsiawIvVOKtv_IlcVODx1vg&s",
// //     messages: [
// //       { sender: "John", text: "Yo! Wanna play FIFA?", time: "6:45 PM" },
// //       { sender: "You", text: "Hell yeah!", time: "6:50 PM" },
// //       { sender: "John", text: "Game night at my place!", time: "7:10 PM" }
// //     ]
// //   },
// //   {
// //     id: 5,
// //     name: "Sophia Miller",
// //     lastMessage: "Meeting postponed to Friday.",
// //     chattime: "11:20 AM",
// //     image: "https://lh3.googleusercontent.com/-M8QEca2-C1M/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclEE-cxGBPXiSIGd_-tv4R5KkP83A/photo.jpg",
// //     messages: [
// //       { sender: "Sophia", text: "Hey, any update on the project?", time: "11:00 AM" },
// //       { sender: "You", text: "Still working on it, should be done soon.", time: "11:10 AM" },
// //       { sender: "Sophia", text: "Meeting postponed to Friday.", time: "11:20 AM" }
// //     ]
// //   }
// // ];

// const dummyChats = [];

// // get email from local storage
// let email = localStorage.getItem("email");
// console.log("email is  s ad sd ",email);

// const Chats = fetchChat(email);


//  const Slidebar = ({onChatSelect}) => {
//    const [searchTerm, setSearchTerm] = useState('');
// const [activeButton, setActiveButton] = useState('All'); // Initialize with 'All' as active

// const handleSearchChange = (event) => {
//   setSearchTerm(event.target.value);
// };

// const filteredChats = dummyChats.filter(chat =>
//   chat.name.toLowerCase().includes(searchTerm.toLowerCase())
// );

// // const filteredChat = Chats.filter(chat =>
// //   chat.name.toLowerCase().includes(searchTerm.toLowerCase())
// // );
// const handleButtonClick = (buttonName) => {
//   setActiveButton(buttonName);
// };

//   return (
//     <div className={styles.slidebar}>
//       <div className={styles.head}>
//         <div className={styles.chats}>
//           <h2>Chats</h2>
//         </div>
//         <div className={styles.fun}>
//           <img src={addchat} alt="Add Chat" className={styles.icon} />
//           <img src={dot} alt="Options" className={styles.icon} />
//         </div>
//       </div>
      
//       <div className={styles.center}>
//         <div className={styles.inputbox}>
//           <div className={styles.inputsection}>
//             <img src={searchimg} alt="search" className={styles.searchicon} />
//             <Input className={styles.inputt}
//               placeholder="Search"
//               value={searchTerm}
//               onChange={handleSearchChange}
//             />
//           </div>
//         </div>
        
// <div className={styles.selectbtn}>
// <Button
//     onClick={() => handleButtonClick('All')}
//     active={activeButton === 'All'}
// >
//     All
// </Button>
// <Button
//     onClick={() => handleButtonClick('Unread')}
//     active={activeButton === 'Unread'}
// >
//     Unread
// </Button>
// <Button
//     onClick={() => handleButtonClick('Favourites')}
//     active={activeButton === 'Favourites'}
// >
//     Favourites
// </Button>
// <Button
//     onClick={() => handleButtonClick('Groups')}
//     active={activeButton === 'Groups'}
// >
//     Groups
// </Button>
// </div>
//       </div>

//       <div className={styles.chatcontainer}>
//          <Chatlist chats={filteredChats} onSelectChat={onChatSelect} />
//       </div>
      
//       <div className={styles.slidebardown}>
//         <img className={styles.wlogo} src={wlogo} alt="WhatsApp Logo" />
//         <h2>Get WhatsApp for Windows</h2>
//       </div>
//     </div>
//   );
// }

// export default Slidebar;

//version 2
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

const Slidebar = ({ onChatSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeButton, setActiveButton] = useState('All'); // Initialize with 'All' as active
  const [chats, setChats] = useState([]);

  // Get email from local storage
  const email = localStorage.getItem("email");
  // console.log("Email is:", email);

  useEffect(() => {
    const getChats = async () => {
      if (email) {
        try {
          const fetchedChats = await fetchChat();
          console.log("Fetched chats:", fetchedChats);
          setChats(fetchedChats);
        } catch (error) {
          console.error("Error fetching chats:", error);
        }
      }
    };

    getChats();
  }, [email]); // Fetch chats when email changes

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
