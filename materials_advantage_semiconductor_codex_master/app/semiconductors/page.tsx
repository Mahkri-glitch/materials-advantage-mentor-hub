import Link from "next/link";
import { ResourceCard, SemiconductorChecklist } from "../../src/components/ui";
import { pathways, semiconductorChecklist } from "../../src/data/siteContent";
import { companies, conferences, internshipTimeline, semiconductorResources } from "../../src/data/researchResources";

const categories = ["Process/manufacturing", "Materials/devices", "Design/computing", "Quantum/photonics", "Data/AI", "Packaging/integration"];

export default function SemiconductorsPage() {
  return (
    <main>
      <section className="section pageIntro"><p className="kicker">One materials-science pathway</p><h1>Semiconductors Pathway Guide</h1><p>Use this guide to connect coursework and research with roles across fabrication, equipment, materials, devices, packaging, photonics, and data. Semiconductors are one pathway—not the only successful direction in Materials Science.</p></section>
      <section className="section sectionTight"><Link className="btn" href="/">← Back to Home</Link></section>

      <section className="section"><h2>What semiconductor work includes</h2><div className="decisionGrid">{categories.map((c)=><article className="decisionCard" key={c}><h3>{c}</h3></article>)}</div></section>
      <section className="section"><h2>How UCF connects to this pathway</h2><div className="resourceGrid">{semiconductorResources.map((r)=><ResourceCard key={r.title} title={r.title} category={r.group} description={r.description} href={r.url} />)}</div></section>
      <section className="section"><div className="sectionHeading"><div><p className="kicker">Industry map</p><h2>Companies to explore</h2></div><span className="countPill">Starter list</span></div><p>Conference exhibitor lists are useful for discovering companies, but always confirm internships on the company's official careers page.</p><div className="companyTable" role="table" aria-label="Semiconductor company starter list">{companies.map(c=><article className="companyRow" key={c.name}><div><h3>{c.name}</h3><p className="kicker">{c.type}</p></div><p>{c.roles}</p></article>)}</div></section>
      <section className="section"><h2>Internship planning timeline</h2><p className="sourceNote">This is a planning pattern, not a guaranteed company deadline. Semiconductor roles open and close individually.</p><div className="timelineGrid">{internshipTimeline.map(([period,action])=><article className="stepCard" key={period}><p className="stepLabel">{period}</p><p>{action}</p></article>)}</div></section>
      <section className="section"><h2>Semiconductor Research Readiness Checklist</h2><SemiconductorChecklist warning={semiconductorChecklist.warning} sections={semiconductorChecklist.sections} /></section>
      <section className="section"><h2>My Banerjee Lab experience</h2><p>I started unsure. In Dr. Parag Banerjee's lab, ALD, thin films, in situ characterization, and process science helped me connect coursework to process-engineering direction.</p></section>
      <section className="section"><h2>Conferences and networking</h2><p>Use technical meetings to learn what companies work on, practice technical conversations, meet hiring engineers, and follow up with context.</p><div className="resourceGrid">{conferences.map(c=><article className="resourceCard" key={c.name}><h3>{c.name}</h3><p>{c.focus}</p><a className="textLink" href={c.url} target="_blank" rel="noreferrer">Visit conference ↗</a></article>)}</div></section>
      <section className="section"><h2>Other Materials pathways</h2><div className="listCol">{pathways.map((p)=><article key={p.title} className="resourceCard"><h3>{p.title}</h3><p>{p.description}</p></article>)}</div></section>
      
      <section className="section"><Link className="btn" href="/faculty">What to do next: browse faculty</Link></section>
    </main>
  );
}
