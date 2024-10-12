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
        <div className="web-developer-tools">
          <div className="web-developer-tools-title">
            <h4>Technologies</h4>
            <Image 
              className="web-developer-subtitle-accent-image" 
              src='/subheadings-accent-img.png' 
              alt="main headers image" 
              width={300} 
              height={300} 
            />
          </div>
          <div className="web-developer-tools-info">
            <div className="web-developer-tools-programming">
              <p>Wordpress, Oxygen, Breakdance, Elementor, Cornerstone, plugins</p>
              <p>HTML, CSS, Javascript, PHP, jQuery</p>
            </div>
            <div className="web-developer-tools-general">
              <p>Adobe Stuff</p>
              <p>Cloud Storage and website servers. Version control (i.e. UpdraftPlus)</p>
            </div>
          </div>
        </div>
        <div className="web-developer-skills">
          <div className="web-developer-skills-title">
            <h4>Skills</h4>
            <Image 
              className="web-developer-subtitle-accent-image"
              src='/subheadings-accent-img.png' 
              alt="main headers image" 
              width={300} 
              height={300} 
            />
          </div>
          <div className="web-developer-skills-info">
            <div className="web-developer-skills-websites">
              <p>SEO something something something something</p>
              <p>Accessability</p>
            </div>
            <div className="web-developer-skills-social">
              <p>Client Interation something something something something</p>
              <p>Teamwork</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}