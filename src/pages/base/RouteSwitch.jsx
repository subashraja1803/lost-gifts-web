import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../Register";
import styles from "./Base.module.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OTPVerification from "../OTPVerification";
import LoginRedirect from "../LoginRedirect";
import LoginPage from "../LoginPage";
import Dashboard from "../Dashboard/Dashboard";
import UploadGiftsPage from "../UploadGiftsPage/UploadGiftsPage";

function RouteSwitch() {
  return (
    <div className={styles.backGround}>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/register/otp-verification"
          element={<OTPVerification />}
        />
        <Route path="/login-redirect" element={<LoginRedirect />} />
        <Route path="/upload_gift" element={<UploadGiftsPage />} />
      </Routes>
    </div>
  );
}

export default RouteSwitch;
