import React from "react";
import { Link } from "gatsby";
import { Icon } from "react-icons-kit";
import { cross } from "react-icons-kit/icomoon/cross";
import ColorStrip from "../ColorStrip-Horizontal/colorStrip";
import styles from "./navigation-drawer.module.scss";

export default ({ visible, hide }) => (
  <nav className={visible ? styles.sideDrawerOpen : styles.sideDrawer}>
    <ColorStrip />
    <div className={styles.iconContainer}>
      <Icon size={20} icon={cross} onClick={hide} />
    </div>
    <ul>
      <li>
        <Link to={"/about/"}>About</Link>
      </li>
      <li>
        <Link to={"/cv/"}>CV</Link>
      </li>
      <li>
        <Link to={"/blog/"}>Blog</Link>
      </li>
      <li>
        <Link to={"/contact/"}>Contact</Link>
      </li>
    </ul>
  </nav>
);
