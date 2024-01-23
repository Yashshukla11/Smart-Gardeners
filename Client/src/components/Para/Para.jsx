import React from "react";

export const Para = ({ heading, text }) => {
  return (
    <div className="testimonials__head w-[125rem]">
      <div className="invest__head">
        <h2 className="invest__title">{heading}</h2>
        <p className="invest__description">{text}</p>
      </div>
    </div>
  );
};
