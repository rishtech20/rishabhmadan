import React from "react";
import Layout from "../components/Layout/layout";
import styles from "../styles/about.module.scss";

export default () => (
  <Layout>
    <h1>About Rishabh Madan</h1>
    <hr />
    <blockquote>
      Truth can be found in one place: the code.
      <br />- Robert C. Martin, Clean Code: A Handbook of Agile Software
      Craftsmanship
    </blockquote>
    <p>
      It all started at age of 6 when, I wired up a little 5V bulb in series
      with 2 AA batteries. I suddenly evolved from a well ornamented ape into a
      modern man - I fell in love with one question - "How does it work and how
      do I do/fix it?". Wrote my first line of code when I was 12 years old.
      Since then my future was defined.
    </p>
    <p>
      I find it deeply satisfying to build stuff that makes life easier. I have
      designed and developed: digital smoke sensor, DTMF controlled CNC machine,
      adaptive computer network algorithms, manipulators, web applications and
      more. Some of my work has been published in international conferences as
      well.
    </p>
    <p>
      Currently, I am working as a Software Engineer at a fast paced startup -
      churning business models into business logic by building scalable service
      layers.
    </p>
    <br />
    <h2>Skills*</h2>
    <hr />
    <section className={styles.skillsContainer}>
      <div>
        <img src={"/icons/web.png"} width="80px" />
        <h3>Web Development</h3>
        <p>(HTML, CSS, React, NodeJS, GraphQL, REST, MySQL, Babel, Webpack)</p>
      </div>
      <div>
        <img src={"/icons/cloud-computing.png"} width="80px" />
        <h3>Big Data</h3>
        <p>(Apache Kafka, Scrapy, Apache Flink, Redis, Python, Hadoop)</p>
      </div>
      <div>
        <img src={"/icons/learning.png"} width="80px" />
        <h3>Machine Learning</h3>
        <p>(Pandas, SciPy, Tensorflow, Numpy, Matlab, OpenCV)</p>
      </div>
    </section>
  </Layout>
);
