import AtomBackground from "../src/components/AtomBackground";
import { DecisionCard } from "../src/components/ui";

const playbookPreviewTitles = new Set([
  "Start From Zero",
  "Finding Research Opportunities",
  "Professor Email Builder",
  "Timing and Follow-Up",
  "What Professors and PIs Actually Value",
  "Summer Research and REU Strategy",
]);

export default function Home() {
  return (
    <main>
      <header className="hero cleanHero">
        <AtomBackground />
        <div className="heroContent">
          <span className="badge">Materials Advantage @ UCF</span>
          <h1>Entering Research and Mentor Resources</h1>
          <p className="heroText">You do not need to have your whole career figured out. This hub helps you pick one useful next step.</p>
        </div>
      </header>

      <section className="section">
        <h2>What do you need help with?</h2>
        <div className="decisionGrid">
          <DecisionCard title="I want to get into research" description="Start here if you feel lost and want a clear first move." href="/research" />
          <DecisionCard title="I want to understand mentoring" description="Use this if you are mentoring or being mentored this semester." href="/mentorship" />
          <DecisionCard title="I want to explore semiconductors" description="See one pathway example without treating it as the only path." href="/semiconductors" />
          <DecisionCard title="I need templates/tools" description="Open practical structures for emails, meetings, and follow-ups." href="/templates" />
        </div>
      </section>

      <section className="section">
        <h2>Program in one minute</h2>
        <p>Research helps with internships, industry, graduate school, networking, confidence, and technical communication. Mentoring helps you turn curiosity into direction.</p>
      </section>

      <section className="section">
        <h2>Quick start</h2>
        <div className="quickBtns">
          <a className="btn" href="/research">Start research flow</a>
          <a className="btn" href="/templates">Open email templates</a>
          <a className="btn" href="/faculty">Browse faculty map</a>
        </div>
      </section>

      <footer className="miniFooter">
        <a href="/research">Research</a><a href="/mentorship">Mentorship</a><a href="/semiconductors">Semiconductors</a><a href="/templates">Templates</a><a href="/faculty">Faculty</a>
      </footer>
    </main>
  );
}
