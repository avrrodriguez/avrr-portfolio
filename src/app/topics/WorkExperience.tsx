"use client"

import "../styles/work-experience.css";
import Image from "next/image";

export default function WorkExperience() {

  return(
    <div id="work-experience" className="work-experience">
      <div className="top-shadow"></div>
      <h2>Work Experiences</h2>
      <Image 
          className="work-experience-transition-image" 
          src='/transition-accent-img.png' 
          alt="transition paint stroke accent image" 
          width={300} 
          height={300} 
        />
      <div id="web-developer" className="work-experience-title">
        <h3>Web Developer</h3>
        <Image 
          className="work-experience-title-accent-image" 
          src='/main-headers-accent-img.png' 
          alt="main headers image" 
          width={300} 
          height={300} 
        />
        <h4 className="work-experience-description">Dentalfone, 1+ years experience - 07/2023-present</h4>
      </div>
      <div id="web-developer-info" className="work-experience-info">
        <div className="work-experience-tools">
          <div className="work-experience-tools-title">
            <h4>Technologies</h4>
            <Image 
              className="work-experience-subtitle-accent-image" 
              src='/subheadings-accent-img.png' 
              alt="main headers image" 
              width={300} 
              height={300} 
            />
          </div>
          <div className="work-experience-tools-info">
            <div className="work-experience-tools-programming">
              <p>Designed, managed, and built 100+ sites in wordpress using multiple builders.</p>
              <p>Used HTML, CSS, Javascript, PHP, and jQuery every day in order to build sites that satistfy clients.</p>
            </div>
            <div className="work-experience-tools-general">
              <p>Proficient in Adobe Creative Cloud to create visually compelling designs, and multimedia content.</p>
              <p>Aided in the use of cloud storage as a server manager to host 100+ sites, as well as Updraft Pro for version control.</p>
            </div>
          </div>
        </div>
        <div className="work-experience-skills">
          <div className="work-experience-skills-title">
            <h4>Skills</h4>
            <Image 
              className="work-experience-subtitle-accent-image"
              src='/subheadings-accent-img.png' 
              alt="main headers image" 
              width={300} 
              height={300} 
            />
          </div>
          <div className="work-experience-skills-info">
            <div className="work-experience-skills-websites">
              <p>Implemented data-driven search engine optimization (SEO) techniques, including keyword research (relevant keywords) and content optimization(meta data) strategies.</p>
              <p>Ensured digital accessability compliance (WCAG 2.1) across web content, enhancing user experience for individuals with disabilities and improving overall site usability.</p>
            </div>
            <div className="work-experience-skills-social">
              <p>Managed client relationships, and provided tailored solutions. Conducted regular communications to understand needs, deliver progress updates, and ensure project alignment.</p>
              <p>Collaborated effectively within cross-functional teams, contributing to brainstorming sessions, project planning and problem-solving.</p>
            </div>
          </div>
        </div>
      </div>
      <Image 
          className="work-experience-transition-image" 
          src='/transition-accent-img.png' 
          alt="transition paint stroke accent image" 
          width={300} 
          height={300} 
        />
      <div id="front-end-developer" className="work-experience-title">
        <h3>Front End Developer</h3>
        <Image 
          className="work-experience-title-accent-image" 
          src='/main-headers-accent-img.png' 
          alt="main headers image" 
          width={300} 
          height={300} 
        />
        <h4 className="work-experience-description">AngelPT, 2+ months 09/2024-present</h4>
      </div>
      <div id="front-end-developer-info" className="work-experience-info">
        <div className="work-experience-tools">
          <div className="work-experience-tools-title">
            <h4>Technologies</h4>
            <Image 
              className="work-experience-subtitle-accent-image" 
              src='/subheadings-accent-img.png' 
              alt="main headers image" 
              width={300} 
              height={300} 
            />
          </div>
          <div className="work-experience-tools-info">
            <div className="work-experience-tools-programming">
              <p>Designed, managed, and built a professional website using Next.js/React.js</p>
              <p>Used HTML, CSS, Javascript, and Typescript in order to build the front end of the website.</p>
            </div>
            <div className="work-experience-tools-general">
              <p>Proficient in Adobe Creative Cloud to create visually compelling designs, and multimedia content.</p>
              <p>Used Vercel as a server manage and Github for version control.</p>
            </div>
          </div>
        </div>
        <div className="work-experience-skills">
          <div className="work-experience-skills-title">
            <h4>Skills</h4>
            <Image 
              className="work-experience-subtitle-accent-image"
              src='/subheadings-accent-img.png' 
              alt="main headers image" 
              width={300} 
              height={300} 
            />
          </div>
          <div className="work-experience-skills-info">
            <div className="work-experience-skills-websites">
              <p>Implemented data-driven search engine optimization (SEO) techniques, including keyword research (relevant keywords) and content optimization(meta data) strategies.</p>
              <p>Ensured digital accessability compliance (WCAG 2.1) across web content, enhancing user experience for individuals with disabilities and improving overall site usability.</p>
            </div>
            <div className="work-experience-skills-social">
              <p>Managed client relationship, and provided tailored solutions. Conducted regular communications to understand needs, deliver progress updates, and ensure project alignment.</p>
              <p>Spear headed and successfully completed a full-scale website independently, from designing, build, and launch, demonstrating strong time-management, problem solving, and decision making skills.</p>
            </div>
          </div>
        </div>
      </div>
      <div id="contact-section" className="contact-section">
      <h5>You can find my email, phone number, and other information by clicking the link below.</h5>
      <div className="resume-button-section">
          <a className="resume-button" href="/resume">Resume</a>
      </div>
    </div>
    </div>
  )
}