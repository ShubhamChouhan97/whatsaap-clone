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
      { sender: "Alice", text: "See you tomorrow!", time: "9:15 AM" },
      { sender: "Alice", text: "Hey, how are you?", time: "9:00 AM" },
      { sender: "You", text: "I'm good! What about you?", time: "9:05 AM" },
      { sender: "Alice", text: "See you tomorrow!", time: "9:15 AM" },
      { sender: "Alice", text: "Hey, how are you?", time: "9:00 AM" },
      { sender: "You", text: "I'm good! What about you?", time: "9:05 AM" },
      { sender: "Alice", text: "See you tomorrow!", time: "9:15 AM" },
      { sender: "Alice", text: "Hey, how are you?", time: "9:00 AM" },
      { sender: "You", text: "I'm good! What about you?", time: "9:05 AM" },
      { sender: "Alice", text: "See you tomorrow!", time: "9:15 AM" },
      { sender: "Alice", text: "Hey, how are you?", time: "9:00 AM" },
      { sender: "You", text: "I'm good! What about you?", time: "9:05 AM" },
      { sender: "Alice", text: "See you tomorrow!", time: "9:15 AM" },
      { sender: "Alice", text: "Hey, how are you?", time: "9:00 AM" },
      { sender: "You", text: "I'm good! What about you?", time: "9:05 AM" },
      { sender: "Alice", text: "See you tomorrow!", time: "9:15 AM" },
      { sender: "Alice", text: "Hey, how are you?", time: "9:00 AM" },
      { sender: "You", text: "I'm good! What about you?", time: "9:05 AM" },
      { sender: "Alice", text: "See you tomorrow!", time: "9:15 AM" },
      { sender: "Alice", text: "Hey, how are you?", time: "9:00 AM" },
      { sender: "You", text: "I'm good! What about you?", time: "9:05 AM" },
      { sender: "Alice", text: "See you tomorrow!", time: "9:15 AM" },
      { sender: "Alice", text: "Hey, how are you?", time: "9:00 AM" },
      { sender: "You", text: "I'm good! What about you?", time: "9:05 AM" },
      { sender: "Alice", text: "See you tomorrow!", time: "9:15 AM" },
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
    image: "https://lh3.googleusercontent.com/-M8QEca2-C1M/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclEE-cxGBPXiSIGd_-tv4R5KkP83A/photo.jpg",
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
    image: "data:image/png;base64,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",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC-ZuXK4xRqXUBsiawIvVOKtv_IlcVODx1vg&s",
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
    image: "https://lh3.googleusercontent.com/-M8QEca2-C1M/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclEE-cxGBPXiSIGd_-tv4R5KkP83A/photo.jpg",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7PTzPcqAXplVOcjTnV1ktNamn3oJKMSpbkw&s",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi43oV03AlfQeLbkWwHbsDLoybu5_sYcs2xg&s",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi43oV03AlfQeLbkWwHbsDLoybu5_sYcs2xg&s",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi43oV03AlfQeLbkWwHbsDLoybu5_sYcs2xg&s",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi43oV03AlfQeLbkWwHbsDLoybu5_sYcs2xg&s",
    messages: [
      { sender: "Liam", text: "I booked the movie tickets!", time: "5:30 PM" },
      { sender: "You", text: "Awesome! What time?", time: "5:40 PM" },
      { sender: "Liam", text: "Got the tickets!", time: "5:50 PM" }
    ]
  }
];


 const Slidebar = ({onChatSelect}) => {
   const [searchTerm, setSearchTerm] = useState('');

const handleSearchChange = (event) => {
  setSearchTerm(event.target.value);
};

const filteredChats = dummyChats.filter(chat =>
  chat.name.toLowerCase().includes(searchTerm.toLowerCase())
);

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
          <Button>All</Button>
          <Button>Unread</Button>
          <Button>Favourites</Button>
          <Button>Groups</Button>
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
}

export default Slidebar;

