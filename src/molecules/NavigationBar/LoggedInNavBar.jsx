import React from "react";
import styles from "./NavigationBar.module.scss";
import ProfileImage from "../ProfileImage/ProfileImage";
import UploadGiftButton from "../UploadGiftButton/UploadGiftButton";

function LoggedInNavBar() {
  return (
    <div className={styles.loggedInNavBar}>
      <div className={styles.leftNavContainer}>
        <UploadGiftButton />
      </div>
      <ProfileImage />
    </div>
  );
}

export default LoggedInNavBar;
