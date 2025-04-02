import React, { useState } from "react";
import { connect } from "react-redux";
import styles from "./Login.module.scss";
import Password from "./Fields/Password";
import LoginButton from "./Fields/LoginButton";
import Username from "./Fields/Username";

const LoginPage = () => {
  const [invalidUser, setInvalidUser] = useState(false);
  const loginProps = {
    invalidUser,
    setInvalidUser,
  };
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginTitle}>Login</div>
      <div className={styles.formItems}>
        <Username />
        <Password loginProps={loginProps} />
        <LoginButton loginProps={loginProps} />
        <div className={styles.registerRedirect}>
          <span>
            New User?<a href="/register">Register</a>
          </span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
