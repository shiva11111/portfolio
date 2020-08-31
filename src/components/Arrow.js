import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Arrow({ direction, handleClick }) {
  return (
    <FontAwesomeIcon
      className="arrow"
      onClick={handleClick}
      style={{
        zIndex: "1",
        position: "absolute",
        top: "50%",
        cursor: "pointer",
        left: direction === "right" ? "95%" : "5%",
        transform: "translate(-50%,-50%)",
        color: "white",
      }}
      icon={direction === "right" ? faChevronCircleRight : faChevronCircleLeft}
    />
  );
}
