import React from "react";
import ColorStrip from "../ColorStrip-Horizontal/colorStrip";
import Header from "../Header/header";
import styles from "./layout.module.scss";

export default ({ children }) => (
  <div className={styles.container}>
    <div>
      <ColorStrip />
      <Header />
    </div>
    <div className={styles.contentContainer}>{children}</div>
    <div
      style={{ background: "red", width: "100%", height: "100px", bottom: "0" }}
    >
      Footer
    </div>
  </div>
);
