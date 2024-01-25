import React from "react";

export const KitPoints = ({ heading, point }) => {
  return (
    <>
      <span className="invest__description">&#x2022; {heading}: </span>
      {point}
      <br></br>
      <br></br>
    </>
  );
};
