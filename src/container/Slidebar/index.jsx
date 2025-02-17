// import React, { useState } from 'react';
// import styles from './style.module.css';
// import addchat from '../../assets/message.png';
// import dot from '../../assets/dots.png';
// import searchimg from '../../assets/search.png';
// import wlogo from '../../assets/whatsapp.png';
// import Button from '../../component/Button';
// import Input from '../../component/Input';
// import Chatlist from '../../component/Chatlist';

// const dummyChats = [
//   { id: 1, name: "Alice Johnson", lastMessage: "See you tomorrow!", chattime: "9:15 AM", image: "https://i.pinimg.com/736x/69/a5/60/69a5602fb6377d1fef9bb45e8db9e415.jpg" },
//   { id: 2, name: "Robert Williams", lastMessage: "Can you send the report?", chattime: "2:45 PM", image: "https://i.pinimg.com/736x/69/a5/60/69a5602fb6377d1fef9bb45e8db9e415.jpg" },
//   { id: 3, name: "Emily Carter", lastMessage: "Let's meet at 5.", chattime: "3:30 PM", image: "https://i.pinimg.com/736x/69/a5/60/69a5602fb6377d1fef9bb45e8db9e415.jpg" },
//   { id: 4, name: "Michael Brown", lastMessage: "Great job on the project!", chattime: "10:05 AM", image: "https://i.pinimg.com/736x/69/a5/60/69a5602fb6377d1fef9bb45e8db9e415.jpg" },
//   { id: 5, name: "Sophia Davis", lastMessage: "Did you check my email?", chattime: "7:50 AM", image: "https://i.pinimg.com/736x/69/a5/60/69a5602fb6377d1fef9bb45e8db9e415.jpg" },
//   { id: 6, name: "Daniel Martinez", lastMessage: "I'll call you later.", chattime: "6:20 PM", image: "https://i.pinimg.com/736x/69/a5/60/69a5602fb6377d1fef9bb45e8db9e415.jpg" },
//   { id: 7, name: "Olivia Wilson", lastMessage: "Happy Birthday!", chattime: "11:45 AM", image: "https://i.pinimg.com/736x/69/a5/60/69a5602fb6377d1fef9bb45e8db9e415.jpg" },
//   { id: 8, name: "William Thomas", lastMessage: "See you at the party!", chattime: "8:30 PM", image: "https://i.pinimg.com/736x/69/a5/60/69a5602fb6377d1fef9bb45e8db9e415.jpg" },
//   { id: 9, name: "Mia Anderson", lastMessage: "Where are you now?", chattime: "5:10 PM", image: "https://i.pinimg.com/736x/69/a5/60/69a5602fb6377d1fef9bb45e8db9e415.jpg" },
//   { id: 10, name: "James Taylor", lastMessage: "Lunch at 1?", chattime: "12:50 PM", image: "https://i.pinimg.com/736x/69/a5/60/69a5602fb6377d1fef9bb45e8db9e415.jpg" },
//   { id: 11, name: "Charlotte Harris", lastMessage: "I'll be late today.", chattime: "9:30 AM", image: "https://i.pinimg.com/736x/69/a5/60/69a5602fb6377d1fef9bb45e8db9e415.jpg" },
//   { id: 12, name: "Benjamin Clark", lastMessage: "Finished the assignment.", chattime: "7:15 PM", image: "https://i.pinimg.com/736x/69/a5/60/69a5602fb6377d1fef9bb45e8db9e415.jpg" },
//   { id: 13, name: "Amelia Lewis", lastMessage: "Don't forget the meeting.", chattime: "4:40 PM", image: "https://i.pinimg.com/736x/69/a5/60/69a5602fb6377d1fef9bb45e8db9e415.jpg" },
//   { id: 14, name: "Henry Walker", lastMessage: "I'm on my way.", chattime: "10:25 AM", image: "https://i.pinimg.com/736x/69/a5/60/69a5602fb6377d1fef9bb45e8db9e415.jpg" },
//   { id: 15, name: "Ella Hall", lastMessage: "It was a great event!", chattime: "11:10 PM", image: "https://i.pinimg.com/736x/69/a5/60/69a5602fb6377d1fef9bb45e8db9e415.jpg" },
//   { id: 16, name: "Liam Scott", lastMessage: "Let's catch up soon.", chattime: "6:05 PM", image: "https://i.pinimg.com/736x/69/a5/60/69a5602fb6377d1fef9bb45e8db9e415.jpg" },
//   { id: 17, name: "Ava Green", lastMessage: "Send me the details.", chattime: "2:20 PM", image: "https://i.pinimg.com/736x/69/a5/60/69a5602fb6377d1fef9bb45e8db9e415.jpg" },
//   { id: 18, name: "Noah Adams", lastMessage: "How was your trip?", chattime: "1:30 PM", image: "https://i.pinimg.com/736x/69/a5/60/69a5602fb6377d1fef9bb45e8db9e415.jpg" },
//   { id: 19, name: "Isabella White", lastMessage: "Need help with something?", chattime: "3:55 PM", image: "https://i.pinimg.com/736x/69/a5/60/69a5602fb6377d1fef9bb45e8db9e415.jpg" },
//   { id: 20, name: "Jack Robinson", lastMessage: "Call me when you're free.", chattime: "5:45 PM", image: "https://i.pinimg.com/736x/69/a5/60/69a5602fb6377d1fef9bb45e8db9e415.jpg" }
// ];


