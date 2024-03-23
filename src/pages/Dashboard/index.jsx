import React from 'react';
import styles from './Dashboard.module.scss';
import dashboardBG from '../../assets/dashboardBG.jpg'
import NavigationBar from '../../molecules/NavigationBar';

function Dashboard() {
  return (
    <div className={styles.dashboard} style={{ backgroundImage: `url(${dashboardBG})`}}>
      <NavigationBar />
    </div>
  )
};

export default Dashboard;