import React from 'react';
import styles from './style.module.css';
import Li from '../../component/Li'; // Ensure the correct folder name

function Tolbar() {
  return (
    <div className={styles.tolbar}>
      <header>
        <div className={styles.upsection}>
          <ul>
            <Li image="msg" >Message</Li>
            <Li image="status" >Status</Li>
            <Li image="channel" > Channel</Li>
            <Li image="group" >Group</Li>
            <Li image="ai" >Meta AI</Li>
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
