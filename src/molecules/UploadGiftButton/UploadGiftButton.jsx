import React from "react";
import styles from "./UploadGiftButton.module.scss";
import { useNavigate } from "react-router-dom";

function UploadGiftButton() {
  const navigate = useNavigate();
  const onUploadClick = () => {
    navigate("/upload_gift");
  };
  return (
    <div className={styles.uploadGiftsButton} onClick={onUploadClick}>
      <div className={styles.uploadIcon}>&#43;</div>
    </div>
  );
}

export default UploadGiftButton;
