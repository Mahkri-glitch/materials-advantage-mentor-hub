import Link from "next/link";
import AtomBackground from "../src/components/AtomBackground";
import { DecisionCard } from "../src/components/ui";

export default function Home() {
  return (
    <main>
      <header className="hero cleanHero">
        <AtomBackground />
        <div className="heroContent">
          <span className="badge">Materials Advantage @ UCF</span>
          <h1>Entering Research and Mentor Resources</h1>
          <p className="heroText">A modern student hub for research entry, mentoring, and career direction in Materials Science.</p>
        </div>
      </header>

      <section className="section sectionFlat">
        <h2>Choose your path</h2>
        <div className="decisionGrid">
          <DecisionCard title="🔬 Research" description="Build a clear step-by-step path from curiosity to lab outreach." href="/research" />
          <DecisionCard title="🤝 Mentorship" description="Use practical mentor tools, meetings, and reflection checklists." href="/mentorship" />
          <DecisionCard title="⚛️ Semiconductors" description="Explore one pathway example with UCF resources and readiness tools." href="/semiconductors" />
          <DecisionCard title="🧰 Templates" description="Copy usable structures for emails, check-ins, and meeting notes." href="/templates" />
          <DecisionCard title="🧑‍🏫 Faculty" description="Search a compact faculty starter map and find one outreach target." href="/faculty" />
        </div>
      </section>

      <section className="section sectionFlat">
        <h2>Quick overview</h2>
        <p>Research helps with internships, industry, graduate school, confidence, networking, and communication. Mentoring helps you turn uncertainty into action.</p>
        <div className="quickBtns">
          <Link className="btn" href="/research">Research flow</Link>
          <Link className="btn" href="/mentorship">Mentor playbook</Link>
          <Link className="btn" href="/templates">Open tools</Link>
        </div>
      </section>
    </main>
  );
}
