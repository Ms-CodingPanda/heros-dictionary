import React from "react";
import Navi from "./Images/navi.png";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        <img
          className="icon"
          alt="navi"
          src={Navi}
          title="HEY! LISTEN!"
          width="30"
          height="30"
        />{" "}
      </a>{" "}
      <span className="pronounciation">{props.phonetic.text}</span>
    </div>
  );
}
