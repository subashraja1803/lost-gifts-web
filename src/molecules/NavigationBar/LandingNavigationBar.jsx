import React from "react";
import styles from "./NavigationBar.module.scss";
import { useNavigate } from "react-router-dom";

function LandingNavigationBar() {
  const navigate = useNavigate();
  return (
    <div className={styles.landingNavigationBar}>
      <div
        className={styles.navigationItem}
        onClick={() => navigate("/register")}
      >
        Register
      </div>
      <div className={styles.navigationItem} onClick={() => navigate("/login")}>
        Login
      </div>
    </div>
  );
}

export default LandingNavigationBar;
