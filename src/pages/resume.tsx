import "../app/styles/resume.css";

export default function Resume() {
  return(
    <div className="resume-container">
      <div className="resume-inner-container">
        <div>
          <div className="resume-title">
            <h1>Abraham V Rodriguez - Front End Developer</h1>
          </div>
          <div className="bottom-border-custom"></div>
          <div className="content">
            <p>Melbourne, Florida | 305.527.5076 | <a href="mailto:avrodriguez092@gmail.com">avrodriguez092@gmail.com</a> | <a href="https://github.com/avrrodriguez" target="_blank">Github</a> | <a href="https://www.linkedin.com/in/avrrodriguez98" target="_blank">Linkedin</a> | <a href="/">Portfolio</a></p>
          </div>
        </div>
        <div>
          <div className="resume-work-experience-title">
            <h2>Work Experience</h2>
          </div>
          <div className="bottom-border-custom"></div>
          <div className="content">
            <div className="title-date-container">
              <p>Web Developer | Dentalfone</p>
              <p>Jul 2023 | Present</p>
            </div>
            <ul>
              <li>Design and managed 100+ wordpress sites</li>
              <li>Troubleshoot and debug sites using Javascript, PHP, HTML, and CSS</li>
              <li>Work with multiple wordpress builders and plugins including Oxygen, Breakdance, and ACF</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="resume-skills-title">
            <h2>Skills</h2>
          </div>
          <div className="bottom-border-custom"></div>
          <div className="content">
            <div>
              <p><b>Languages</b>: Wordpress, JavaScript, Java, Typescript ,HTML, CSS</p>
              <p><b>Frameworks</b>: React, Spring Boot, Next.js, Nodejs, Bootstrap</p>
              <p><b>Databases/Libraries/Tools</b>: GraphQL, ACF, PostgresQL, SQL, npm, RSPEC, APIs, Git, GitHub</p>
            </div>
          </div>
        </div>
        <div>
          <div className="coding-projects-title">
            <h2>Coding Projects</h2>
          </div>
          <div className="bottom-border-custom"></div>
          <div className="content">
            <p>Wordpress Calendar - Full stack application where a user can add events to a calendar.</p>
            <ul>
              <li>Built GraphQL API using Headless Wordpress.</li>
              <li>Designed and created a multi-page application using Next.js and Typescript.</li>
              <li>Uses Advanced Custom Fields to edit content in Wordpress.</li>
            </ul>
          </div>
          <div className="content">
            <p>Chess Your Opening - Full stack application where a user can study chess openings.</p>
            <ul>
              <li>Built GraphQL API using Headless Wordpress.</li>
              <li>Designed and created a multi-page application using Next.js and Typescript.</li>
              <li>Uses Advanced Custom Fields to edit content in Wordpress.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}