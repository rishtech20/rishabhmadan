import React from "react";
import ColorStrip from "../ColorStrip-Horizontal/colorStrip";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import styles from "./layout.module.scss";

export default ({ children }) => (
  <div className={styles.container}>
    <div>
      <ColorStrip />
      <Header />
    </div>
    <main className={styles.contentContainer}>{children}</main>
    <div>
      <Footer />
    </div>
  </div>
);
