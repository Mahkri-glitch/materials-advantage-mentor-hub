import Link from "next/link";
import { ChecklistAccordion, MentorMeetingCard, PrincipleCard } from "../../src/components/ui";
import { expectationColumns, firstMeetingChecklist, mentoringMeetings, mentoringPrinciples, mentoringSeminarGoals, mentorPhilosophyPrompts, mentorPhilosophyTemplate, understandingChecks, whyMentor } from "../../src/data/siteContent";

export default function MentorshipPage() {
  return (
    <main>
      <section className="section pageIntro"><p className="kicker">Materials Advantage mentorship</p><h1>Mentorship Playbook</h1><p>A practical guide for undergraduate and graduate students building supportive mentoring relationships. In this program, “mentor” and “mentee” describe each person’s role in a relationship—not their degree level or academic rank.</p></section>
      <section className="section sectionTight"><Link className="btn" href="/">← Back to Home</Link></section>

      <section className="section"><h2>Who this playbook is for</h2><p>Mentoring can happen across degree levels or between students with similar academic standing. What matters is that the mentor has relevant experience to share, listens carefully, and helps the mentee become more independent.</p><div className="resourceGrid"><article className="resourceCard"><p className="kicker">Cross-level mentoring</p><h3>Graduate student → undergraduate student</h3><p>A graduate student can help an undergraduate understand research culture, technical fields, graduate school, and the day-to-day experience of working in a laboratory.</p></article><article className="resourceCard"><p className="kicker">Peer mentoring</p><h3>Experienced undergraduate → newer undergraduate</h3><p>An undergraduate mentor can help another student navigate courses, organizations, research outreach, internships, and the transition into Materials Science.</p></article><article className="resourceCard"><p className="kicker">Graduate peer mentoring</p><h3>Graduate student → graduate student</h3><p>Graduate students can support one another with research habits, professional development, campus resources, and navigating different stages of a graduate program.</p></article><article className="resourceCard"><p className="kicker">Reciprocal learning</p><h3>Both people contribute</h3><p>A mentor does not need to know everything. Strong relationships allow both students to ask questions, exchange perspectives, and learn from one another.</p></article></div></section>

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
