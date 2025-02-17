import React from 'react'
import styles from './style.module.css'
import Button from '../../component/Button'
import Input from '../../component/Input'

function Chatcontainer() {
  return (
    <div>
                        <div className={styles.deatilsdiv}>
        <img src="https://i.pinimg.com/736x/69/a5/60/69a5602fb6377d1fef9bb45e8db9e415.jpg" alt="alt" />
       <div className={styles.reciverdetails}>
          <span>Recivername</span><br />
          <span>Reciver info like last seen </span>
       </div>
       <div className={styles.funct}>
        <Button><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#5f6368"><path d="M765-144 526-383q-30 22-65.79 34.5-35.79 12.5-76.18 12.5Q284-336 214-406t-70-170q0-100 70-170t170-70q100 0 170 70t70 170.03q0 40.39-12.5 76.18Q599-464 577-434l239 239-51 51ZM384-408q70 0 119-49t49-119q0-70-49-119t-119-49q-70 0-119 49t-49 119q0 70 49 119t119 49Z"/></svg></Button>
        <Button><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#5f6368"><path d="M479.79-192Q450-192 429-213.21t-21-51Q408-294 429.21-315t51-21Q510-336 531-314.79t21 51Q552-234 530.79-213t-51 21Zm0-216Q450-408 429-429.21t-21-51Q408-510 429.21-531t51-21Q510-552 531-530.79t21 51Q552-450 530.79-429t-51 21Zm0-216Q450-624 429-645.21t-21-51Q408-726 429.21-747t51-21Q510-768 531-746.79t21 51Q552-666 530.79-645t-51 21Z"/></svg></Button>
       </div>
                       </div>

                       <div className={styles.chatdetails}>

                        ds
                       </div>
                  <div className={styles.inputsection}>
                  <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill="#5f6368"><path d="M446.67-446.67H200v-66.66h246.67V-760h66.66v246.67H760v66.66H513.33V-200h-66.66v-246.67Z"/></svg>               
                   <div className={styles.inputdiv}>
                   <Input  placeholder={"Type a massage"}/>
                   </div>
                   <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill="#5f6368"><path d="M480-415.33q-45.33 0-76.33-32.28t-31-78.39v-247.33q0-44.45 31.29-75.56 31.3-31.11 76-31.11 44.71 0 76.04 31.11 31.33 31.11 31.33 75.56V-526q0 46.11-31 78.39T480-415.33Zm0-232ZM446.67-120v-131.67q-105.34-12-176-90.33Q200-420.33 200-526h66.67q0 88.33 62.36 149.17Q391.38-316 479.86-316q88.47 0 150.97-60.83 62.5-60.84 62.5-149.17H760q0 105.67-70.67 184-70.66 78.33-176 90.33V-120h-66.66ZM480-482q17.67 0 29.17-12.83 11.5-12.84 11.5-31.17v-247.33q0-17-11.69-28.5-11.7-11.5-28.98-11.5t-28.98 11.5q-11.69 11.5-11.69 28.5V-526q0 18.33 11.5 31.17Q462.33-482 480-482Z"/></svg>
                    </div>     
    </div>
  )
}

export default Chatcontainer;