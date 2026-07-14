import Link from "next/link";
import { researchPlan, researchResources } from "../../src/data/researchResources";

export default function ResearchPage() {
  return (
    <main>
      <section className="section pageIntro"><p className="kicker">UCF undergraduate research guide</p><h1>Enter research with a plan</h1><p></p><p className="sourceNote"></p></section>
      <section className="section sectionTight"><Link className="btn" href="/">← Back to Home</Link></section>
      <section className="section">
        <p className="kicker">Why participate?</p>
        <h2>Why research matters</h2>
        <p>Undergraduate research gives you experience solving real problems beyond the classroom. You can explore a subject more deeply, apply what you are learning, and determine whether a field or career genuinely interests you.</p>
        <div className="resourceGrid">
          <article className="resourceCard"><h3>Build useful skills</h3><p>Strengthen your communication, critical thinking, technical abilities, and confidence working through unfamiliar problems.</p></article>
          <article className="resourceCard"><h3>Prepare for your next step</h3><p>Develop experiences and technical stories that can strengthen applications for internships, jobs, graduate school, and professional programs.</p></article>
          <article className="resourceCard"><h3>Clarify your direction</h3><p>Test your interests before graduation and make more informed decisions about your degree, research area, and career goals.</p></article>
          <article className="resourceCard"><h3>Find a community</h3><p>Build meaningful relationships with faculty, graduate students, and other undergraduates who can support your academic and professional growth.</p></article>
        </div>
        <p className="startBox"><strong>Research is not only for students planning to attend graduate school.</strong> It can help any student explore careers, develop transferable skills, and become better prepared for life after graduation.</p>
      </section>
      <section className="section"><h2>Your six-step research path</h2><div className="timelineGrid">{researchPlan.map((step, i)=><article className="stepCard" key={step.title}><p className="stepLabel">Step {i + 1}</p><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></section>
      {(["Getting started", "Funding", "Summer research"] as const).map(group => <section className="section" key={group}><div className="sectionHeading"><div><p className="kicker">Verified starting points</p><h2>{group}</h2></div><span className="countPill">{researchResources.filter(r=>r.group===group).length} resources</span></div><div className="resourceGrid">{researchResources.filter(r=>r.group===group).map(r=><article className="resourceCard" key={r.title}><p className="kicker">{r.source}</p><h3>{r.title}</h3><p>{r.description}</p><a className="textLink" href={r.url} target="_blank" rel="noreferrer">Open official resource ↗</a></article>)}</div></section>)}
      <section className="section actionPanel"><div><p className="kicker">Ready to look for a group?</p><h2>Find a UCF MSE lab</h2><p>Compare faculty by research area, then read the current faculty or lab page before writing a personal outreach message.</p></div><div className="quickBtns"><Link className="btn" href="/faculty">Browse faculty</Link><a className="btn" href="https://mse.ucf.edu/lab-directory/" target="_blank" rel="noreferrer">MSE lab directory ↗</a><Link className="btn" href="/templates">Build your email</Link></div></section>
    </main>
  );
}
