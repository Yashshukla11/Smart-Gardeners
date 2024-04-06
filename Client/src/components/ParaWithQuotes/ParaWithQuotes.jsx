import React from "react";

export const ParaWithQuotes = () => {
  return (
    <>
      <div className="testimonials__head w-[90vw] md:w-[60vw] mx-auto">
        <img
          src="https://i.postimg.cc/TYrz4YWs/quote.png"
          alt="Quote"
          className="testimonials__quote"
        />
        <h2 className="testimonials__title">
          Why Choose Smart Gardeners' Hydroponic Kit:
        </h2>

        <p className="invest__description">
          <b>Sustainability:</b>Our kits are conceived with environmental
          stewardship at the forefront, employing eco-friendly materials and
          championing sustainable gardening practices.
          <br />
          <br />
          <b>Efficiency:</b>
          Hydroponics empowers you to yield more with less space, water, and
          resources. It epitomizes the future of efficient and space-conscious
          gardening.
          <br />
          <br />
          <b>Education:</b> Immerse yourself in the art of hydroponic gardening
          through our extensive resources. Whether you're a neophyte or an adept
          gardener, our kit serves as your gateway to a greener and more
          knowledgeable lifestyle.
        </p>
      </div>
      <img
        className="md:w-[500px] w-[90vw] h-auto"
        style={{
          // height: "500px",
          // width: "auto",
          margin: "auto",
          marginTop: "70px",
        }}
        src="https://i.postimg.cc/ydnXys63/fanal-kit.png"
        alt=""
      />
    </>
  );
};
