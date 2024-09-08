import "./page.css";
import TopSection from "./topics/TopSection";

export default function Home() {
  return (
    <div>
      <header></header>
      <main className="container">
        <TopSection />
      </main>
      <footer></footer>
    </div>
  );
}
