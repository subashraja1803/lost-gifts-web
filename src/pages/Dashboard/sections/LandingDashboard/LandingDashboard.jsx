import React from "react";
import LandingNavigationBar from "../../../../molecules/NavigationBar/LandingNavigationBar";
import styles from "./LandingDashboard.module.scss";

function LandingDashboard() {
  return (
    <div className={styles.landingDashboard}>
      <LandingNavigationBar />
      <div className={styles.titleText}>Lost Gifts</div>
      <div className={styles.description}>
        <p>
          This is a place where you can find your lost gifts or be the saviour
          for someone to return their lost gifts.
        </p>
        <p>
          Kindly <a href="/login">login</a> or <a href="/register">register</a>{" "}
          to continue.
        </p>
      </div>
    </div>
  );
}

export default LandingDashboard;
