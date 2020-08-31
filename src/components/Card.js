import React from "react";
// var x = require("../images/infinity.png");

export default function Card({ content, scaledu, setScaledu, body }) {
  console.log(content.url);
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
            "url(" + require("../images/" + content.name + ".jpg") + ")",
        }}
      ></div>
      {body ? (
        <div className="card-body">
          <p className="heading">{content.head}</p>
          <p className="description">{content.description}</p>
          <button>
            <a
              href={content.url}
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "2rem",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit website
            </a>
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
