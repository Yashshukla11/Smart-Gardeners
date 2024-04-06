import React from "react";

export const TextWithImage = ({ text }) => {
  return (
    <p
      className="text-[10vw] md:text-[140px]"
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
        // fontSize: "10vw",
        width: "100vw",
        fontWeight: "900",
      }}
    >
      {text}
    </p>
  );
};
