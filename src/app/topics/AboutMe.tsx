"use client"

import "../styles/about-me.css";
import "../effects/about-me-scrolling-effect.css";
import ScrollViewportChecker from "../utils/ScrollViewportChecker";
import { useEffect } from "react";

export default function AboutMe() {

  function ScrollAnimation(event: Event) {
    let elemInViewPort = ScrollViewportChecker();
    let inViewElem = document.getElementsByClassName("about-me-container")[0];

    if (elemInViewPort && inViewElem) {
      inViewElem.classList.add("border-scrolling-effect")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", (event) => ScrollAnimation(event));
  }, [])

  return (
    <div className="about-me">
      <div id="about-me-container" className="about-me-container">
        <h2>About Me</h2>
        <p>Hello, I am Abraham. Graduating with a bachelors in psychology, I redirect the passion that I had in researching psychology towards a passion for researching software engineering. Researching is a crucial skill where can find all the resources they need in order to complete their goals. I use my expertise in research towards learning new programming skills, debugging, and adding new functionalities.</p>
      </div>
    </div>
  )
}