import React from "react";
import Hero from "../../components/hero";
import Product from "../../components/products";
import About from "../../components/about";
import Shop from "../../components/shop";
import Choose from "../../components/choos";

const Home = () => {
  return (
    <div>
      <Hero />
      <Product />
      <About />
      <Shop />
      <Choose />
    </div>
  );
};

export default Home;
