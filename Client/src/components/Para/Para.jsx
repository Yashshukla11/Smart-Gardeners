import React from "react";

export const Para = ({ heading, text, fontSize }) => {
  return (
    <div className="testimonials__head" style={{ margin: "0" }}>
      <div className="invest__head">
        <h2
          className="invest__title"
          style={{ fontSize: `${fontSize && fontSize ? fontSize : null}` }}
        >
          {heading && heading}
        </h2>
        <p className="invest__description">{text && text}</p>
      </div>
    </div>
  );
};
