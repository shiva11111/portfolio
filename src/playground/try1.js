import React, { useRef, useState } from "react";
import { useSpring, animated, interpolate } from "react-spring";

function Try1() {
  const [on, toggle] = useState(true);

  const opa = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });
  const colorAnime = useSpring({
    from: { color: "blue" },
    to: { color: `rgb(255,0,255)` },
  });
  const multiAnime = useSpring({
    from: { opacity: 0, color: "red" },
    to: [
      { opacity: 1, color: "#ffaaee" },
      { opacity: 1, color: "red" },
      { opacity: 0.5, color: "#008000" },
      { opacity: 0.8, color: "black" },
    ],
  });
  const toggleA = useSpring({
    color: on ? "blue" : "red",
  });

  return (
    <div>
      <animated.h1 style={opa}>Hello</animated.h1>
      <animated.h1 style={colorAnime}>world</animated.h1>
      <animated.h1 style={multiAnime}>hello again</animated.h1>
      <animated.h1 style={toggleA}>{on ? "blue" : "red"}</animated.h1>
      <button onClick={() => toggle(!on)}>Toggle</button>
    </div>
  );
}

export default Try1;
