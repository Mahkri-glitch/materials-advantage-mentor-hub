import Link from "next/link";
import { ChecklistAccordion, MentorMeetingCard, PrincipleCard, ReadinessChecklist } from "../../src/components/ui";
import { expectationColumns, firstMeetingChecklist, materialsReadiness, mentoringMeetings, mentoringPrinciples, mentoringSeminarGoals, mentorPhilosophyPrompts, mentorPhilosophyTemplate, understandingChecks, whyMentor } from "../../src/data/siteContent";

export default function MentorshipPage() {
  return (
    <main>
      <section className="section"><h1>Mentorship Playbook</h1><p>Entering Mentoring inspired tools, adapted for Materials Advantage mentors and mentees.</p></section>
      <section className="section sectionTight"><Link className="btn" href="/">← Back to Home</Link></section>
      <section className="startBox"><strong>Start here:</strong> Use the first-meeting checklist, then run meeting 1 this week.</section>

      <section className="section"><h2>First Meeting Relationship Checklist</h2><ChecklistAccordion title="Open checklist" items={firstMeetingChecklist} label="First meeting tools" /></section>

      <section className="section"><h2>Goals of the Mentoring Seminar</h2><div className="decisionGrid">{mentoringSeminarGoals.map((g)=><article key={g} className="resourceCard"><p>{g}</p></article>)}</div></section>

      <section className="section"><h2>Build Your Mentor Philosophy</h2><div className="listCol"><ChecklistAccordion title="Discussion prompts" items={mentorPhilosophyPrompts} label="Mentor reflection" /><article className="templateBox"><h3>Fill-in starter</h3><ul>{mentorPhilosophyTemplate.map((x)=><li key={x}>{x}</li>)}</ul></article></div></section>

      <section className="section"><h2>Set Expectations Early</h2><p>Set expectations at the beginning and revisit them throughout the relationship.</p><div className="decisionGrid"><article className="resourceCard"><h3>Mentee should clarify</h3><ul>{expectationColumns.mentee.map((x)=><li key={x}>{x}</li>)}</ul></article><article className="resourceCard"><h3>Mentor should clarify</h3><ul>{expectationColumns.mentor.map((x)=><li key={x}>{x}</li>)}</ul></article></div></section>

      <section className="section"><h2>Three Meeting System</h2><div className="listCol">{mentoringMeetings.map((m)=><MentorMeetingCard key={m.title} {...m} />)}</div></section>

      <section className="section"><h2>How Do You Know If They Understand?</h2><ChecklistAccordion title="Mentor understanding checks" items={understandingChecks} label="Mentor tools" /></section>

      <section className="section"><h2>Good Mentoring Principles</h2><div className="decisionGrid">{mentoringPrinciples.map(([title,text])=><PrincipleCard key={title} title={title} text={text} />)}</div></section>

      <section className="section"><h2>Why Be a Mentor?</h2><div className="listCol">{whyMentor.map((x)=><article key={x} className="resourceCard"><p>{x}</p></article>)}</div></section>

      <section className="section"><h2>Materials Science Research Readiness Checklist</h2><ReadinessChecklist title="Open materials readiness checklist" items={materialsReadiness} /></section>

      <section className="section"><h2>Reference Images / Source Notes</h2><p>Optional placeholders for future uploads:</p><ul><li>/reference-images/mentoring</li><li>/reference-images/semiconductors</li></ul></section>

      <section className="section"><Link className="btn" href="/templates">What to do next: open mentor templates</Link></section>
    </main>
  );
}
