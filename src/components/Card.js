import React from "react";
// var x = require("../images/infinity.png");

export default function Card({ content, scaledu, setScaledu, body }) {
  return (
    <div
      className={scaledu ? "scaledu card-container" : "card-container"}
      onAnimationEnd={() => {
        setScaledu(false);
      }}
    >
      <div
        className="card-image"
        style={{
          backgroundImage:
            "url(" + require("../images/" + content.name + ".png") + ")",
        }}
      ></div>
      {body ? (
        <div className="card-body">
          <p className="heading">{content.head}</p>
          <p className="description">{content.description}</p>
          <button>Visit website</button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
