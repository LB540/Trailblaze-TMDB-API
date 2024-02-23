import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          "Stay ahead of the curve in the entertainment world with
          TrailBlazer.Our platform offers a comprehensive collection of trailers
          for the hottest and most talked about films and television programs,
          all in one convenient location. From blockbusters to indie hits, and
          from hit TV dramas to hilarious comedies, you'll find everything you
          need to know about the latest and greatest in entertainment, all just
          a few taps away."
        </div>
        <h4>You can find me here👋</h4>
        <br />
        <br />
        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaTwitter />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
        </div>
        <br />
      </ContentWrapper>
      <h4>Copyright © Lalit. Made with 💕 by Lalit Bisht</h4>
    </footer>
  );
};

export default Footer;
