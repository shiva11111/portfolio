import React, { useRef, useState } from "react";
import { useSpring, animated, interpolate, config } from "react-spring";

function Try2() {
  const [on, toggle] = useState(true);
  const { y, c } = useSpring({
    from: { y: 100, c: "green" },
    y: on ? 100 : 250,
    // c: on ? "green" : "red",
    config: { mass: 1, tension: 500, friction: 1 },
  });
  return (
    <div>
      <animated.h1
        style={{
          transform: y.interpolate((y) => `translateY(${y}px)`),
          //   color: c.interpolate((c) => c),
        }}
      >
        {on ? "here" : "there"}
      </animated.h1>
      <button onClick={() => toggle(!on)}>toggle</button>
    </div>
  );
}

export default Try2;
