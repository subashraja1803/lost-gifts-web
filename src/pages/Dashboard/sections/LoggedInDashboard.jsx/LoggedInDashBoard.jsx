import React from "react";
import styles from "./LoggedInDashboard.module.scss";
import LoggedInNavBar from "../../../../molecules/NavigationBar/LoggedInNavBar";

function LoggedInDashBoard() {
  return (
    <div className={styles.loggedInDashboard}>
      <LoggedInNavBar />
    </div>
  );
}

export default LoggedInDashBoard;
