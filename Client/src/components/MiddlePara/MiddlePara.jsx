import React from "react";

export const MiddlePara = ({ heading, text }) => {
  return (
    <div
      className="testimonials__head md:w-auto w-[90vw] flex justify-center text-center"
      style={{ margin: "auto" }}
    >
      <div className="invest__head text-center">
        <h2 className="invest__title">{heading}</h2>
        <p className="invest__description">{text}</p>
      </div>
    </div>
  );
};
