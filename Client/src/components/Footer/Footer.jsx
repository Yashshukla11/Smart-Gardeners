import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserContext";

export const Footer = () => {
  const { user, setUser } = useContext(UserContext);

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     setUser(user); // Update the user state when the authentication state changes
  //   });

  //   return () => unsubscribe(); // Unsubscribe from the auth state change listener when the component unmounts
  // }, []);

  return (
    <footer className="footer mt-[90px]">
      <div className="footer__body w-105">
        <nav className="footer__nav">
          <ul className="footer_nav__menu">
            <li className="footer_nav__item">
              <h4 className="footer_nav__menu__title">COMPANY</h4>
            </li>
            <li className="footer_nav__item">
              <a href="/about" className="footer_nav__link">
                About Us
              </a>
            </li>
            <li className="footer_nav__item">
              <a href="/about#meettheteam" className="footer_nav__link">
                Team
              </a>
            </li>
            <li className="footer_nav__item">
              <a href="#" className="footer_nav__link">
                Careers
              </a>
            </li>
            <li className="footer_nav__item">
              <a href="contact" className="footer_nav__link">
                Contact
              </a>
            </li>
          </ul>
          <ul className="footer_nav__menu">
            <li className="footer_nav__item">
              <h4 className="footer_nav__menu__title">INVEST</h4>
            </li>
            <li className="footer_nav__item">
              <a href="/kit" className="footer_nav__link">
                Features
              </a>
            </li>
            <li className="footer_nav__item">
              <a href="/#whyhydrophonics" className="footer_nav__link">
                How it works
              </a>
            </li>
            <li className="footer_nav__item">
              <a href="#" className="footer_nav__link">
                Pricing
              </a>
            </li>
            {user && user ? (
              ""
            ) : (
              <li className="footer_nav__item">
                <a href="/signin" className="footer_nav__link">
                  Login
                </a>
              </li>
            )}
          </ul>
          <ul className="footer_nav__menu">
            <li className="footer_nav__item">
              <h4 className="footer_nav__menu__title">LEGAL</h4>
            </li>
            <li className="footer_nav__item">
              <a
                href="https://github.com/Yashshukla11/Smart-Gardeners?tab=MIT-1-ov-file"
                className="footer_nav__link"
              >
                Privacy
              </a>
            </li>
            <li className="footer_nav__item">
              <a
                href="https://github.com/Yashshukla11/Smart-Gardeners?tab=MIT-1-ov-file"
                className="footer_nav__link"
              >
                Terms
              </a>
            </li>
            <li className="footer_nav__item">
              <a
                href="https://github.com/Yashshukla11/Smart-Gardeners?tab=MIT-1-ov-file"
                className="footer_nav__link"
              >
                Security
              </a>
            </li>
          </ul>
        </nav>
        <div className="footer__contact">
          <h5 className="footer__contact__title">Smart Gardeners</h5>
          <span>Write email to us</span>
          <a
            href="mailto:swapnilskumars@gmail.com"
            className="email hover:underline"
          >
            info@smartgardeners.com
          </a>
          {user && user ? (
            <></>
          ) : (
            <a href="/signin" className="btn btn__signin">
              <i className="far fa-user"></i> Sign In
            </a>
          )}
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
