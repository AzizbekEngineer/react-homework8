import React, { Fragment } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import ShopAll from "./pages/shopAll/ShopAll";
import SingleItem from "./pages/single/SingleItem";
import Blog from "./pages/blog/Blog";
import AboutPage from "./pages/about/AboutPage";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shopAll" element={<ShopAll />} />
        <Route path="/single/:id" element={<SingleItem />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
