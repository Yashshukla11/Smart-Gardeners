import React, { useState } from "react";

export const Header = () => {
  return (
    <>
      <section
        className="z-10"
        style={{
          marginBottom: "0",
          paddingBottom: "0",
        }}
      >
        <div className="sm:w-11/12 mx-auto">
          <div
            className={`py-8 sm:rounded-3xl relative w-[98vw] mx-auto md:w-full h-[520px] md:h-[620px] bg-cover lg:bg-center bg-no-repeat bg-left`}
          >
            <video
              className="rounded-3xl"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: "90%",
                boxShadow: "inset 0 0 70px 50px black",
              }}
              autoPlay
              loop
              muted
            >
              <source
                className="rounded-3xl"
                src="https://res.cloudinary.com/dybbxzxlz/video/upload/v1705918293/butterfly_-_12060_Original_jaupfx.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            <div>
              <div className="absolute bottom-[45%] sm:left-[6%] left-[5%] flex flex-col items-start flex-wrap gap-4">
                <h1
                  className="text-transparent bg-clip-text bg-gradient-to-r from-rose-100 to-teal-100 text-[68px] leading-tight anim"
                  style={{
                    fontWeight: "bolder",
                    fontFamily: "Quattrocento Sans, sans-serif",
                  }}
                >
                  Smart <br /> Gardeners
                </h1>
                <p
                  className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-100 to-teal-100 text-[30px] leading-tight"
                  style={{ fontFamily: "Quattrocento Sans, sans-serif" }}
                >
                  Smart Gardening, Smarter Living...
                </p>
              </div>

              <div className="hidden md:flex absolute bottom-[24%] sm:left-[6%] left-[5%] flex items-center flex-wrap gap-4">
                <a
                  className="sm:text-[20px] bg-button-primary text-[#ffffff] hover:bg-button-primary-hover transition-colors sm:px-10 px-3 py-3 rounded-md capitalize sm:w-auto w-full font-bold"
                  style={{ fontFamily: "Quattrocento Sans, sans-serif" }}
                  href="/wegrow"
                >
                  Start Discovery
                </a>

                <a
                  className="sm:text-[20px] text-white sm:px-10 px-3 py-3 rounded-md border-[1px] border-white capitalize sm:w-auto w-full font-bold"
                  style={{ fontFamily: "Quattrocento Sans, sans-serif" }}
                  href="/contact"
                >
                  Contact us
                </a>
              </div>
            </div>
            {/* <article className="lg:flex hidden items-end absolute top-[30%] right-0 w-[30%] border-l-2 h-1/2 px-2 border-l-white">
              <div
                className="text-white text-[26px] w-[80%]"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                Where nature embraces tech, a synergy of simplicity and
                innovation blossoms beautifully.
              </div>
            </article> */}
          </div>
        </div>
      </section>

      <section className="mt-[-100px] items-center stats_box py-10 grid place-items-center lg:grid-cols-4 grid-cols-2 gap-10 md:gap-4 sm:w-9/12 w-11/12 mx-auto -mt-8 px-4">
        <div
          className="anim justify-center flex flex-col align-middle items-center"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          <h1 className="md:text-[40px] text-[25px] mb-5 font-bold ">
            30+ Mha
          </h1>
          <p className="text-center">Land Degraded</p>
        </div>
        <div
          className="anim justify-center flex flex-col align-middle items-center"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          <h1 className="md:text-[40px] text-[25px] mb-5 font-bold ">~22%</h1>
          <p className="text-center">Forest Cover Left</p>
        </div>
        <div
          className="anim justify-center flex flex-col align-middle items-center"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          <h1 className="md:text-[40px] text-[25px] mb-5 font-bold ">
            1.4 Billion+
          </h1>
          <p className="text-center">Population</p>
        </div>
        <div
          className="anim justify-center flex flex-col align-middle items-center"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          <h1 className="md:text-[40px] text-[25px] mb-5 font-bold ">3 x</h1>
          <p className="text-center">
            Rise of Global Warming <b>(Since 1982)</b>
          </p>
        </div>
      </section>
    </>
  );
};
