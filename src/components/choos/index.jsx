import React from "react";
import { chooseData } from "../../static";
import "./choos.scss";

const Choose = () => {
  const chooseItems = chooseData?.map((choose) => (
    <div className="choose__card" key={choose.id}>
      <div className="choose__card__img">
        <img src={choose.img} alt="" />
      </div>
      <h2 className="choose__title">{choose.title}</h2>
      <p className="choose__desc">{choose.desc}</p>
    </div>
  ));
  return (
    <section className="choose container">
      <div className="box"></div>
      <h4 className="choose__name">Why Choose US</h4>
      <div className="choose__cards">{chooseItems}</div>
    </section>
  );
};

export default Choose;
