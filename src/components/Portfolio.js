import React, { useState } from "react";
import Card from "./Card";
import Arrow from "./Arrow";
import CardData from "../data/images";
import CertData from "../data/certificates";
export default function Portfolio() {
  //projects start
  const [state, setState] = useState({
    activeIndex: 0,
  });
  const { activeIndex } = state;
  const [scaledu, setScaledu] = useState(true);
  const nextSlide = () => {
    setScaledu(true);
    if (activeIndex === CardData.length - 1) {
      setState({
        ...state,
        activeIndex: 0,
      });
    } else {
      setState({
        ...state,
        activeIndex: activeIndex + 1,
      });
    }
  };
  const prevSlide = () => {
    setScaledu(true);
    if (activeIndex === 0) {
      setState({
        ...state,
        activeIndex: CardData.length - 1,
      });
    } else {
      setState({
        ...state,
        activeIndex: activeIndex - 1,
      });
    }
  };
  //projects end
  // certificates starts
  const [state1, setState1] = useState({
    activeIndex1: 0,
  });
  const { activeIndex1 } = state1;
  const [scaledu1, setScaledu1] = useState(true);
  const nextSlide1 = () => {
    setScaledu1(true);
    if (activeIndex1 === CertData.length - 1) {
      setState1({
        ...state1,
        activeIndex1: 0,
      });
    } else {
      setState1({
        ...state1,
        activeIndex1: activeIndex1 + 1,
      });
    }
  };
  const prevSlide1 = () => {
    setScaledu1(true);
    if (activeIndex1 === 0) {
      setState1({
        ...state1,
        activeIndex1: CertData.length - 1,
      });
    } else {
      setState1({
        ...state1,
        activeIndex1: activeIndex1 - 1,
      });
    }
  };
  // certificates end
  return (
    <div className="container">
      <div className="navbar">
        <div className="logo">
          <img
            src={require("../images/Icon material-devices.png")}
            alt="logo"
          />
        </div>
        <div className="menu">
          <a href="#projects"> Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#goodat">Good at</a>
        </div>
      </div>
      <section className="about" id="about">
        <div className="about-1">
          <h1>
            Hi,
            <br />
            I am Sai Shiva. <br />
            I design and develop <br />
            web sites. <br />I love what I do.
          </h1>
        </div>
        <div className="about-2">
          <img src={require("../images/Component 9 – 1.png")} alt="dev" />
        </div>
      </section>
      <section className="projects" id="projects">
        <div className="projects-heading">
          <h2>Projects</h2>
        </div>
        <div className="projects-list">
          <Arrow direction={"left"} handleClick={prevSlide} />
          <Arrow direction={"right"} handleClick={nextSlide} />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card
              content={CardData[activeIndex]}
              scaledu={scaledu}
              setScaledu={setScaledu}
              body={true}
            />
          </div>
        </div>
      </section>
      <section className="certifications" id="certifications">
        <div className="certifications-heading">
          <h2>Certifications</h2>
        </div>
        <div className="certifications-list">
          <Arrow direction={"left"} handleClick={prevSlide1} />
          <Arrow direction={"right"} handleClick={nextSlide1} />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card
              content={CertData[activeIndex1]}
              scaledu={scaledu1}
              setScaledu={setScaledu1}
              body={false}
            />
          </div>
        </div>
      </section>
      <section className="goodat">
        <div className="goodat-heading">
          <h2>I am good at</h2>
        </div>
        <div className="goodat-list" id="goodat">
          <img
            src={require("../images/Icon awesome-css3-alt.png")}
            alt="css3"
          />
          <img src={require("../images/Icon awesome-html5.png")} alt="html5" />
          <img
            src={require("../images/Icon awesome-node-js.png")}
            alt="node.js"
          />
          <img
            src={require("../images/Icon awesome-python.png")}
            alt="python"
          />
          <img
            src={require("../images/Icon awesome-react.png")}
            alt="reactJs"
          />
          <img src={require("../images/Icon awesome-sass.png")} alt="sass" />
          <img
            src={require("../images/Icon ionic-logo-javascript.png")}
            alt="js"
          />
          {/* <img
            src={require("../images/icon-simple-mongodb.png")}
            alt="mongodb"
          /> */}
          <img src={require("../images/Icon simple-adobexd.png")} alt="XD" />
        </div>
      </section>
      <script src="./main.js"></script>
    </div>
  );
}
