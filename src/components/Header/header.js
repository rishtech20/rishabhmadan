import React from "react";
import { Link } from "gatsby";
import styles from "./header.module.scss";
import NavigationButton from "../Navigation-Drawer-Button/navigationButton";
import NavigationDrawer from "../NavigationDrawer/navigation-drawer";

export default class Header extends React.Component {
  state = {
    isDrawerVisible: false,
  };

  showDrawer = () => {
    console.log("CLick");
    this.setState({ isDrawerVisible: true });
  };

  hideDrawer = () => {
    this.setState({ isDrawerVisible: false });
  };
  render() {
    const { isDrawerVisible } = this.state;
    return (
      <React.Fragment>
        <div className={styles.navbarContainer}>
          <nav className={styles.innerContainer}>
            <div>
              <Link to={"/"}>
                <img src="/headerImage/ai.png" width="50" />
              </Link>
            </div>
            <div className={styles.spacer} />
            <ul>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/CV/">CV</Link>
              </li>
              <li>
                <Link to="/blog/">Blog</Link>
              </li>
              <li>
                <Link to="/contact/">Contact</Link>
              </li>
            </ul>
            <div className={styles.navigationButton} onClick={this.showDrawer}>
              <NavigationButton />
            </div>
          </nav>
        </div>
        <NavigationDrawer visible={isDrawerVisible} hide={this.hideDrawer} />
      </React.Fragment>
    );
  }
}
