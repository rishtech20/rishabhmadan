import React from "react";
import { Icon } from "react-icons-kit";
import { linkedin } from "react-icons-kit/fa/linkedin";
import { github } from "react-icons-kit/fa/github";
import { medium } from "react-icons-kit/fa/medium";
import { twitter } from "react-icons-kit/fa/twitter";
import styles from "./footer.module.scss";

export default () => (
  <footer className={styles.footerContainer}>
    <div className={styles.iconsContainer}>
      <Icon size={24} icon={linkedin} />
      <Icon size={24} icon={github} />
      <Icon size={24} icon={twitter} />
      <Icon size={24} icon={medium} />
    </div>
    <div className={styles.copyrightContainer}>&copy; Rishabh Madan</div>
  </footer>
);
