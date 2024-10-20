import "./styles/page.css";
import WorkExperience from "./topics/WorkExperience";
import TopSection from "./topics/TopSection";
import AboutMe from "./topics/AboutMe";

export default function Home() {
  return (
    <div>
      <header></header>
      <main className="container">
        <TopSection />
        <AboutMe />
        <WorkExperience />
      </main>
    </div>
  );
}