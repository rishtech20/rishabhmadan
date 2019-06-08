import React from "react";
import styles from "./colorStrip.module.scss";

export default () => (
  <div className={styles.colorStripContainer}>
    <div className={styles.red} />
    <div className={styles.green} />
    <div className={styles.blue} />
    <div className={styles.yellow} />
  </div>
);
