import React from "react";
import Layout from "../components/Layout/layout";

export default () => (
  <Layout>
    <h1>Contact</h1>
    <form action="">
      <input placeholder="name" />
      <input placeholder="emailAddress" />
      <input type="textarea" />
      <button>Submit</button>
    </form>
  </Layout>
);
