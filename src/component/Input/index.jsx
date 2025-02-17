import React from 'react';
import styles from './style.module.css';

function Input({ placeholder, value, onChange }) {
  return (
    <input type="text" className={styles.input} placeholder={placeholder} value={value} onChange={onChange}  />
  );
}

export default Input;
