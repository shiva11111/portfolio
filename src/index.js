import { render } from "react-dom";
import React, { useState } from "react";
import Portfolio from "./components/Portfolio";
import "./css/main.css";
// import Try1 from "./playground/try1";
// import Try2 from "./playground/Try2";
// import Try3 from "./playground/Try3";
// import Try4 from "./playground/Try4";
// import Try5 from "./playground/Trail5";
import Splash from "./components/splash.js";
function App() {
  const [crash, toggleCrash] = useState(false);
  return (
    <div style={{ position: "relative" }}>
      <Splash toggleCrash={toggleCrash} />
      {/* <Try1 />
      <Try2 />
      <Try3 />
      <Try4 />
      <Try5 /> */}
      {crash ? <Portfolio /> : <></>}
      {/* <Portfolio /> */}
    </div>
  );
}

render(<App />, document.getElementById("root"));
