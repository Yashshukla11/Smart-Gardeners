import React from "react";

export const ContainerWithButton = ({ content, button }) => {
  return (
    <section className="farm-invest w-105">
      <h2 className="farm-invest__title">{content}</h2>
      <a href="/kit" className="btn btn__farm--invest">
        {button}
      </a>
    </section>
  );
};
