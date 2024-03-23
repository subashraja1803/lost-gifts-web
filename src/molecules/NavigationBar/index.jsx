import React from 'react';
import styles from './NavigationBar.module.scss'

function NavigationBar() {
  return (
    <div className={styles.navigationBar}>
			<div className={styles.navigationItem}>Register</div>
			<div className={styles.navigationItem}>Login</div>
    </div>
  )
}

export default NavigationBar