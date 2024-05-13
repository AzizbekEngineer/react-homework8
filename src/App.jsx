import React, { Fragment } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import ShopAll from "./pages/shopAll/ShopAll";
import SingleItem from "./pages/single/SingleItem";
import Blog from "./pages/blog/Blog";
import About from "./pages/about/About";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shopAll" element={<ShopAll />} />
        <Route path="/single" element={<SingleItem />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
