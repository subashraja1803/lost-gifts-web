import React from "react";
import styles from "./Dashboard.module.scss";
import LandingDashboard from "./sections/LandingDashboard/LandingDashboard";
import { connect } from "react-redux";
import LoggedInDashBoard from "./sections/LoggedInDashboard.jsx/LoggedInDashBoard";

function Dashboard({ isLoggedIn }) {
  return (
    <div className={styles.dashboard}>
      {!isLoggedIn ? <LandingDashboard /> : <LoggedInDashBoard />}
    </div>
  );
}

const mapStateToProps = ({ userDetails }) => ({
  isLoggedIn: userDetails.isLoggedIn,
});

export default connect(mapStateToProps, null)(Dashboard);
