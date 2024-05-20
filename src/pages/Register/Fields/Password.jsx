import React from "react";
import styles from "../Register.module.scss";
import { Input } from "antd";
import { EMPTY_STRING } from "../../../constants/frozenObjects";
import { connect } from "react-redux";
import { LostGiftsActionHandlers } from "../../../store/actionHandlers";

function Password({
  isConfirmPW = false,
  registerDetails,
  setRegisterDetails,
}) {
  const { password = EMPTY_STRING, confirmPW = EMPTY_STRING } = registerDetails;
  const pwValue = isConfirmPW ? confirmPW : password;
  const isPWEqual = password === confirmPW;
  const isValidPassword =
    pwValue === "" || (pwValue?.length >= 8 && pwValue?.length <= 20);
  const onPasswordChange = ({ target: { value } }) => {
    if (isConfirmPW) {
      setRegisterDetails({ confirmPW: value });
    } else {
      setRegisterDetails({ password: value });
    }
  };
  return (
    <div className={styles.password}>
      <span>{isConfirmPW ? "Confirm Password" : "Password"}:</span>
      <div className={styles.formInput}>
        <Input.Password
          placeholder={isConfirmPW ? "Re-enter password" : "Enter password"}
          value={pwValue}
          onChange={onPasswordChange}
        />
        {!isValidPassword && (
          <span className={styles.invalidText}>
            Password must be between 8 and 20 characters
          </span>
        )}
        {isConfirmPW && confirmPW !== "" && !isPWEqual && (
          <span className={styles.invalidText} style={{ left: 0 }}>
            Password and Confirm Password must be the same
          </span>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  registerDetails: state.registerDetails,
});

const mapDispatchToProps = (dispatch) => ({
  setRegisterDetails: (payload) =>
    dispatch(LostGiftsActionHandlers.setRegisterDetails(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Password);
