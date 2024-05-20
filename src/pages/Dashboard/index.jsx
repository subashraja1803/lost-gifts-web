import React from "react";
import styles from "./Dashboard.module.scss";
import NavigationBar from "../../molecules/NavigationBar";

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <NavigationBar />
      <div className={styles.titleText}>Lost Gifts</div>
      <div className={styles.description}>
        <p>
          This is a place where you can find your lost gifts or be the saviour
          for someone to return their lost gifts.
        </p>
        <p>
          Kindly <a href="/login">login</a> or <a href="/register">register</a>{" "}
          to continue.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
