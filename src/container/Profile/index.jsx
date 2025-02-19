import { useState } from "react";
import { FaCamera, FaPen } from "react-icons/fa";
import style from "./style.module.css";

const Profile = () => {
  const [name, setName] = useState("Chouhan");
  const [about, setAbout] = useState("Jay Sri Shyam");
  const [profilePic, setProfilePic] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={style.profileContainer}>
      <h2 className={style.profileTitle}>Profile</h2>
      <div className={style.profileContent}>
        <label className={style.profilePicContainer}>
          {profilePic ? (
            <img src={profilePic} alt="Profile" className={style.profilePic} />
          ) : (
            <div className={style.profilePlaceholder}>
              <FaCamera size={24} />
              <span>ADD PROFILE PHOTO</span>
            </div>
          )}
          <input type="file" className={style.fileInput} onChange={handleImageUpload} />
        </label>
        <div className={style.profileSection}>
          <div className={style.profileRow}>
            <span>Your name</span>
            <button className={style.editButton} onClick={() => setName(prompt("Enter your name", name))}>
              <FaPen size={16} />
            </button>
          </div>
          <p className={style.profileText}>{name}</p>
        </div>
        <div className={style.profileSection}>
          <div className={style.profileRow}>
            <span>About</span>
            <button className={style.editButton} onClick={() => setAbout(prompt("Enter about text", about))}>
              <FaPen size={16} />
            </button>
          </div>
          <p className={style.profileText}>{about}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
