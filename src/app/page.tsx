import "./styles/page.css";
import WorkExperience from "./topics/WorkExperience";
import TopSection from "./topics/TopSection";
import AboutMe from "./topics/AboutMe";
import Header from "./topics/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="container">
        <TopSection />
        <AboutMe />
        <WorkExperience />
      </main>
    </div>
  );
}