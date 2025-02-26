import React, { useState } from "react";
import styles from "./style.module.css";
import Input from "../../component/Input";
import Button from "../../component/Button";
import SignUp from "../SignUp";

const Login = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  if (showSignUp) {
    return <SignUp />;
  }

  return (
    <div className={styles.main}>
      <div className={styles.center}>
        <div className={styles.heading}>
          <h2>Login to Whatsapp</h2>
        </div>
        <div className={styles.iinp}>
          <div className={styles.inputbox}>
            <Input placeholder="Email" />
          </div>
          <div className={styles.inputbox}>
            <Input placeholder="Password" />
          </div>
        </div>
        <div className={styles.btn}>
          <Button>Login</Button>
        </div>
        <div className={styles.botm}>
          <p>
            Don't have an account?{" "}
            <span
              className={styles.signupText}
              onClick={() => setShowSignUp(true)}
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
