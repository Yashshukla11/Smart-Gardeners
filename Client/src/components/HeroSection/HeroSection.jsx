import React from "react";

export const HeroSection = () => {
  return (
    <>
      <section className="hero w-[75vw]">
        <div className="flex flex-col">
          <div className="hero__text mt-[40px] md:mt-[70px] flex flex-col justify-end">
            <h1 className="hero__title">Our Story</h1>
            <p className="hero__description">
              At <b>Smart Gardeners</b>, our journey began with a shared passion
              for sustainable agriculture and a commitment to address the
              challenges posed by modern living. We embarked on a mission to
              redefine how we connect with nature, even in the heart of urban
              landscapes.
            </p>
          </div>
          <div className="hero__img">
            <img
              className="h-[200px] md:h-[800px] 2xl:h-[900px]"
              src="https://i.postimg.cc/XqnBRJDN/hero.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};
