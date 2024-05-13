import React from "react";
import "./about.scss";
import aboutImg1 from "../../assets/images/about.png";
import headerLogo from "../../assets/images/headerLogo.svg";

const About = () => {
  return (
    <section className="about container">
      <div className="box"></div>
      <h4 className="about__name">about us</h4>
      <h2 className="about__title">
        If you’re looking for a Premium Quality Tempered Glass or Back-cover for
        your Device
      </h2>
      <p className="about__desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. 
      </p>
      <div className="about__cards">
        <div className="about__card">
          <img src={aboutImg1} alt="" />
        </div>
        <div className="about__card">
          <h2>Mobile Phone</h2>
          <h2 style={{ color: "white" }}>Accessories</h2>
        </div>
        <div className="about__card">
          <img src={headerLogo} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
