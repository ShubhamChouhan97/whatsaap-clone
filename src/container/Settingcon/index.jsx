import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { logoutUser } from '../../API/logout';
import { userdetail } from '../../API/userdetails';
import ClipLoader from "react-spinners/ClipLoader";

function Settingcon() {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({
    dp: 'null',
    userName: 'User',
    about: 'No bio available'
  });

  // Fetch user details
  useEffect(() => {
    async function fetchUserDetails() {
      try {
        const details = await userdetail();
        console.log("ssssssss",details.data);
        setUserData(details.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchUserDetails();
  }, []);

  return (
    <div className={styles.main}>
{loading ? (
        <div className={styles.loadingContainer}>
          <ClipLoader color="blue" size={50} />
        </div>
      ) : (<div className={styles.seetingdiv}>
        <div className={styles.top}>
          <p className={styles.p1}>Settings</p>
  
          <div className={styles.accountinfo}>
            <div className={styles.imgdiv}>
              <img 
                src={userData.dp || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi43oV03AlfQeLbkWwHbsDLoybu5_sYcs2xg&s"} 
                alt="Profile"
              />
            </div>
            <div className={styles.info}>
              <p className={styles.p2}>{userData.userName}</p>
              <p className={styles.p3}>{userData.about}</p>
            </div>
          </div>
        </div>
  
        <div className={styles.bottomcontainer}>
          <div className={styles.menu}>
            <div className={styles.menu_item}>Account</div>
            <div className={styles.menu_item}>Privacy</div>
            <div className={styles.menu_item}>Chats</div>
            <div className={styles.menu_item}>Notifications</div>
            <div className={styles.menu_item}>Keyboard shortcuts</div>
            <div className={styles.menu_item}>Help</div>
            <div className={styles.logout} onClick={logoutUser}>
              Log out
            </div>
          </div>
        </div>
      </div>)}

    </div>






    
  );
}

export default Settingcon;
