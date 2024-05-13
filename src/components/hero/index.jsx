import React from "react";
import heroImg from "../../assets/images/hero.svg";
import "./hero.scss";

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero__left">
        <h1 className="hero__title">Mobile</h1>
        <h2 className="hero__name">Backcover Tempered Glass</h2>
        <button className="hero__btn">Shop all !</button>
      </div>
      <div className="hero__right">
        <img src={heroImg} alt="" />
      </div>
    </section>
  );
};

export default Hero;
