import React, { useRef, useState } from "react";
import { useSpring, animated, interpolate, config } from "react-spring";

function Try3() {
  const [on1, toggle1] = useState(true);
  const { y, c } = useSpring({
    from: { y: 0, c: "green" },
    y: on1 ? 0 : 1,
    c: on1 ? 0 : 1,
    config: { mass: 1, tension: 500, friction: 1 },
  });
  return (
    <div style={{ marginTop: "100px" }}>
      <animated.h2
        style={{
          transform: y
            .interpolate({
              range: [0, 0.25, 0.5, 0.75, 1],
              output: [0, 500, 200, 800, 500],
            })
            .interpolate((y) => `translateX(${y}px)`),
          color: c
            .interpolate({
              range: [0, 0.5, 1],
              output: ["red", "blue", "green"],
            })
            .interpolate((c) => c),
        }}
      >
        {on1 ? "here" : "there"}
      </animated.h2>
      <button onClick={() => toggle1(!on1)}>toggle</button>
    </div>
  );
}

export default Try3;
