import React from "react";
import { Icon } from "react-icons-kit";
import { linkedin } from "react-icons-kit/fa/linkedin";
import { github } from "react-icons-kit/fa/github";
import { medium } from "react-icons-kit/fa/medium";
import { twitter } from "react-icons-kit/fa/twitter";
import styles from "./heroContainer.module.scss";

export default class HeroContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className={styles.contentContainer}>
          <div className={styles.textContainer}>
            <div className={styles.introLine}>
              Hi, I'm <span className={styles.highlight}>Rishabh</span>
            </div>
            <div className={styles.descriptionContainer}>
              I'm a <span className={styles.highlight}>Software Engineer</span>{" "}
              working in India.
              <br />I churn Business Models into Business Logic by creating
              scalable service layers. I specialise in{" "}
              <span className={styles.highlight}>
                SAAS tool development
              </span>{" "}
              and
              <span className={styles.highlight}>
                {" "}
                enterprise web/mobile solutions
              </span>
              .
            </div>
            <div className={styles.iconsContainer}>
              <Icon size={32} icon={linkedin} />
              <Icon size={32} icon={github} />
              <Icon size={32} icon={twitter} />
              <Icon size={32} icon={medium} />
            </div>
          </div>
          <div className={styles.imageContainer}>
            <img src={"heroImage.png"} alt="TopLap" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
