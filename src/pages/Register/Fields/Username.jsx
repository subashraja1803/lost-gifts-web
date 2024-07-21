import React, { useState } from "react";
import { connect } from "react-redux";
import styles from "../Register.module.scss";
import { Input } from "antd";
import { LostGiftsActionHandlers } from "../../../store/actionHandlers";
import { EMPTY_STRING } from "../../../constants/frozenObjects";
import Utility from "../../../Utils/Utility";
import { checkUniqueUsername } from "../../../service/serviceFunctions";
import { useDebouncedCallback } from "use-debounce";
import { FcApproval } from "react-icons/fc";

const Username = ({ registerDetails, setRegisterDetails }) => {
  const [isUnique, setIsUnique] = useState(true);
  const { username = "" } = registerDetails;

  const uniqueUsernameCheck = (value) => {
    checkUniqueUsername({ username: value })
      .then(({ isUnique }) => setIsUnique(isUnique))
      .catch(({ message }) => {
        console.log(message);
      });
  };

  const checkUserName = useDebouncedCallback(uniqueUsernameCheck, 500);

  const onUsernameChange = ({ target: { value } }) => {
    if (value !== null) setRegisterDetails({ username: value });
    if (value !== "") checkUserName(value);
  };

  const isNameValid = Utility.isAlphaNumericLowerCase(username);
  return (
    <div className={styles.UserName}>
      <span>Username:</span>
      <div className={styles.formInput}>
        <Input
          placeholder="Enter user name"
          value={username || EMPTY_STRING}
          onChange={onUsernameChange}
        />
        {!isNameValid && (
          <span className={styles.invalidText}>
            Username must be AlphaNumeric with lowercase
          </span>
        )}
        {username !== "" &&
          (isUnique ? (
            <div className={styles.checkMark}>
              <FcApproval />
            </div>
          ) : (
            <span className={styles.textBottomLeft}>
              Username already present
            </span>
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  registerDetails: state?.registerDetails,
});

const mapDispatchToProps = (dispatch) => ({
  setRegisterDetails: (payload) =>
    dispatch(LostGiftsActionHandlers.setRegisterDetails(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Username);
