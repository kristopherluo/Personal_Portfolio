import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Clemson University",
          "Computer Science",
          "Developer",
        ],
        autoStart: true,
        loop: true,
        delay: 75,
        deleteSpeed: 25,
      }}
    />
  );
}

export default Type;
