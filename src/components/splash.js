import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import UIfx from "uifx";
import boopmp3 from "../svg/Blop-Mark_DiAngelo-79054334.mp3";
import buzz from "../svg/Woosh-Mark_DiAngelo-4778593.mp3";
function Splash(props) {
  const [onlight, toggle] = useState(false);
  const [shrink, toggleShrink] = useState(false);
  const [none, toggleDisplay] = useState(false);
  const beep = new UIfx(boopmp3);
  const buzzing = new UIfx(buzz, {
    volume: 1,
  });
  const spring5 = useSpring({
    to: {
      transform: shrink ? "scale(0)" : "scale(1)",
      display: none ? "none" : "block",
    },
  });
  // const springref = useRef();
  // const springref1 = useRef();
  const spring1 = useSpring({
    from: {
      left: "100%",
    },
    to: [
      {
        left: "50%",
      },
    ],
    config: {
      mass: 3,
      tension: 140,
      friction: 10,
    },
  });
  const spring = useSpring({
    from: {
      left: "0%",
    },
    to: [
      {
        left: "50%",
      },
    ],

    config: {
      mass: 5,
      tension: 150,
      friction: 20,
    },
  });
  const spring2 = useSpring({
    from: {
      left: "0%",
    },
    to: [
      {
        left: "50%",
      },
    ],
    config: {
      mass: 7,
      tension: 140,
      friction: 20,
    },
  });
  const spring3 = useSpring({
    from: {
      transform: "rotate(40deg)",
    },
    to: [
      {
        transform: "rotate(0deg)",
      },
    ],
    config: {
      mass: 5,
      friction: 1,
      tension: 250,
    },
  });
  return (
    <animated.div
      style={{
        ...spring5,
        overflow: "hidden",
        position: "absolute",
        height: "100vh",
        width: "100vw",
        background: onlight ? "rgba(253, 180, 65, 0.4)" : "black",
      }}
    >
      <div
        style={{
          ...spring,
          height: "100%",
          position: "relative",
        }}
        className="setfontsize"
      >
        <animated.h2
          style={{
            ...spring,
            position: "absolute",
            transform: "translate(-50%,-50%)",
            top: "15%",
            color: "rgba(4,177,167)",
            // backgroundColor:
            //   "linear-gradient(90deg, rgba(4,177,167,1) 0%, rgba(38,168,147,1) 100%)",
            // WebKitBackgroundClip: "text",
            // backgroundClip: "text",
            // WebkitTextFillColor: "transparent",
          }}
        >
          Toggle Switch
        </animated.h2>

        <animated.h2
          style={{
            ...spring1,
            position: "absolute",
            // color: "transparent",
            transform: "translate(-50%,-50%)",
            top: "25%",
            color: "rgb(215,31,84)",
            // backgroundColor:
            //   "linear-gradient(90deg, rgba(215,31,84,1) 0%, rgba(168,38,86,1) 100%)",
            // WebKitBackgroundClip: "text",
            // backgroundClip: "text",
            // WebkitTextFillColor: "transparent",
          }}
        >
          To Turn on
        </animated.h2>

        <animated.h2
          style={{
            ...spring2,
            position: "absolute",
            // color: "green",
            transform: "translate(-50%,-50%)",
            top: "35%",
            color: "rgb(215,142,31)",
            // backgroundColor:
            //   "linear-gradient(90deg, rgba(215,142,31,1) 0%, rgba(168,129,38,1) 100%)",
            // WebKitBackgroundClip: "text",
            // backgroundClip: "text",
            // WebkitTextFillColor: "transparent",
          }}
        >
          Light
        </animated.h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            transformOrigin: "left bottom",
          }}
        >
          <animated.div style={{ ...spring3 }}>
            <svg
              id="Capa_1"
              enableBackground="new 0 0 500 500"
              height="100"
              viewBox="0 0 500 500"
              width="100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="m256 419.875c-29.963 0-54.253-24.29-54.253-54.253v-42.725h108.507v42.725c-.001 29.963-24.291 54.253-54.254 54.253z"
                  fill={onlight ? "rgb(255, 162, 15)" : "white"}
                />
                <g>
                  <path
                    d="m256 266.175c-4.142 0-7.5-3.358-7.5-7.5v-251.175c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v251.175c0 4.142-3.358 7.5-7.5 7.5z"
                    fill="#465a61"
                  />
                </g>
                <path
                  d="m291.869 224.902h-71.738v-72.215c0-10.171 8.245-18.417 18.417-18.417h34.905c10.171 0 18.417 8.245 18.417 18.417v72.215z"
                  fill="#596c76"
                />
                <path
                  d="m291.869 178.015v1.571l-55.667-4.689c-70.892 9.658-125.524 70.431-125.524 143.974v42.515c0 5.523 4.477 10 10 10h270.643c5.523 0 10-4.477 10-10v-42.515c.001-67.879-46.541-124.884-109.452-140.856z"
                  fill={onlight ? "#7a8c98" : "#596c76"}
                />
                <g>
                  <path
                    d="m256 512c-4.142 0-7.5-3.358-7.5-7.5v-45.045c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v45.045c0 4.142-3.358 7.5-7.5 7.5z"
                    fill={onlight ? "#fdb441" : "white"}
                  />
                </g>
                <g>
                  <path
                    d="m368.691 468.919c-1.921 0-3.841-.733-5.306-2.199l-31.82-31.852c-2.927-2.931-2.925-7.679.005-10.607 2.931-2.927 7.68-2.925 10.607.005l31.82 31.852c2.927 2.931 2.925 7.679-.005 10.607-1.465 1.463-3.383 2.194-5.301 2.194z"
                    fill={onlight ? "#fdb441" : "white"}
                  />
                </g>
                <g>
                  <path
                    d="m143.309 468.919c-1.918 0-3.836-.731-5.301-2.194-2.93-2.928-2.933-7.676-.005-10.607l31.82-31.852c2.928-2.93 7.677-2.932 10.607-.005 2.93 2.928 2.933 7.676.005 10.607l-31.82 31.852c-1.465 1.466-3.386 2.199-5.306 2.199z"
                    fill={onlight ? "#fdb441" : "white"}
                  />
                </g>
                {onlight ? (
                  <path
                    d="m256 173.55c-6.732 0-13.354.468-19.843 1.354 70.87 9.678 125.479 70.44 125.479 143.967v42.515c0 5.523-4.477 10-10 10h39.685c5.523 0 10-4.477 10-10v-42.515c.001-80.259-65.062-145.321-145.321-145.321z"
                    fill="#596c76"
                  />
                ) : (
                  <path />
                )}
              </g>
            </svg>
          </animated.div>
          <animated.div style={{ ...spring3 }}>
            <svg
              id="Capa_1"
              enableBackground="new 0 0 500 500"
              height="100"
              viewBox="0 0 500 500"
              width="100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="m256 419.875c-29.963 0-54.253-24.29-54.253-54.253v-42.725h108.507v42.725c-.001 29.963-24.291 54.253-54.254 54.253z"
                  fill={onlight ? "rgb(255, 162, 15)" : "white"}
                />
                <g>
                  <path
                    d="m256 266.175c-4.142 0-7.5-3.358-7.5-7.5v-251.175c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v251.175c0 4.142-3.358 7.5-7.5 7.5z"
                    fill="#465a61"
                  />
                </g>
                <path
                  d="m291.869 224.902h-71.738v-72.215c0-10.171 8.245-18.417 18.417-18.417h34.905c10.171 0 18.417 8.245 18.417 18.417v72.215z"
                  fill="#596c76"
                />
                <path
                  d="m291.869 178.015v1.571l-55.667-4.689c-70.892 9.658-125.524 70.431-125.524 143.974v42.515c0 5.523 4.477 10 10 10h270.643c5.523 0 10-4.477 10-10v-42.515c.001-67.879-46.541-124.884-109.452-140.856z"
                  fill={onlight ? "#7a8c98" : "#596c76"}
                />
                <g>
                  <path
                    d="m256 512c-4.142 0-7.5-3.358-7.5-7.5v-45.045c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v45.045c0 4.142-3.358 7.5-7.5 7.5z"
                    fill={onlight ? "#fdb441" : "white"}
                  />
                </g>
                <g>
                  <path
                    d="m368.691 468.919c-1.921 0-3.841-.733-5.306-2.199l-31.82-31.852c-2.927-2.931-2.925-7.679.005-10.607 2.931-2.927 7.68-2.925 10.607.005l31.82 31.852c2.927 2.931 2.925 7.679-.005 10.607-1.465 1.463-3.383 2.194-5.301 2.194z"
                    fill={onlight ? "#fdb441" : "white"}
                  />
                </g>
                <g>
                  <path
                    d="m143.309 468.919c-1.918 0-3.836-.731-5.301-2.194-2.93-2.928-2.933-7.676-.005-10.607l31.82-31.852c2.928-2.93 7.677-2.932 10.607-.005 2.93 2.928 2.933 7.676.005 10.607l-31.82 31.852c-1.465 1.466-3.386 2.199-5.306 2.199z"
                    fill={onlight ? "#fdb441" : "white"}
                  />
                </g>
                {onlight ? (
                  <path
                    d="m256 173.55c-6.732 0-13.354.468-19.843 1.354 70.87 9.678 125.479 70.44 125.479 143.967v42.515c0 5.523-4.477 10-10 10h39.685c5.523 0 10-4.477 10-10v-42.515c.001-80.259-65.062-145.321-145.321-145.321z"
                    fill="#596c76"
                  />
                ) : (
                  <path />
                )}
              </g>
            </svg>
          </animated.div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <input
            type="checkbox"
            id="switch"
            onClick={() => {
              beep.play();
              setTimeout(() => {
                buzzing.play();
                toggle(!onlight);
              }, 500);
            }}
          />
          <label style={{ outline: "none" }} htmlFor="switch">
            Toggle
          </label>
        </div>
        <div
          style={{
            position: "absolute",
            top: "60%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          {onlight ? (
            <button
              className="splash-button"
              onClick={() => {
                toggleShrink(!shrink);
                setTimeout(() => {
                  toggleDisplay(!none);
                }, 500);
                props.toggleCrash(true);
              }}
            >
              CRASH
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </animated.div>
  );
}

export default Splash;
