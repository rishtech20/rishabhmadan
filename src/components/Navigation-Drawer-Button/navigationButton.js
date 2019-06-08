import React from "react";
import styles from "./navigationButton.module.scss";

export default () => (
  <div>
    <button className={styles.stripContainer}>
      <div className={styles.strip} />
      <div className={styles.strip} />
      <div className={styles.strip} />
    </button>
  </div>
);
