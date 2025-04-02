import React from "react";
import styles from "../UploadGiftsPage.module.scss";
import { Input } from "antd";
import { connect } from "react-redux";
import { LostGiftsActionHandlers } from "../../../store/actionHandlers";

const GiftName = ({ name, setUploadGiftDetails }) => {
  const onChange = ({ target: { value } }) => {
    setUploadGiftDetails({ name: value });
  };
  return (
    <div className={styles.inputContainer}>
      <span className={styles.label}>Name:</span>
      <div className={styles.input}>
        <Input placeholder="Enter gift name" value={name} onChange={onChange} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: state.uploadDetails.name,
});

const mapDispatchToProps = (dispatch) => ({
  setUploadGiftDetails: (payload) =>
    dispatch(LostGiftsActionHandlers.setUploadGiftDetails(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GiftName);
