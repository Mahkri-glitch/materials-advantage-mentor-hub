import Link from "next/link";
import { researchPlan, researchResources } from "../../src/data/researchResources";

export default function ResearchPage() {
  return (
    <main>
      <section className="section pageIntro"><p className="kicker">UCF undergraduate research guide</p><h1>Enter research with a plan</h1><p>Research is not only preparation for graduate school. It helps you test a field, develop technical judgment, build relationships with mentors, and explain how you approach problems to future employers.</p><p className="sourceNote">Start with the sequence below, then use the official resources to verify requirements and current deadlines.</p></section>
      <section className="section sectionTight"><Link className="btn" href="/">← Back to Home</Link></section>
      <section className="section"><h2>Your six-step research path</h2><div className="timelineGrid">{researchPlan.map((step, i)=><article className="stepCard" key={step.title}><p className="stepLabel">Step {i + 1}</p><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></section>
      {(["Getting started", "Funding", "Summer research"] as const).map(group => <section className="section" key={group}><div className="sectionHeading"><div><p className="kicker">Verified starting points</p><h2>{group}</h2></div><span className="countPill">{researchResources.filter(r=>r.group===group).length} resources</span></div><div className="resourceGrid">{researchResources.filter(r=>r.group===group).map(r=><article className="resourceCard" key={r.title}><p className="kicker">{r.source}</p><h3>{r.title}</h3><p>{r.description}</p><a className="textLink" href={r.url} target="_blank" rel="noreferrer">Open official resource ↗</a></article>)}</div></section>)}
      <section className="section actionPanel"><div><p className="kicker">Ready to look for a group?</p><h2>Find a UCF MSE lab</h2><p>Compare faculty by research area, then read the current faculty or lab page before writing a personal outreach message.</p></div><div className="quickBtns"><Link className="btn" href="/faculty">Browse faculty</Link><a className="btn" href="https://mse.ucf.edu/lab-directory/" target="_blank" rel="noreferrer">MSE lab directory ↗</a><Link className="btn" href="/templates">Build your email</Link></div></section>
    </main>
  );
}
