import React from "react";
import Navi from "./Images/navi.png";
import "./Phonetic.css";

export default function Phonetic(props) {
  console.log(props.phonetic.audio);
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
        />
      </a>
      <span className="pronounciation">
        <em>{props.phonetic.text}</em>
      </span>
    </div>
  );
}
