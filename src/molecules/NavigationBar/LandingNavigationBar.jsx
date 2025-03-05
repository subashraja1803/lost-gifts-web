import React from "react";
import styles from "./NavigationBar.module.scss";

function LandingNavigationBar() {
  return (
    <div className={styles.landingNavigationBar}>
      <div className={styles.navigationItem}>Register</div>
      <div className={styles.navigationItem}>Login</div>
    </div>
  );
}

export default LandingNavigationBar;
