import React from "react";
import styles from "./NavigationBar.module.scss";
import ProfileImage from "../ProfileImage/ProfileImage";

function LoggedInNavBar() {
  return (
    <div className={styles.loggedInNavBar}>
      <ProfileImage />
    </div>
  );
}

export default LoggedInNavBar;
