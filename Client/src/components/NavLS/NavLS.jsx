import React, { useState, useEffect, useContext } from "react";
// import { auth } from "../../firebase/auth";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { UserContext } from "../../Context/UserContext";

export const Navbar = ({
  home,
  whatwegrow,
  ourproduct,
  aboutus,
  contactus,
  shop,
  toggle,
  showModal,
}) => {
  const { user, setUser } = useContext(UserContext);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { cartItems } = useContext(CartContext);
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

  // const confirmLogout = () => {
  //   signOut(auth)
  //     .then(() => {
  //       setUser(null);
  //       navigate("/signin");
  //     })
  //     .catch((err) => {
  //       alert(err.message);
  //     })
  //     .finally(() => {
  //       setShowLogoutModal(false);
  //     });
  // };

  const cancelLogout = () => {
    setShowLogoutModal(false);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="container" style={{ marginBottom: "30px" }}>
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
              className={`header__nav__content ${
                showMenu ? "shadow-2xl md:shadow-none" : "hide_nav"
              }`}
            >
              <div className="nav-close-icon" onClick={toggleMenu}>
                <svg
                  className="h-[50px] fill-[#66bb6a]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="back-arrow"
                >
                  <g data-name="Layer 2">
                    <path
                      d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"
                      data-name="arrow-ios-back"
                    ></path>
                  </g>
                </svg>
              </div>
              <ul className="header__menu flex opacity-100 md:opacity-0">
                <li className="w-auto">
                  <a
                    href="/"
                    className={"menu__link " + (home ? "active" : "")}
                  >
                    Home
                  </a>
                </li>
                <li className="w-auto">
                  <a
                    href="/wegrow"
                    className={"menu__link " + (whatwegrow ? "active" : "")}
                  >
                    Crop Diversity
                  </a>
                </li>
                <li className="w-auto">
                  <a
                    href="/kit"
                    className={"menu__link " + (ourproduct ? "active" : "")}
                  >
                    Our Kit
                  </a>
                </li>
                <li className="w-auto">
                  <a
                    href="/shop"
                    className={"menu__link " + (shop ? "active" : "")}
                  >
                    Shop
                  </a>
                </li>
                <li className="w-auto">
                  <a
                    href="/about"
                    className={"menu__link " + (aboutus ? "active" : "")}
                  >
                    About Us
                  </a>
                </li>
                <li className="w-auto">
                  <a
                    href="/contact"
                    className={"menu__link " + (contactus ? "active" : "")}
                  >
                    Contact Us
                  </a>
                </li>
                {shop ? (
                  <li className="w-auto cart-button" onClick={toggle}>
                    <a href="/cart">
                      {!showModal && `Cart (${cartItems.length})`}
                    </a>
                  </li>
                ) : (
                  ""
                )}
              </ul>
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
              <div className="hamburger-menu" onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </div>
          </nav>
        </header>
      </div>
      {showLogoutModal && (
        <div
          className="modal-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 10,
          }}
        >
          <div
            className="modal"
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "8px",
              maxWidth: "400px",
              textAlign: "center",
              height: "170px",
              width: "350px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "30px",
            }}
          >
            <p>Are you sure you want to log out?</p>
            <div
              className="modal-buttons"
              style={{ gap: "20px", display: "flex" }}
            >
              <button className="btn btn__yes" onClick={confirmLogout}>
                Yes
              </button>
              <button className="btn btn__no" onClick={cancelLogout}>
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
