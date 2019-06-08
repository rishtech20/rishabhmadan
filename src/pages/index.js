import React from "react";
import Header from "../components/Header/header";
import ColorStrip from "../components/ColorStrip-Horizontal/colorStrip";
import HeroContainer from "../components/HeroContainer/heroContainer";

export default () => (
  <div style={{ background: "" }}>
    <ColorStrip />
    <Header />
    <HeroContainer />
  </div>
);