// const Slidebar = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredChats, setFilteredChats] = useState([]);

//   const handleSearchChange = (event) => {
//     console.log("dsx");
//     const value = event.target.value;
//     setSearchTerm(value);
    
//     if (value.trim() === '') {
//       setFilteredChats([]);
//     } else {
//       setFilteredChats(
//         dummyChats.filter(chat => chat.name.toLowerCase().startsWith(value.toLowerCase()))
//       );
//     }
//   };

//   const handleSearchSubmit = (event) => {
//     event.preventDefault();
//     setSearchTerm('');
//   };

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
//         <form className={styles.inputbox} onSubmit={handleSearchSubmit}>
//           <div className={styles.inputsection}>
//             <img src={searchimg} alt="search" className={styles.searchicon} />
//             <Input
//               placeholder="Search"
//               value={searchTerm}
//               onChange={handleSearchChange}
//             />
//           </div>
//         </form>
        
//         <div className={styles.selectbtn}>
//           <Button>All</Button>
//           <Button>Unread</Button>
//           <Button>Favourites</Button>
//           <Button>Groups</Button>
//         </div>
//       </div>

//       <div className={styles.chatcontainer}>
//         <Chatlist chats={filteredChats.length > 0 ? filteredChats : dummyChats} />
//       </div>
      
//       <div className={styles.slidebardown}>
//         <img className={styles.wlogo} src={wlogo} alt="WhatsApp Logo" />
//         <h2>Get WhatsApp for Windows</h2>
//       </div>
//     </div>
//   );
// }

// export default Slidebar;

import React, { useState } from 'react';
import styles from './style.module.css';
import addchat from '../../assets/message.png';
import dot from '../../assets/dots.png';
import searchimg from '../../assets/search.png';
import wlogo from '../../assets/whatsapp.png';
import Button from '../../component/Button';
import Input from '../../component/Input';
import Chatlist from '../../component/Chatlist';


