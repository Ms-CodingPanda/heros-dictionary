import React from "react";
import logo from "./logo.png";
import logo2 from "./logo2.png";

export default function Logos(props) {
  function changeImage(event) {
    event.preventDefault();
    event.target.setAttribute(`src`, { logo2 });
    event.target.setAttribute(`alt`, `logo2`);
  }
  return (
    <div className="logos">
      <img
        src={logo}
        className="App-logo img-fluid"
        alt="logo"
        onClick={changeImage}
      />
    </div>
  );
}
