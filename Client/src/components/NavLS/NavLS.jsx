import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/auth"; // Make sure to import the signOut function
import { UserContext } from "../../Context/UserContext";

export const Navbar = ({
  home,
  whatwegrow,
  ourproduct,
  aboutus,
  contactus,
}) => {
  const { user, setUser } = useContext(UserContext);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigate = useNavigate();

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     setUser(user); // Update the user state when the authentication state changes
  //   });

  //   return () => unsubscribe(); // Unsubscribe from the auth state change listener when the component unmounts
  // }, []);

  const confirmLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        navigate("/signin");
      })
      .catch((err) => {
        alert(err.message);
      })
      .finally(() => {
        setShowLogoutModal(false);
      });
  };

  const cancelLogout = () => {
    setShowLogoutModal(false);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div className="container">
        <header>
          <nav
            className={`header__nav w-[100vw] px-[30px] md:px-[100px] bg-white ${
              isSticky ? "fixed top-0 z-10 shadow-lg" : ""
            }`}
          >
            {/* <div className="header__logo">
              <img
                src="https://i.postimg.cc/7PXVht2v/Screenshot-2024-01-22-at-2-43-19-PM-fotor-bg-remover-20240122151630.png"
                alt="Logo"
                className="h-[52px] w-auto"
              />
            </div> */}
            <div
              className={`header__nav__content ${showMenu ? "" : "hide_nav"}`}
            >
              <div className="nav-close-icon" onClick={toggleMenu}></div>
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
                    href="/kit"
                    className={"menu__link " + (ourproduct ? "active" : "")}
                  >
                    Our Kit
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
              {/* <div
                className="header__signup"
                style={{ display: "flex", gap: "20px" }}
              >
                <a href="/signup" className="btn btn__signup">
                  <i className="fas fa-user-plus"></i> Sign Up
                </a>
                <a href="/signin" className="btn btn__signup">
                  <i className="fas fa-user-plus"></i> Sign In
                </a>
              </div> */}
              <div
                className="header__signup"
                style={{ display: "flex", gap: "20px", alignItems: "center" }}
              >
                {user && user.uid ? (
                  <>
                    <h1>Hi, {user?.displayName}</h1>
                    <img
                      className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                      src={
                        user?.photoURL ||
                        `https://ui-avatars.com/api/?name=${user.displayName}&background=29335C&size=128&color=fff&format=png&length=1`
                      }
                      alt="Bordered avatar"
                      style={{ width: "40px", height: "40px" }}
                    />

                    <div
                      className="btn btn__signup cursor-pointer"
                      onClick={() => setShowLogoutModal(true)}
                    >
                      <i className="fas fa-sign-out-alt"></i> Log out
                    </div>
                  </>
                ) : (
                  <>
                    <a href="/signup" className="btn btn__signup">
                      <i className="fas fa-user-plus"></i> Sign Up
                    </a>
                    <a href="/signin" className="btn btn__signup">
                      <i className="fas fa-sign-in-alt"></i> Sign In
                    </a>
                  </>
                )}
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
