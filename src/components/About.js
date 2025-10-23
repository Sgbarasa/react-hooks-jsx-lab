import React from "react";
import { image } from "../data/data";

function About() {
  return <div id = "about">
    <h2>About Me</h2>
    <p>I am a web developer with a passion for creating beautiful and functional websites.</p>
    <img src = {image} alt = "I made this"></img>
  </div>;

}

export default About;
