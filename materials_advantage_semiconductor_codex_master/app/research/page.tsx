import Link from "next/link";
import { researchEntryModules } from "../../src/data/siteContent";
import { StepCard } from "../../src/components/ui";

const pick = (title: string) => researchEntryModules.find((m) => m.title === title)!;

export default function ResearchPage() {
  const steps = [
    { t: "Why Research Matters for Any Career Path", next: "Write one sentence for why research could help your current goal." },
    { t: "Start From Zero", next: "List 3 labs you might contact this month." },
    { t: "Finding Research Opportunities", next: "Pick one professor, one paper, or one question." },
    { t: "Professor Email Builder", next: "Draft a 3-paragraph email in your own voice." },
    { t: "Timing and Follow-Up", next: "Send one follow-up after ~2 weeks, then move on." },
    { t: "Summer Research and REU Strategy", next: "Build an REU + internship tracker with deadlines." },
  ];

  return (
    <main>
      <section className="section"><h1>Research</h1><p>If you feel lost, this gives you a practical sequence. You do not need to know everything before reaching out.</p></section>
      <section className="section sectionTight"><Link className="btn" href="/">← Back to Home</Link></section>
      <section className="startBox"><strong>First move:</strong> Choose one step below and complete it today.</section>
      <section className="listCol">
        {steps.map((s, i) => {
          const m = pick(s.t);
          return <StepCard key={s.t} step={i + 1} title={m.title} summary={m.humanCopy} nextAction={s.next} details={<ul>{m.takeaways.map((t) => <li key={t}>{t}</li>)}</ul>} />;
        })}
      </section>
      <section className="section"><Link className="btn" href="/templates">Next action: open templates/tools</Link></section>
    </main>
  );
}
