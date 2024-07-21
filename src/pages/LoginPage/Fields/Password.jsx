import React from "react";
import styles from "../Login.module.scss";
import { Input } from "antd";
import { EMPTY_STRING } from "../../../constants/frozenObjects";
import { connect } from "react-redux";
import { LostGiftsActionHandlers } from "../../../store/actionHandlers";

function Password({ loginDetails, setLoginDetails }) {
  const { password = EMPTY_STRING } = loginDetails;
  const isValidPassword =
    password === "" || (password?.length >= 8 && password?.length <= 20);
  const onPasswordChange = ({ target: { value } }) => {
    setLoginDetails({ password: value });
  };
  return (
    <div className={styles.password}>
      <span>Password:</span>
      <div className={styles.formInput}>
        <Input.Password
          placeholder="Enter password"
          value={password}
          onChange={onPasswordChange}
        />
        {!isValidPassword && (
          <span className={styles.invalidText}>
            Password must be between 8 and 20 characters
          </span>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  loginDetails: state.loginDetails,
});

const mapDispatchToProps = (dispatch) => ({
  setLoginDetails: (payload) =>
    dispatch(LostGiftsActionHandlers.setLoginDetails(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Password);
