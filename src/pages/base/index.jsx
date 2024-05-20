import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard";
import Register from "../Register";
import styles from "./Base.module.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RouteSwitch() {
  return (
    <div className={styles.backGround}>
      <ToastContainer
        position="top-center"
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
      </Routes>
    </div>
  );
}

export default RouteSwitch;
