import React from "react";
import { connect } from "react-redux";
import styles from "../Register.module.scss";
import { Input } from "antd";
import { LostGiftsActionHandlers } from "../../../store/actionHandlers";
import { EMPTY_STRING } from "../../../constants/frozenObjects";

const FullName = ({ registerDetails, setRegisterDetails }) => {
  const onFullNameChange = ({ target: { value } }) => {
    if (value !== null) setRegisterDetails({ fullName: value });
  };
  return (
    <div className={styles.fullName}>
      <span>Full Name:</span>
      <div className={styles.formInput}>
        <Input
          placeholder="Enter full name "
          value={registerDetails?.fullName || EMPTY_STRING}
          onChange={onFullNameChange}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(FullName);
