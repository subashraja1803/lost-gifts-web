import React, { useState, useRef } from "react";
import styles from "./ImageUpload.module.scss";

const ImageUpload = ({
  onImageUpload,
  onError,
  acceptedFileTypes = "image/*",
  maxSizeInBytes = 5 * 1024 * 1024, // 5MB
  label = "Upload",
  className = "",
}) => {
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    validateAndProcessFile(file);
  };

  const validateAndProcessFile = (file) => {
    setError(null);

    if (!file) {
      const errorMsg = "No file selected";
      setError(errorMsg);
      if (onError) onError(errorMsg);
      return;
    }

    if (!file.type.match("image.*")) {
      const errorMsg = "Please select an image file";
      setError(errorMsg);
      if (onError) onError(errorMsg);
      return;
    }

    if (file.size > maxSizeInBytes) {
      const errorMsg = `File size should be less than ${
        maxSizeInBytes / (1024 * 1024)
      }MB`;
      setError(errorMsg);
      if (onError) onError(errorMsg);
      return;
    }

    if (onImageUpload) onImageUpload(file);
  };

  const triggerFileInput = () => fileInputRef.current.click();

  return (
    <div className={`${styles.imageUpload} ${className}`}>
      <div className={styles.uploadContainer}>
        <button
          className={styles.uploadButton}
          onClick={triggerFileInput}
          type="button"
        >
          <span className={styles.uploadIcon}>+</span>
          <span>{label}</span>
        </button>
        <input
          type="file"
          accept={acceptedFileTypes}
          onChange={handleFileChange}
          className={styles.fileInput}
          ref={fileInputRef}
        />
      </div>
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};

export default ImageUpload;
