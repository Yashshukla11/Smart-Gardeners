import React from "react";

export const CardSection = () => {
  return (
    <div className="opportunities__content w-105">
      <div className="opportunities__head">
        <h2 className="opportunities__title">The Challenge</h2>
        <p className="opportunities__description">
          Growing environmental concerns pose a challenge as our soil degrades,
          and forests vanish. Highrises burgeon, intensifying the demand for
          alternative, sustainable solutions.
        </p>
      </div>
      <div className="opportunities__body">
        <div className="opportunity">
          <img
            src="https://i.postimg.cc/j5TCKfmV/forest.png"
            alt="Icon"
            className="w-[60px]"
          />
          <h4 className="opportunity__title">
            Vanishing Forest Covers: A Call to Action
          </h4>
          <p className="opportunity__description">
            Our lush forest covers are depleting, urging us to rethink our
            approach to cultivating the land. The urgency to preserve nature has
            never been greater.
          </p>
        </div>

        <div className="opportunity active">
          <img
            src="https://i.postimg.cc/FK7wRnt3/cityscape.png"
            alt="Icon"
            className="w-[60px]"
          />
          <h4 className="opportunity__title">
            Urbanization and Impractical Gardening
          </h4>
          <p className="opportunity__description">
            With the global population choosing towering highrises as homes, the
            age-old method of growing plants in soil becomes impractical. The
            challenge lies in adapting to urban living while sustaining our
            connection with nature
          </p>
        </div>
        <div className="opportunity">
          <img
            src="https://i.postimg.cc/RF0hNmSG/greenhouse.png"
            alt="Icon"
            className="w-[60px]"
          />
          <h4 className="opportunity__title">
            Food and Shelter Demands Intensify
          </h4>
          <p className="opportunity__description">
            As the need for food and shelter intensifies with a growing global
            populace, a pressing demand emerges for alternative, sustainable
            solutions. The time to innovate is now.
          </p>
        </div>
      </div>
    </div>
  );
};
