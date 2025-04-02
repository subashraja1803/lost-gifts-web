import styles from "../Register.module.scss";
import React from "react";
import { connect } from "react-redux";
import { Input } from "antd";
import { EMPTY_STRING } from "../../../constants/frozenObjects";
import Utility from "../../../Utils/Utility";
import { LostGiftsActionHandlers } from "../../../store/actionHandlers";

const Email = ({ registerDetails, setRegisterDetails }) => {
  const isValidEmail = Utility.checkValidEmail(registerDetails?.email);
  const onEmailChange = ({ target: { value } }) => {
    setRegisterDetails({ email: value });
  };
  return (
    <div className={styles.emailField}>
      <span>Email:</span>
      <div className={styles.formInput}>
        <Input
          placeholder="Enter email id"
          value={registerDetails?.email || EMPTY_STRING}
          onChange={onEmailChange}
        />
        {!isValidEmail && (
          <span className={styles.invalidText}>Invalid Email</span>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  registerDetails: state.registerDetails,
});

const mapDispatchToProps = (dispatch) => ({
  setRegisterDetails: (payload) =>
    dispatch(LostGiftsActionHandlers.setRegisterDetails(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Email);
