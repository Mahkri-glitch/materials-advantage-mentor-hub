import { meetingTypes } from "../../src/data/siteContent";
import { Accordion } from "../../src/components/ui";

const deliverables: Record<string, string[]> = {
  "Initial Mentor-Mentee Meeting": ["Interest snapshot", "One next-step action", "Draft outreach target list"],
  "Mid-Semester Mentee Check-In": ["Progress update", "Blockers list", "Revised next-step plan"],
  "Mentor Philosophy Meeting": ["Mentor philosophy note", "Boundaries + office-hour scope", "Referral plan"],
};

export default function MentorshipPage() {
  return (
    <main>
      <section className="section"><h1>Mentorship</h1><p>Mentoring is more than advising. It helps students grow through trust, clear expectations, feedback, and independence.</p></section>
      <section className="startBox"><strong>Start here:</strong> Run the Initial Mentor-Mentee Meeting first.</section>
      <section className="listCol">
        {meetingTypes.map((m) => (
          <article className="stepCard" key={m.title}>
            <h3>{m.title}</h3>
            <p><strong>Purpose:</strong> {m.purpose}</p>
            <p><strong>When to use it:</strong> {m.length} session window.</p>
            <ul>{m.questions.slice(0, 4).map((q) => <li key={q}>{q}</li>)}</ul>
            <Accordion title="See more questions"><ul>{m.questions.slice(4).map((q) => <li key={q}>{q}</li>)}</ul></Accordion>
            <p><strong>Deliverable/checklist:</strong></p>
            <ul>{deliverables[m.title].map((d) => <li key={d}>{d}</li>)}</ul>
          </article>
        ))}
      </section>
      <section className="section"><a className="btn" href="/templates">Next action: open mentor templates</a></section>
    </main>
  );
}
