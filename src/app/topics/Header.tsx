"use client"

import "../styles/header.css";
import { useEffect } from "react";

export default function Header() {

  function handleClickHeaderMenu(element: Element, allElements: HTMLCollectionOf<Element>): void {

    for (let i=0; i<allElements.length; i++) {
      if (allElements[i] == element) {
        element.classList.add("active-header-menu-link");
      } else if (allElements[i].classList[1] == "active-header-menu-link") {
        allElements[i].classList.remove("active-header-menu-link");
      }
    }
  }
  
  function setEventListeners() {
    const elements = document.getElementsByClassName("header-menu-link");
    
    for (let i=0; i<elements.length; i++) {
      const currElement = elements[i];
      elements[i].addEventListener("click", () => handleClickHeaderMenu(currElement, elements))
    }
  }

  
  useEffect(() => {
    setEventListeners();
  }, []);

  return (
    <header className="header">
      <div className="header-menu">
        <a className="header-menu-link" href="/#about-me">About Me</a>
        <a className="header-menu-link" href="/#work-experience">Work Experiences</a>
        <a className="header-menu-link" href="/#web-developer">Web Developer</a>
        <a className="header-menu-link" href="/#front-end-developer">Front End Developer</a>
        <a className="header-menu-link" href="/#contact-section">Contact Me</a>
      </div>
    </header>
  )
}