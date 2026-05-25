import { TemplateBox } from "../../src/components/ui";

const templates = [
  ["Professor email structure", "Subject: Undergraduate interested in [specific lab topic]\n\n1) Why this lab\n2) Why your background connects\n3) Clear ask for a short meeting"],
  ["Research interest statement", "I am interested in [method/material/question] because [specific reason].\nThis connects to [class/project/skill].\nI want to learn more about [focused question]."],
  ["Follow-up email", "Hi Professor [Name],\nI wanted to follow up on my previous email about your [specific topic].\nI am still very interested and can meet [times].\nThank you."],
  ["Mentor meeting notes", "Date:\nTopic:\nWhat I learned:\nWhat is still unclear:\nNext action:"],
  ["Mid-semester check-in", "What went well:\nWhat was hard:\nWhat changed in my interests:\nSupport I need now:\nNext step by next week:"],
  ["Mentor philosophy", "My role as a mentor:\nBoundaries:\nFeedback style:\nHow I support independence:\nWhen to refer out:"],
  ["Office hour log", "Student:\nQuestion:\nAction decided:\nFollow-up date:\nOutcome:"],
] as const;

export default function TemplatesPage() {
  return (
    <main>
      <section className="section"><h1>Templates and Tools</h1><p>Use these as structures, not scripts. The goal is not to sound impressive. The goal is to show real curiosity.</p></section>
      <section className="startBox"><strong>Start here:</strong> Copy one template and personalize it today.</section>
      <section className="listCol">{templates.map(([title, content]) => <TemplateBox key={title} title={title} content={content} />)}</section>
      <section className="section"><a className="btn" href="/research">Next action: return to research flow</a></section>
    </main>
  );
}
