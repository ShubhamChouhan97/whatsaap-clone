import React from 'react';
import styles from './style.module.css';
import Li from '../../component/Li'; // Ensure the correct folder name

function Tolbar({ onStatusClick, onChatClick ,onchannelclick,oncommunityclick,onmetaclick}) {
  return (
    <div className={styles.tolbar}>
      <header>
        <div className={styles.upsection}>
          <ul>
            <Li image="msg" onClick={onChatClick} >Message</Li>
            <Li image="status"  onClick={onStatusClick}>Status</Li>
            <Li image="channel" onClick={onchannelclick} > Channel</Li>
            <Li image="group" onClick={oncommunityclick}>Group</Li>
            <Li image="ai" onClick={onmetaclick}>Meta AI</Li>
          </ul>
        </div>
        <div className={styles.downsection}>
              <ul>
              <Li image="setting" >Setting</Li>
              <Li image="profile" >Profile</Li>
              </ul>
            </div>
      </header>
    </div>
  );
}

export default Tolbar;
