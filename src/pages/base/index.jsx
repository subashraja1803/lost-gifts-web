import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard";
import Register from "../Register";
import styles from "./Base.module.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OTPVerification from "../OTPVerification";
import LoginRedirect from "../LoginRedirect";
import LoginPage from "../LoginPage";
import { connect } from "react-redux";
import LoggedInDashBoard from "../LoggedInDashBoard/LoggedInDashBoard";

function RouteSwitch({ isLoggedIn }) {
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
        <Route
          path="/"
          element={isLoggedIn ? <LoggedInDashBoard /> : <Dashboard />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/register/otp-verification"
          element={<OTPVerification />}
        />
        <Route path="/login-redirect" element={<LoginRedirect />} />
      </Routes>
    </div>
  );
}

const mapStateToProps = ({ userDetails }) => ({
  isLoggedIn: userDetails.isLoggedIn,
});

export default connect(mapStateToProps, null)(RouteSwitch);
