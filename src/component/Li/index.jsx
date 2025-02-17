import React from 'react';
import Imgbutton from '../ImgButton';
import styles from './style.module.css';

import msgimg from '../../assets/msg.png';
import statusimg from '../../assets/status.png';
import channelimg from '../../assets/channels.png';
import groupimg from '../../assets/group.png';
import aiimg from '../../assets/ai.png';
import settingimg from '../../assets/settings.png';
import profileimg from '../../assets/user.png';

// Image mapping for better reusability
const images = {
  msg: msgimg,
  status: statusimg,
  channel: channelimg,
  group: groupimg,
  ai: aiimg,
  setting: settingimg,
  profile: profileimg,
};

function Li({ image, children }) {
  const handleClick = () => {
    alert(`Button ${image} clicked!`);
  };

  return (
    <li className={styles.listItem}>
      <Imgbutton onClick={handleClick} image={images[image]} />
      <span className={styles.tooltip}>{children}</span>
    </li>
  );
}

export default Li;
