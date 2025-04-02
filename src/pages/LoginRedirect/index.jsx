import React from "react";
import styles from "./LoginRedirect.module.scss";

function LoginRedirect() {
  return (
    <div className={styles.loginRedirect}>
      <p className={styles.redirectMessage}>Account Successfully Created.</p>
      <p className={styles.loginText}>
        Redirect to <a href="/login">login</a>
      </p>
    </div>
  );
}

export default LoginRedirect;
