import React, { useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash, FaKey } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
// import { signUpWithEmailAndPassword } from "./firebaseAuth";

const Signup = () => {
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [passwordType, setPasswordType] = useState("password");
  const [error, setError] = useState({
    email: false,
    emailError: "",
    password: false,
    passwordError: "",
  });

  const navigate = useNavigate();

  const handleSignUpInfo = (e) => {
    // Your logic for handling signup info changes
    console.log("ok");
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      // Call the Firebase signup function
      const user = await signUpWithEmailAndPassword(
        signupInfo.email,
        signupInfo.password
      );

      // Handle successful signup (optional)
      console.log("User signed up:", user);

      // Redirect to another page after successful signup
      navigate("/dashboard");
    } catch (error) {
      // Handle signup error
      console.error("Error signing up:", error.message);
      setError({
        email: true,
        emailError: error.message,
        password: true,
        passwordError: error.message,
      });
    }
  };

  const passwordToggle = () => {
    // Your logic for toggling password visibility
  };
  return (
    <>
      <main style={{ height: "100vh", display: "flex" }}>
        <div
          style={{
            fontFamily: "ABeeZee",
            width: "100vw",
            overflowX: "hidden",
            margin: "auto",
          }}
        >
          <div style={{ display: "flex" }}>
            <div
              style={{
                backgroundColor: "#ffffff",
                width: "50%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1
                style={{
                  fontSize: "30px",
                  textAlign: "center",
                  fontWeight: "bolder",
                  marginTop: "30px",
                }}
              >
                <img
                  src="https://i.postimg.cc/sfGY7Q5S/Screenshot-2024-01-23-at-9-49-57-PM.png"
                  alt=""
                  style={{ width: "260px" }}
                />
              </h1>
              <div
                style={{
                  fontSize: "30px",
                  textAlign: "center",
                  fontWeight: "bolder",
                  marginBottom: "10%",
                  marginTop: "30px",
                  fontFamily: "Quattrocento Sans, sans-serif",
                }}
              >
                Log in to your account
              </div>

              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: "0 20%",
                }}
                onSubmit={handleSignUp}
              >
                <div style={{ width: "100%", textAlign: "start" }}>
                  <label
                    htmlFor="email"
                    style={{ fontFamily: "Quattrocento Sans, sans-serif" }}
                  >
                    Email
                  </label>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      textAlign: "start",
                    }}
                  >
                    <input
                      id="email"
                      type="text"
                      name="email"
                      onChange={handleSignupInfo}
                      value={signupInfo.email}
                      placeholder="Email"
                      required
                      style={{
                        width: "400px",
                        padding: "12px",
                        margin: "5px 0 10px",
                        borderRadius: "6px",
                        fontSize: "16px",
                        border: "2px solid #d8d8d8",
                        outline: "none",
                        boxSizing: "border-box",
                        paddingLeft: "35px",
                        borderColor:
                          error.email && error.emailError ? "red" : "#d8d8d8",
                      }}
                    />
                    <FaEnvelope
                      style={{
                        position: "absolute",
                        top: "20px",
                        left: "10px",
                        color: "#66bb6a",
                        fontSize: "16px",
                      }}
                    />
                  </div>

                  {error.email && error.emailError && (
                    <p
                      style={{
                        color: "red",
                        textAlign: "center",
                        fontSize: "12px",
                        width: "90%",
                        margin: "auto",
                      }}
                    >
                      {error.emailError}
                    </p>
                  )}
                </div>
                <div style={{ width: "100%", textAlign: "start" }}>
                  <label
                    htmlFor="password"
                    style={{ fontFamily: "Quattrocento Sans, sans-serif" }}
                  >
                    Password
                  </label>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      textAlign: "start",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        textAlign: "start",
                      }}
                    >
                      <input
                        id="password"
                        name="password"
                        type={passwordType}
                        onChange={handleSignupInfo}
                        value={signupInfo.password}
                        required
                        placeholder="Password"
                        style={{
                          width: "400px",
                          padding: "12px",
                          margin: "5px 0 10px",
                          borderRadius: "6px",
                          fontSize: "16px",
                          border: "2px solid #d8d8d8",
                          outline: "none",
                          boxSizing: "border-box",
                          paddingLeft: "35px",
                          borderColor:
                            error.password && error.passwordError
                              ? "red"
                              : "#d8d8d8",
                        }}
                      />
                      <FaKey
                        style={{
                          position: "absolute",
                          top: "20px",
                          left: "10px",
                          color: "#66bb6a",
                          fontSize: "16px",
                        }}
                      />
                      <div
                        onClick={passwordToggle}
                        style={{
                          position: "absolute",
                          width: "fit-content",
                          top: "30px",
                          right: "4%",
                          transform: "translateY(-50%)",
                          cursor: "pointer",
                        }}
                      >
                        <FaEye />
                        <FaEyeSlash />
                      </div>
                      {error.password && error.passwordError && (
                        <p
                          style={{
                            color: "red",
                            textAlign: "center",
                            fontSize: "12px",
                            width: "90%",
                            margin: "auto",
                          }}
                        >
                          {error.passwordError}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <button
                  style={{
                    width: "100%",
                    padding: "16px",
                    margin: "7px 0",
                    fontSize: "16px",
                    backgroundColor: "#66bb6a",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    marginBottom: "10px",
                    fontFamily: "Quattrocento Sans, sans-serif",
                  }}
                  type="submit"
                >
                  Sign Up
                </button>
              </form>
              <div
                style={{ textAlign: "center", marginBottom: "15px" }}
                className="dont-have-account"
              >
                <Link
                  to="/signup"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "16px",
                    fontFamily: "Quattrocento Sans, sans-serif",
                  }}
                  className="forgot-password"
                >
                  Don't have an account?
                </Link>
              </div>
              <div style={{ marginBottom: "20px" }}>Or</div>

              <div className="px-6 sm:px-0 max-w-sm">
                <button
                  type="button"
                  className="text-white w-full  bg-[#66bb6a] hover:bg-[#66bb6a]/90 focus:ring-4 focus:outline-none focus:ring-[#66bb6a]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
                  style={{
                    width: "250px",
                    height: "50px",
                    fontSize: "20px",
                    fontFamily: "Quattrocento Sans, sans-serif",
                  }}
                >
                  <svg
                    className="mr-2 -ml-1 w-10 h-10"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="google"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 488 512"
                  >
                    <path
                      fill="currentColor"
                      d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                    ></path>
                  </svg>
                  Sign in with Google<div></div>
                </button>
              </div>
            </div>
            {/* Left side of the login page */}
            <div style={{ backgroundColor: "#ffffff", width: "50%" }}>
              <img
                className="anim"
                src="https://i.postimg.cc/fLdzKL5K/55-Flat-City6-removebg-preview.png"
                alt="meeting"
              />
              {/* <h1
                style={{
                  textAlign: "center",
                  fontFamily: "Quattrocento Sans, sans-serif",
                  fontSize: "25px",
                }}
                className="left-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
              >
                Smart Gardening, Smarter Living...
              </h1> */}
              <h1
                className="text-transparent bg-clip-text bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 text-[80px] leading-tight anim"
                style={{
                  fontWeight: "bolder",
                  fontFamily: "Quattrocento Sans, sans-serif",
                  fontSize: "25px",
                  textAlign: "center",
                }}
              >
                Smart Gardening, Smarter Living...
              </h1>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Signup;
