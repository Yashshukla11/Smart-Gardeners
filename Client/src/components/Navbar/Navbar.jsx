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

  const confirmLogout = () => {
    localStorage.removeItem("token");
    setShowLogoutModal(false);
    setUser(null);
    navigate("/");
  };

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
            className={`header__nav w-[100vw] items-center align-middle px-[30px] md:px-[100px] bg-white ${
              isSticky ? "fixed top-0 z-10 shadow-lg" : ""
            }`}
          >
            <div className="header__logo">
              <a href="/">
                <img
                  src="https://i.postimg.cc/7PXVht2v/Screenshot-2024-01-22-at-2-43-19-PM-fotor-bg-remover-20240122151630.png"
                  alt="Logo"
                  className="h-[52px] w-auto"
                />
              </a>
            </div>
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
              <ul className="header__menu">
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
              </ul>
              <div
                className="header__signup flex flex-col md:flex-row"
                style={{ display: "flex", gap: "20px", alignItems: "center" }}
              >
                {user && user ? (
                  shop ? (
                    <li className="w-auto cart-button" onClick={toggle}>
                      <a href="/cart">
                        {!showModal && (
                          <svg
                            className="w-[30px]"
                            xmlns="http://www.w3.org/2000/svg"
                            id="cart"
                            x="0"
                            y="0"
                            version="1.1"
                            viewBox="0 0 52 52"
                            xml:space="preserve"
                          >
                            <path d="m43.51 32.165 6.44-19.17a1 1 0 0 0-.14-.9.986.986 0 0 0-.81-.41H12.74l-1.29-5.21c-.47-1.66-2-2.82-3.72-2.82H3c-.55 0-1 .44-1 1 0 .55.45 1 1 1h4.73c.83 0 1.57.56 1.78 1.33l7.99 32.18a4.696 4.696 0 0 0-3.32 4.49c0 2.58 2.1 4.69 4.69 4.69 2.58 0 4.68-2.11 4.68-4.69 0-1-.31-1.93-.84-2.69h15.88c-.54.76-.85 1.69-.85 2.69 0 2.58 2.1 4.69 4.68 4.69 2.59 0 4.69-2.11 4.69-4.69 0-2.59-2.1-4.69-4.69-4.69-.04 0-.09 0-.13.01-.02-.01-.04-.01-.06-.01H19.51l-1.52-6.11h24.57c.43 0 .81-.28.95-.69z"></path>
                          </svg>
                        )}
                      </a>
                    </li>
                  ) : (
                    <div className="flex md:flex-row flex-col justify-center align-middle items-center gap-5">
                      <h1>Hi, {user?.username}</h1>
                      <img
                        className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                        src={
                          user?.photoURL ||
                          `https://ui-avatars.com/api/?name=${user.username}&background=29335C&size=128&color=fff&format=png&length=1`
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
                    </div>
                  )
                ) : (
                  <>
                    {shop ? (
                      <li className="w-auto cart-button" onClick={toggle}>
                        <a href="/cart">
                          {!showModal && (
                            <svg
                              className="w-[30px]"
                              xmlns="http://www.w3.org/2000/svg"
                              id="cart"
                              x="0"
                              y="0"
                              version="1.1"
                              viewBox="0 0 52 52"
                              xml:space="preserve"
                            >
                              <path d="m43.51 32.165 6.44-19.17a1 1 0 0 0-.14-.9.986.986 0 0 0-.81-.41H12.74l-1.29-5.21c-.47-1.66-2-2.82-3.72-2.82H3c-.55 0-1 .44-1 1 0 .55.45 1 1 1h4.73c.83 0 1.57.56 1.78 1.33l7.99 32.18a4.696 4.696 0 0 0-3.32 4.49c0 2.58 2.1 4.69 4.69 4.69 2.58 0 4.68-2.11 4.68-4.69 0-1-.31-1.93-.84-2.69h15.88c-.54.76-.85 1.69-.85 2.69 0 2.58 2.1 4.69 4.68 4.69 2.59 0 4.69-2.11 4.69-4.69 0-2.59-2.1-4.69-4.69-4.69-.04 0-.09 0-.13.01-.02-.01-.04-.01-.06-.01H19.51l-1.52-6.11h24.57c.43 0 .81-.28.95-.69z"></path>
                            </svg>
                          )}
                        </a>
                      </li>
                    ) : (
                      ""
                    )}
                    <div className="flex gap-10">
                      <a href="/signup" className="btn btn__signup">
                        <i className="fas fa-user-plus"></i> Sign Up
                      </a>
                      <a href="/signin" className="btn btn__signup">
                        <i className="fas fa-sign-in-alt"></i> Sign In
                      </a>
                    </div>
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
