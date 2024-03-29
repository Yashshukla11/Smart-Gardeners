import React from "react";

export const TextWithImage = ({ text }) => {
  return (
    <div className="">
      <p
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/134072/pexels-photo-134072.jpeg?auto=compress&cs=tinysrgb&w=1300")',
          backgroundPosition: "50% 50%",
          backgroundRepeat: "no-repeat",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          animationName: "masked-animation",
          animationDuration: "10s",
          animationIterationCount: "infinite",
          animationTimingFunction: "linear",
          textAlign: "center",
          // fontSize: "150px",
          // fontWeight: "900",
        }}
      >
        {text}
      </p>
    </div>
  );
};
