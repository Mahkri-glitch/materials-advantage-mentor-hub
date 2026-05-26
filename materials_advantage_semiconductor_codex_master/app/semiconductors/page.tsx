import Link from "next/link";
import { ResourceCard, SemiconductorChecklist } from "../../src/components/ui";
import { pathways, semiconductorChecklist, ucfResources } from "../../src/data/siteContent";

const categories = ["Process/manufacturing", "Materials/devices", "Design/computing", "Quantum/photonics", "Data/AI", "Packaging/integration"];

export default function SemiconductorsPage() {
  return (
    <main>
      <section className="section"><h1>Semiconductors Pathway Guide</h1><p>Semiconductors are one example pathway, not the only Materials Science path.</p></section>
      <section className="section sectionTight"><Link className="btn" href="/">← Back to Home</Link></section>
      <section className="startBox"><strong>First move:</strong> Pick one category, one UCF resource, and one next action.</section>

      <section className="section"><h2>What semiconductor work includes</h2><div className="decisionGrid">{categories.map((c)=><article className="decisionCard" key={c}><h3>{c}</h3></article>)}</div></section>
      <section className="section"><h2>How UCF connects to this pathway</h2><div className="listCol">{ucfResources.map((r)=><ResourceCard key={r.name} title={r.name} category={r.category} description={r.description} href={r.url} />)}</div></section>
      <section className="section"><h2>Semiconductor Research Readiness Checklist</h2><SemiconductorChecklist warning={semiconductorChecklist.warning} sections={semiconductorChecklist.sections} /></section>
      <section className="section"><h2>My Banerjee Lab experience</h2><p>I started unsure. In Dr. Parag Banerjee's lab, ALD, thin films, in situ characterization, and process science helped me connect coursework to process-engineering direction.</p></section>
      <section className="section"><h2>Conferences and networking</h2><p>Talk to hiring engineers, ask better questions, and follow up once with context.</p></section>
      <section className="section"><h2>Other Materials pathways</h2><div className="listCol">{pathways.map((p)=><article key={p.title} className="resourceCard"><h3>{p.title}</h3><p>{p.description}</p></article>)}</div></section>
      
      <section className="section"><Link className="btn" href="/faculty">What to do next: browse faculty</Link></section>
    </main>
  );
}
