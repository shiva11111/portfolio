import React, { useRef, useState } from "react";
import { useTrail, animated } from "react-spring";
const bars = ["red", "green", "blue", "orange", "yellow"];

function Try5() {
  const [up, setUp] = useState(true);
  const trailSpring = useTrail(bars.length, {
    from: { height: up ? "0px" : "100px" },
    to: { height: up ? "100px" : "0px" },
    // config: { mass: 10, tension: 150, friction: 1 },
  });
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          flexDirection: "row",
        }}
      >
        {trailSpring.map((spring, index) => (
          <animated.div
            key={index}
            style={{
              ...spring,
              width: "10px",
              marginRight: "10px",
              backgroundColor: bars[index],
              transformOrigin: "bottom",
            }}
          />
        ))}
      </div>
      <button onClick={() => setUp(!up)}>toggle</button>
    </div>
  );
}

export default Try5;
