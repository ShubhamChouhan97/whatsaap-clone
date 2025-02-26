import React from 'react'
import styles from './style.module.css'
import Input from "../../component/Input";
import Button from "../../component/Button";
import Login from '../Login';
import { useState } from "react";

function SignUp() {
 const [showSignin, setShowSignin] = useState(false);

  if (showSignin) {
    return <Login />;
  }

  return (
    <div className={styles.main}>
      <div className={styles.center}>
        <div className={styles.heading}>
          <h2>Sign Up</h2>
        </div>
        <div className={styles.iinp}>
         
         <div className={styles.inputbox}>
          <Input type="text" placeholder="Full Name" />
         </div>

          <div className={styles.inputbox}>
            <Input type="text" placeholder="Email" />
          </div>
          <div className={styles.inputbox}>
            <Input type="text" placeholder="Password" />
          </div>
        </div>
        <div className={styles.btn}>
          <Button>Register</Button>
        </div>
  <div className={styles.botm}>
            <p>
              Already have an account?{" "}
              <span
                className={styles.signinText}
                onClick={() => setShowSignin(true)}
              >
                Sign In
              </span>
            </p>
          </div>
      </div>
    </div>
  )
}

export default SignUp