const dummyChats = [
  {
    id: 1,
    name: "Alice Johnson",
    lastMessage: "See you tomorrow!",
    chattime: "9:15 AM",
    image: "https://i.pinimg.com/736x/69/a5/60/69a5602fb6377d1fef9bb45e8db9e415.jpg",
    messages: [
      { sender: "Alice", text: "Hey, how are you?", time: "9:00 AM" },
      { sender: "You", text: "I'm good! What about you?", time: "9:05 AM" },
      { sender: "Alice", text: "See you tomorrow!", time: "9:15 AM" }
    ]
  },
  {
    id: 2,
    name: "Robert Williams",
    lastMessage: "Can you send the report?",
    chattime: "2:45 PM",
    image: "https://i.pinimg.com/736x/6c/ea/5b/6cea5b16df29a2e25fb8b60c97dbbc07.jpg",
    messages: [
      { sender: "Robert", text: "Hey, did you finish the report?", time: "2:30 PM" },
      { sender: "You", text: "Almost done, will send soon.", time: "2:35 PM" },
      { sender: "Robert", text: "Can you send the report?", time: "2:45 PM" }
    ]
  },
  {
    id: 3,
    name: "Emily Carter",
    lastMessage: "Let's meet at 5.",
    chattime: "3:30 PM",
    image: "https://i.pinimg.com/736x/ea/4b/35/ea4b35d13fc6a92a79f5b4a8fca61a3c.jpg",
    messages: [
      { sender: "Emily", text: "Hey, are you free this evening?", time: "3:00 PM" },
      { sender: "You", text: "Yeah, what’s up?", time: "3:15 PM" },
      { sender: "Emily", text: "Let's meet at 5.", time: "3:30 PM" }
    ]
  },
  {
    id: 4,
    name: "John Smith",
    lastMessage: "Game night at my place!",
    chattime: "7:10 PM",
    image: "https://i.pinimg.com/736x/15/12/8d/15128d9a92f1c3870b3e8d77a4a9ebaf.jpg",
    messages: [
      { sender: "John", text: "Yo! Wanna play FIFA?", time: "6:45 PM" },
      { sender: "You", text: "Hell yeah!", time: "6:50 PM" },
      { sender: "John", text: "Game night at my place!", time: "7:10 PM" }
    ]
  },
  {
    id: 5,
    name: "Sophia Miller",
    lastMessage: "Meeting postponed to Friday.",
    chattime: "11:20 AM",
    image: "https://i.pinimg.com/736x/bb/65/d2/bb65d281b2f8e67b1a4db5cc2bbf07c2.jpg",
    messages: [
      { sender: "Sophia", text: "Hey, any update on the project?", time: "11:00 AM" },
      { sender: "You", text: "Still working on it, should be done soon.", time: "11:10 AM" },
      { sender: "Sophia", text: "Meeting postponed to Friday.", time: "11:20 AM" }
    ]
  },
  {
    id: 6,
    name: "Michael Brown",
    lastMessage: "Movie night?",
    chattime: "8:00 PM",
    image: "https://i.pinimg.com/736x/71/d4/23/71d423db934f3f7a4a8e4ad451c769eb.jpg",
    messages: [
      { sender: "Michael", text: "Wanna watch a movie?", time: "7:45 PM" },
      { sender: "You", text: "Which one?", time: "7:50 PM" },
      { sender: "Michael", text: "Movie night?", time: "8:00 PM" }
    ]
  },
  {
    id: 7,
    name: "Olivia Wilson",
    lastMessage: "Let’s catch up soon!",
    chattime: "4:30 PM",
    image: "https://i.pinimg.com/736x/d6/77/3f/d6773f35e3b29c5b16d8a7a0d0b27d44.jpg",
    messages: [
      { sender: "Olivia", text: "Hey, it's been a while!", time: "4:00 PM" },
      { sender: "You", text: "Yeah, we should meet up.", time: "4:20 PM" },
      { sender: "Olivia", text: "Let’s catch up soon!", time: "4:30 PM" }
    ]
  },
  {
    id: 8,
    name: "Daniel Martinez",
    lastMessage: "Thanks for the help!",
    chattime: "1:15 PM",
    image: "https://i.pinimg.com/736x/52/89/8d/52898d487d3f2dba9647a1842d43db2a.jpg",
    messages: [
      { sender: "Daniel", text: "Hey, can you help with my assignment?", time: "12:45 PM" },
      { sender: "You", text: "Sure, what do you need?", time: "1:00 PM" },
      { sender: "Daniel", text: "Thanks for the help!", time: "1:15 PM" }
    ]
  },
  {
    id: 9,
    name: "Emma Davis",
    lastMessage: "Miss you!",
    chattime: "10:05 PM",
    image: "https://i.pinimg.com/736x/c5/2d/a5/c52da56056fd0c92ddcc9a1d47e79df6.jpg",
    messages: [
      { sender: "Emma", text: "Hey, long time no see!", time: "9:30 PM" },
      { sender: "You", text: "Yeah, how have you been?", time: "9:45 PM" },
      { sender: "Emma", text: "Miss you!", time: "10:05 PM" }
    ]
  },
  {
    id: 10,
    name: "Liam Harris",
    lastMessage: "Got the tickets!",
    chattime: "5:50 PM",
    image: "https://i.pinimg.com/736x/17/12/8d/17128d9a92f1c3870b3e8d77a4a9ebaf.jpg",
    messages: [
      { sender: "Liam", text: "I booked the movie tickets!", time: "5:30 PM" },
      { sender: "You", text: "Awesome! What time?", time: "5:40 PM" },
      { sender: "Liam", text: "Got the tickets!", time: "5:50 PM" }
    ]
  }
];


const Slidebar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    console.log("djnd");
    const value = event.target.value;
    setSearchTerm(value);
  };

  const filteredChats = searchTerm.trim()
    ? dummyChats.filter(chat => chat.name.toLowerCase().startsWith(searchTerm.toLowerCase().trim()))
    : dummyChats;

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
            <Input
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        
        <div className={styles.selectbtn}>
          <Button>All</Button>
          <Button>Unread</Button>
          <Button>Favourites</Button>
          <Button>Groups</Button>
        </div>
      </div>

      <div className={styles.chatcontainer}>
        <Chatlist chats={filteredChats} />
      </div>
      
      <div className={styles.slidebardown}>
        <img className={styles.wlogo} src={wlogo} alt="WhatsApp Logo" />
        <h2>Get WhatsApp for Windows</h2>
      </div>
    </div>
  );
}

export default Slidebar;


