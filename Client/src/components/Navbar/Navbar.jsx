import React from "react";

export const Navbar = () => {
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
                  <a href="#" className="menu__link active">
                    Home
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Product
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Team
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Blog
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Contact
                  </a>
                </li>
              </ul>
              <div className="header__signup">
                <a href="#" className="btn btn__signup">
                  <i className="fas fa-user-plus"></i> Sign Up
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
