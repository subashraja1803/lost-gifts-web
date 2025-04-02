import React from "react";
import styles from "./ProfileImage.module.scss";
import { connect } from "react-redux";
import Utility from "../../Utils/Utility";

function ProfileImage({ userDetails }) {
  const { profilePicture = null, username, fullName } = userDetails;
  const imagePresent = profilePicture !== null;
  const nameArray = fullName.split(" ");
  const firstName = nameArray[0];
  const lastName = nameArray[nameArray.length - 1];
  const initials = firstName[0] + (lastName ? lastName[0] : "");
  const backGroundColor = Utility.nameToColor(username);
  const textColor = Utility.getContrastColor(backGroundColor);
  return (
    <div className={styles.profileImage}>
      {imagePresent ? (
        <img src={profilePicture} />
      ) : (
        <div
          className={styles.nameInitials}
          style={{
            background: backGroundColor,
            color: textColor,
          }}
        >
          {initials}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = ({ userDetails }) => ({
  userDetails,
});

export default connect(mapStateToProps, null)(ProfileImage);
