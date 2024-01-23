import React from "react";

export const TextWithImage = ({ text }) => {
  return (
    <div className="special__animtext">
      <p
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/2832048/pexels-photo-2832048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
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
          fontSize: "150px",
          fontWeight: "900",
        }}
      >
        {text}
      </p>
    </div>
  );
};
