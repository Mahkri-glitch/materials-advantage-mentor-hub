import Link from "next/link";
import { ChecklistAccordion, MentorMeetingCard, PrincipleCard } from "../../src/components/ui";
import { expectationColumns, firstMeetingChecklist, mentoringMeetings, mentoringPrinciples, mentoringSeminarGoals, mentorPhilosophyPrompts, mentorPhilosophyTemplate, understandingChecks, whyMentor } from "../../src/data/siteContent";

export default function MentorshipPage() {
  return (
    <main>
      <section className="section pageIntro"><p className="kicker">Materials Advantage mentorship</p><h1>Mentorship Playbook</h1><p>A practical guide for undergraduate and graduate students building supportive mentoring relationships. </p></section>
      <section className="section sectionTight"><Link className="btn" href="/">← Back to Home</Link></section>

      <section className="section"><p className="kicker">One inclusive system</p><h2>Mentorship based on experience—not academic rank</h2><p>Materials Advantage uses one mentorship system for both undergraduate and graduate students. Any member can participate as a mentor or mentee depending on their experience, goals, and the kind of support they can offer or are seeking.</p><p>Mentors may help with research, coursework, career exploration, internships, graduate school, professional development, or adjusting to the Materials Science community. Mentees bring their own experiences, questions, and perspectives, so the relationship should remain collaborative rather than hierarchical.</p><p className="startBox"><strong>There are no separate undergraduate and graduate mentorship tracks.</strong> Each pair should define what they want to learn, what experience they can share, and how they will support one another.</p></section>

      <section className="section"><h2>Mentoring is different from supervision</h2><p>Student mentors can share experience, offer encouragement, review goals, and connect mentees with resources. They should not replace a faculty advisor, research supervisor, instructor, counselor, or university office. Questions involving laboratory authorization, safety, academic requirements, research conduct, mental health, or formal conflict should be referred to the appropriate faculty or university professional.</p></section>

      <section className="section"><h2>First Meeting Relationship Checklist</h2><p>Use this checklist for graduate–undergraduate or peer relationships, and skip laboratory-specific items when the mentorship is focused on academics or careers.</p><ChecklistAccordion title="Open checklist" items={firstMeetingChecklist} label="First meeting tools" /></section>

      <section className="section"><h2>Goals of the Mentoring Seminar</h2><div className="decisionGrid">{mentoringSeminarGoals.map((g)=><article key={g} className="resourceCard"><p>{g}</p></article>)}</div></section>

      <section className="section"><h2>Build Your Mentor Philosophy</h2><div className="listCol"><ChecklistAccordion title="Discussion prompts" items={mentorPhilosophyPrompts} label="Mentor reflection" /><article className="templateBox"><h3>Fill-in starter</h3><ul>{mentorPhilosophyTemplate.map((x)=><li key={x}>{x}</li>)}</ul></article></div></section>

      <section className="section"><h2>Set Expectations Early</h2><p>Set expectations at the beginning and revisit them throughout the relationship. Discuss degree level, experience, and power differences openly without assuming that one person’s path should become the other person’s path.</p><div className="decisionGrid"><article className="resourceCard"><h3>Mentee should clarify</h3><ul>{expectationColumns.mentee.map((x)=><li key={x}>{x}</li>)}</ul></article><article className="resourceCard"><h3>Mentor should clarify</h3><ul>{expectationColumns.mentor.map((x)=><li key={x}>{x}</li>)}</ul></article></div></section>

      <section className="section"><h2>Three Meeting System</h2><div className="listCol">{mentoringMeetings.map((m)=><MentorMeetingCard key={m.title} {...m} />)}</div></section>

      <section className="section"><h2>How Do You Know If They Understand?</h2><ChecklistAccordion title="Mentor understanding checks" items={understandingChecks} label="Mentor tools" /></section>

      <section className="section"><h2>Good Mentoring Principles</h2><div className="decisionGrid">{mentoringPrinciples.map(([title,text])=><PrincipleCard key={title} title={title} text={text} />)}</div></section>

      <section className="section"><h2>Why Be a Mentor?</h2><div className="listCol">{whyMentor.map((x)=><article key={x} className="resourceCard"><p>{x}</p></article>)}</div></section>

      

      <section className="section"><Link className="btn" href="/templates">What to do next: open mentor templates</Link></section>
    </main>
  );
}
