import React from "react";
import styles from "./UploadGiftsPage.module.scss";
import GiftName from "./sections/GiftName";
import ImageUpload from "../../molecules/ImageUpload/ImageUpload";

function UploadGiftsPage() {
  const onImageUpload = (file) => {
    console.log("Selected file:", file);
  };
  return (
    <div className={styles.uploadGiftsPage}>
      <div className={styles.title}>Enter Details of the Lost Gift</div>
      <div className={styles.detailsContainer}>
        <GiftName />
        <ImageUpload onImageUpload={onImageUpload} />
      </div>
    </div>
  );
}

export default UploadGiftsPage;
