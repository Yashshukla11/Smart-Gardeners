import React, { useState, useEffect } from "react";

export const ContainerSteps = () => {
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const worksSection = document.querySelector(".works__content");
    const progressbar = worksSection.querySelector(".form_progressbar");
    const progressbarSteps = progressbar.querySelectorAll(".progressbar__step");
    const firstStep = worksSection.querySelector(".first_step");

    const handleClick = (event) => {
      if (event.target && event.target.nodeName === "LI") {
        const dataStep = Number(event.target.getAttribute("data-step"));
        const newActiveStep = dataStep;

        setActiveStep(newActiveStep);

        for (
          let index = newActiveStep - 1;
          index < progressbarSteps.length;
          index++
        ) {
          progressbarSteps[index].classList.remove("active");
        }
        for (let index = newActiveStep - 1; index > 0; index--) {
          progressbarSteps[index].classList.add("active");
        }
        event.target.classList.add("active");
        firstStep.style.marginLeft = `-${(newActiveStep - 1) * 100}%`;
      }
    };

    progressbar.addEventListener("click", handleClick);

    // Cleanup function
    return () => {
      progressbar.removeEventListener("click", handleClick);
    };
  }, []); // Empty dependency array means this effect runs once, similar to componentDidMount

  return (
    <section className="how-is-works w-120">
      <div className="works__content">
        <div className="works__head">
          <h2 className="works__title">Why Hydroponics?</h2>
          <p className="works__description">
            Unlocking the Future of Farming
            <br />
            Explore the transformative power of hydroponics, redefining how we
            grow plants sustainably.
          </p>
        </div>
        <div className="mt-[50px] mb-[50px]">
          <ul className="form_progressbar">
            <li className="progressbar__step active" data-step="1">
              01
            </li>
            <li className="progressbar__step" data-step="2">
              02
            </li>
            <li className="progressbar__step" data-step="3">
              03
            </li>
            <li className="progressbar__step" data-step="4">
              04
            </li>
          </ul>
        </div>
        <div className="works__footer">
          <div className="works__step__content first_step">
            <h3 className="works__step_title">Conserving Nature</h3>
            <p className="works__step_description">
              Protecting the environment is at the heart of hydroponics. By
              cultivating plants without soil, we contribute to the preservation
              of our depleting natural resources.
            </p>
          </div>
          <div className="works__step__content">
            <h3 className="works__step_title">Urban Living</h3>
            <p className="works__step_description">
              Hydroponics is the answer for those who choose to live in
              highrises. It allows us to bring the essence of nature to urban
              spaces without the constraints of traditional gardening.
            </p>
          </div>
          <div className="works__step__content">
            <h3 className="works__step_title">Global Warming Mitigation</h3>
            <p className="works__step_description">
              Hydroponics is a proactive step in combating global warming. By
              minimizing the use of fertilizers and pesticides and relying on
              organic matter and water, we not only protect the environment but
              also promote sustainable farming practices.
            </p>
          </div>
          <div className="works__step__content">
            <h3 className="works__step_title"> Futuristic Agriculture</h3>
            <p className="works__step_description">
              Hydroponics embodies the future of agriculture, offering precise
              nutrient control and resource efficiency. Grow smarter with
              sustainable innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
