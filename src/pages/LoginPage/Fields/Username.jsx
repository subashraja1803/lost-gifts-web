import React from "react";
import { connect } from "react-redux";
import styles from "../Login.module.scss";
import { Input } from "antd";
import { LostGiftsActionHandlers } from "../../../store/actionHandlers";
import { EMPTY_STRING } from "../../../constants/frozenObjects";
import Utility from "../../../Utils/Utility";

const Username = (props) => {
  const { loginDetails, setLoginDetails } = props;
  const { username = "" } = loginDetails;

  const onUsernameChange = ({ target: { value } }) => {
    if (value !== null) {
      setLoginDetails({ username: value });
    }
  };

  const isNameValid = Utility.isAlphaNumericLowerCase(username);
  return (
    <div className={styles.userName}>
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
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loginDetails: state?.loginDetails,
});

const mapDispatchToProps = (dispatch) => ({
  setLoginDetails: (payload) =>
    dispatch(LostGiftsActionHandlers.setLoginDetails(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Username);
