import "./page.css";
import WorkExperience from "./topics/WorkExperience";
import TopSection from "./topics/TopSection";

export default function Home() {
  return (
    <div>
      <header></header>
      <main className="container">
        <TopSection />
        <WorkExperience />
      </main>
      <footer></footer>
    </div>
  );
}
