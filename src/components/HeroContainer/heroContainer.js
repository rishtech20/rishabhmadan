import React from "react";
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
          </div>
          <div className={styles.imageContainer}>
            <img src={"heroImage.png"} alt="TopLap" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
