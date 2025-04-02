import React from "react";
import { connect } from "react-redux";
import styles from "./Register.module.scss";
import FullName from "./Fields/FullName";
import Email from "./Fields/Email";
import Username from "./Fields/Username";
import RegisterButton from "./Fields/RegisterButton";
import Password from "./Fields/Password";

export const Register = () => {
  return (
    <div className={styles.registerPage}>
      <div className={styles.registerTitle}>Register</div>
      <div className={styles.formItems}>
        <FullName />
        <Email />
        <Username />
        <Password />
        <Password isConfirmPW={true} />
        <RegisterButton />
        <div className={styles.loginRedirect}>
          <span>
            Have an account? <a href="/login">Log In</a>
          </span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
