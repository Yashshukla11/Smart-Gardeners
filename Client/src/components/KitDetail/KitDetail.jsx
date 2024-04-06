import React from "react";
import { KitPoints } from "../KitPoints/KitPoints";
import { MiddlePara } from "../MiddlePara/MiddlePara";

[
  { heading: "headingone", constent: "content" },
  { heading: "headingone", constent: "content" },
];

export const KitDetail = ({ content, opp, image, heading }) => {
  return (
    <>
      <div style={{ marginTop: "70px" }}></div>
      <MiddlePara heading={heading} />

      <div
        className={`main flex ${
          opp ? "flex-col-reverse md:flex-row" : "flex-col md:flex-row"
        }`}
        style={{ height: "auto" }}
      >
        {opp ? (
          <img src={image} className="mainright w-[90vw] md:w-[30vw]" />
        ) : (
          ""
        )}
        <div className="left">
          <p
            className="textmain invest__description"
            style={{ fontFamily: "Quattrocento Sans, sans-serif" }}
          >
            {content.map((con, index) => (
              <KitPoints
                key={index}
                heading={con["heading"]}
                point={con["content"]}
              />
            ))}
          </p>
        </div>
        {!opp ? (
          <img src={image} className="mainright w-[90vw] md:w-[30vw]" />
        ) : (
          ""
        )}
      </div>
    </>
  );
};
