import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__body w-105">
        <nav className="footer__nav">
          <ul className="footer_nav__menu">
            <li className="footer_nav__item">
              <h4 className="footer_nav__menu__title">COMPANY</h4>
            </li>
            <li className="footer_nav__item">
              <a href="#" className="footer_nav__link">
                About Us
              </a>
            </li>
            <li className="footer_nav__item">
              <a href="#" className="footer_nav__link">
                Team
              </a>
            </li>
            <li className="footer_nav__item">
              <a href="#" className="footer_nav__link">
                Careers
              </a>
            </li>
            <li className="footer_nav__item">
              <a href="#" className="footer_nav__link">
                Contact
              </a>
            </li>
          </ul>
          <ul className="footer_nav__menu">
            <li className="footer_nav__item">
              <h4 className="footer_nav__menu__title">INVEST</h4>
            </li>
            <li className="footer_nav__item">
              <a href="#" className="footer_nav__link">
                Features
              </a>
            </li>
            <li className="footer_nav__item">
              <a href="#" className="footer_nav__link">
                How it works
              </a>
            </li>
            <li className="footer_nav__item">
              <a href="#" className="footer_nav__link">
                Pricing
              </a>
            </li>
            <li className="footer_nav__item">
              <a href="#" className="footer_nav__link">
                Login
              </a>
            </li>
          </ul>
          <ul className="footer_nav__menu">
            <li className="footer_nav__item">
              <h4 className="footer_nav__menu__title">LEGAL</h4>
            </li>
            <li className="footer_nav__item">
              <a href="#" className="footer_nav__link">
                Privacy
              </a>
            </li>
            <li className="footer_nav__item">
              <a href="#" className="footer_nav__link">
                Terms
              </a>
            </li>
            <li className="footer_nav__item">
              <a href="#" className="footer_nav__link">
                Security
              </a>
            </li>
          </ul>
        </nav>
        <div className="footer__contact">
          <h5 className="footer__contact__title">Smart Gardeners</h5>
          <span>Write email to us</span>
          <a href="mailto:info@zoufarm.com" className="email">
            info@smartgardeners.com
          </a>
          <a href="#" className="btn btn__signin">
            <i className="far fa-user"></i> Sign In
          </a>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom__content w-105">
          <div className="footer__logo">
            <img
              src="https://i.postimg.cc/sfGY7Q5S/Screenshot-2024-01-23-at-9-49-57-PM.png"
              alt="Logo"
              style={{ width: "240px" }}
            />
          </div>
          <p className="footer_copyright">
            © Copyright 2024. Smart Gardeners Pvt. Ltd.
          </p>
        </div>
        <img
          src="https://i.postimg.cc/QNmTp8vh/mountain.png"
          alt="Mountain"
          className="footer_img"
        />
      </div>
    </footer>
  );
};
