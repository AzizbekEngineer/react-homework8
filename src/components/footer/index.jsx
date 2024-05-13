import React from "react";
import footerLogo from "../../assets/images/footerLogo.svg";
import "./footer.scss";
import footerImg1 from "../../assets/images/footer1.svg";
import footerImg3 from "../../assets/images/footer3.svg";
import footerImg4 from "../../assets/images/footer4.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__cards container">
        <div className="footer__card">
          <div className="footer__img">
            <img className="footer__logo" src={footerLogo} alt="" />
            <div className="footer__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </div>
        <ul className="footer__card footer__list">
          <h4 className="footer__list__title">Contact us</h4>
          <li className="footer__item">E: info@example.com</li>
          <li className="footer__item">P: +94 7670000000</li>
          <li className="footer__item">A: 123 Hospital rd, </li>
          <li className="footer__item">Kalubowila, Dehiwela</li>
        </ul>
        <ul className="footer__card footer__list">
          <h4 className="footer__list__title">Useful links</h4>
          <li className="footer__item">Shop All</li>
          <li className="footer__item">Tempered Glass</li>
          <li className="footer__item">Back-cover</li>
          <li className="footer__item">About Us</li>
        </ul>
        <div className="footer__card">
          <div className="footer__icons">
            <img src={footerImg1} alt="" />
            <h5>Whatsapp</h5>
          </div>
          <div className="footer__icons">
            <img src={footerImg1} alt="" />
            <h5>Whatsapp</h5>
          </div>
          <div className="footer__icons">
            <img src={footerImg3} alt="" />
            <h5>Instargram</h5>
          </div>
          <div className="footer__icons">
            <img src={footerImg4} alt="" />
            <h5>Tik Tok</h5>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
