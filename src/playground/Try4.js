import React, { useRef, useState } from "react";
import { useSprings, animated, interpolate, config } from "react-spring";

function Try4() {
  const [on, toggle] = useState(true);
  const bars = [
    {
      key: "bar1",
      color: "green",
      from: {
        width: on ? "0px" : "100px",
      },
      to: {
        width: on ? "100px" : "0px",
      },
      config: on
        ? {
            mass: 20,
          }
        : {},
    },
    {
      key: "bar2",
      color: "blue",
      from: {
        width: on ? "0px" : "250px",
      },
      to: {
        width: on ? "250px" : "0px",
      },
      config: on
        ? {
            mass: 30,
          }
        : {},
    },
    {
      key: "bar3",
      color: "red",
      from: {
        width: on ? "0px" : "150px",
      },
      to: {
        width: on ? "150px" : "0px",
      },
      config: on
        ? {
            mass: 10,
            tension: 150,
            friction: 10,
          }
        : {},
    },
  ];

  const springs = useSprings(
    bars.length,
    bars.map(({ color, key, ...config }) => config)
  );
  return (
    <div>
      {springs.map((spring, index) => (
        <animated.div
          key={bars[index].key}
          style={{
            ...spring,
            height: "20px",
            marginBottom: "10px",
            backgroundColor: bars[index].color,
          }}
        />
      ))}
      <button
        onClick={() => {
          toggle(!on);
        }}
      >
        toggle
      </button>
    </div>
  );
}

export default Try4;
