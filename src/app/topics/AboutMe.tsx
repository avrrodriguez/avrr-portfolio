"use client"

import "../styles/about-me.css";
import "../effects/about-me-scrolling-effect.css";
import { useEffect } from "react";
import AddScrollAnimation from "../utils/AddScrollAnimation";

export default function AboutMe() {

  function ScrollAnimation() {
    AddScrollAnimation("about-me-container");
    AddScrollAnimation("web-developer");
    AddScrollAnimation("web-developer-info");
    AddScrollAnimation("front-end-developer");
    AddScrollAnimation("front-end-developer-info");
  }

  useEffect(() => {
    window.addEventListener("scroll", () => ScrollAnimation());
  }, [])

  return (
    <div id="about-me" className="about-me">
      <div id="about-me-container" className="about-me-container">
        <h2>About Me</h2>
        <p>Hello, I am Abraham. Graduating with a bachelors in psychology, I redirect the passion that I had in researching psychology towards a passion for researching software engineering. Researching is a crucial skill where can find all the resources they need in order to complete their goals. I use my expertise in research towards learning new programming skills, debugging, and adding new functionalities.</p>
      </div>
    </div>
  )
}