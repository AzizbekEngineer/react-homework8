import React, { useEffect, useState } from "react";
import headerLogo from "../../assets/images/headerLogo.svg";
import { LuSearch } from "react-icons/lu";
import { FaBars } from "react-icons/fa6";
import "./header.scss";
import SearchResult from "../searchResult/SearchResult";
import axios from "../../api";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const [data, setData] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!value.trim()) return;
    axios
      .get(`products/search?q=${value.trim()}`)
      .then((res) => setData(res.data.products))
      .then((err) => console.log(err));
  }, [value]);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={scrolled ? "header scrolled" : "header"}>
      <div
        onClick={() => setShow(false)}
        className={show ? "header__overlay show__overlay" : "header__overlay"}
      ></div>
      <nav className="header__navbar container">
        <ul className={show ? "header__list show__list" : "header__list"}>
          <li className="header__item">
            <NavLink to={"./"}>Home</NavLink>
          </li>
          <li className="header__item">
            <NavLink to={"./shopAll"}>Shop All</NavLink>
          </li>
          <li className="header__item">
            <NavLink to={"./single"}>Single Item</NavLink>
          </li>
          <li className="header__item">
            <NavLink to={"./blog"}>Blog</NavLink>
          </li>
          <li className="header__item">
            <NavLink to={"./about"}>About us</NavLink>
          </li>

          <li className="header__close" onClick={() => setShow(false)}>
            x
          </li>
        </ul>

        <div className="header__logo">
          <img src={headerLogo} alt="" />
        </div>
        <div className="header__btns">
          <form className="header__search">
            <input
              value={value}
              onChange={(event) => setValue(event.target.value)}
              type="text"
              placeholder="Search Product"
            />
            <LuSearch />
            {value.trim() ? <SearchResult data={data} /> : <></>}
          </form>
          <FaBars className="header__bar" onClick={() => setShow(true)} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
