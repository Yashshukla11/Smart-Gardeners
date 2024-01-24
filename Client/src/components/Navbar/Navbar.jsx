import React from "react";

export const Navbar = ({
  home,
  whatwegrow,
  ourproduct,
  aboutus,
  contactus,
}) => {
  return (
    <>
      <div className="container" style={{ marginBottom: "30px" }}>
        <header>
          <nav className="header__nav w-120">
            <div className="header__logo">
              <img
                src="https://i.postimg.cc/7PXVht2v/Screenshot-2024-01-22-at-2-43-19-PM-fotor-bg-remover-20240122151630.png"
                alt="Logo"
                className="h-[52px] w-auto"
              />
            </div>
            <div className="header__nav__content">
              <div className="nav-close-icon"></div>
              <ul className="header__menu">
                <li className="menu__item">
                  <a
                    href="/"
                    className={"menu__link " + (home ? "active" : "")}
                  >
                    Home
                  </a>
                </li>
                <li className="menu__item">
                  <a
                    href="/wegrow"
                    className={"menu__link " + (whatwegrow ? "active" : "")}
                  >
                    What we grow
                  </a>
                </li>
                <li className="menu__item">
                  <a
                    href="#"
                    className={"menu__link " + (ourproduct ? "active" : "")}
                  >
                    Our Product
                  </a>
                </li>
                <li className="menu__item">
                  <a
                    href="/about"
                    className={"menu__link " + (aboutus ? "active" : "")}
                  >
                    About Us
                  </a>
                </li>
                <li className="menu__item">
                  <a
                    href="/contact"
                    className={"menu__link " + (contactus ? "active" : "")}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
              <div
                className="header__signup"
                style={{ display: "flex", gap: "20px" }}
              >
                <a href="#" className="btn btn__signup">
                  <i className="fas fa-user-plus"></i> Sign Up
                </a>
                <a href="#" className="btn btn__signup">
                  <i className="fas fa-user-plus"></i> Sign In
                </a>
              </div>
            </div>

            <div className="hamburger-menu-wrap">
              <div className="hamburger-menu">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};
