import React from 'react'
import styles from './style.module.css'
function Button(props) {
  return (
    <button className={styles.selectbtnn}  onClick={props.onClick} >{props.children} </button>
  )
}

export default Button
