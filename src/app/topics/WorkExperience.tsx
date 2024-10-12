import "../styles/work-experience.css";
import Image from "next/image";

export default function WorkExperience() {
  return(
    <div className="work-experience">
      <div className="top-shadow"></div>
      <h2>Work Experience</h2>
      <Image 
          className="work-experience-transition-image" 
          src='/transition-accent-img.png' 
          alt="transition paint stroke accent image" 
          width={300} 
          height={300} 
        />
      <div className="web-developer-title">
        <h3>Web Developer</h3>
        <Image 
          className="web-developer-title-accent-image" 
          src='/main-headers-accent-img.png' 
          alt="main headers image" 
          width={300} 
          height={300} 
        />
      </div>
      <div className="web-developer-info">
        <div className="web-developer-tools">Languages/tools</div>
        <div className="web-developer-skills">Skills</div>
      </div>
    </div>
  )
}