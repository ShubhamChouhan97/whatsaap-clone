import { useState, useEffect } from "react";
import { FaCamera, FaPen } from "react-icons/fa";
import style from "./style.module.css";
import ClipLoader from "react-spinners/ClipLoader";
import { userdetail } from "../../API/userdetails";
import { userUpdate } from "../../API/userUpdate";

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({
    dp: null,
    userName: "User",
    about: "No bio available",
  });

  const [name, setName] = useState(userData.userName);
  const [about, setAbout] = useState(userData.about);
  const [profilePic, setProfilePic] = useState(userData.dp);

  // Fetch user details
  useEffect(() => {
    async function fetchUserDetails() {
      try {
        const details = await userdetail();
        console.log("User details:", details.data);

        if (details.success) {
          setUserData(details.data);
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchUserDetails();
  }, []);

  // Sync local state when userData updates
  useEffect(() => {
    setName(userData.userName || "User");
    setAbout(userData.about || "No bio available");
    setProfilePic(userData.dp || null);
  }, [userData]);

  // Update user data in database
  const updateUserData = async (updatedFields) => {
    try {
      const response = await userUpdate(updatedFields);
      if (response.success) {
        setUserData((prev) => ({ ...prev, ...updatedFields }));
        console.log("User updated successfully", response.data);
      } else {
        console.error("Failed to update user", response.data);
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  // Handle Image Upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("File size must be less than 2MB.");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
        updateUserData({ dp: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle Name Change
  const handleNameChange = () => {
    const newName = prompt("Enter your name", name);
    if (newName && newName.trim() && newName !== name) {
      setName(newName);
      updateUserData({ userName: newName });
    }
  };

  // Handle About Change
  const handleAboutChange = () => {
    const newAbout = prompt("Enter about text", about);
    if (newAbout && newAbout.trim() && newAbout !== about) {
      setAbout(newAbout);
      updateUserData({ about: newAbout });
    }
  };

  return (
    <div className={style.profileContainer}>
      {loading ? (
        <div className={style.loadingContainer}>
          <ClipLoader color="blue" size={50} />
        </div>
      ) : (
        <div className={style.profileContent}>
          <h2 className={style.profileTitle}>Profile</h2>
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
              <button className={style.editButton} onClick={handleNameChange}>
                <FaPen size={16} />
              </button>
            </div>
            <p className={style.profileText}>{name}</p>
          </div>

          <div className={style.profileSection}>
            <div className={style.profileRow}>
              <span>About</span>
              <button className={style.editButton} onClick={handleAboutChange}>
                <FaPen size={16} />
              </button>
            </div>
            <p className={style.profileText}>{about}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
