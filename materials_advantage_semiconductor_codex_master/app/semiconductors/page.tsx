import Link from "next/link";
import { pathways, ucfResources } from "../../src/data/siteContent";
import { ResourceCard } from "../../src/components/ui";

const categories = [
  "Process/manufacturing",
  "Materials/devices",
  "Design/computing",
  "Quantum/photonics",
  "Data/AI",
  "Packaging/integration",
];

export default function SemiconductorsPage() {
  return (
    <main>
      <section className="section"><h1>Semiconductors</h1><p>Semiconductors are one example pathway, not the only Materials Science path.</p></section>
      <section className="section sectionTight"><Link className="btn" href="/">← Back to Home</Link></section>
      <section className="startBox"><strong>Start here:</strong> If this feels interesting, pick one category and one UCF resource below.</section>
      <section className="decisionGrid">{categories.map((c) => <article className="decisionCard" key={c}><h3>{c}</h3></article>)}</section>
      <section className="section"><h2>UCF resources</h2><div className="listCol">{ucfResources.map((r) => <ResourceCard key={r.name} title={r.name} category={r.category} description={r.description} href={r.url} />)}</div></section>
      <section className="section"><h2>My Banerjee Lab experience</h2><p>I started freshman year unsure. In Dr. Parag Banerjee's lab, ALD, thin films, in situ characterization, and process science helped me connect coursework to process engineering direction.</p></section>
      <section className="section"><h2>Conferences and networking</h2><p>Talk to hiring engineers, ask better questions, and follow up once with context.</p></section>
      <section className="section"><h2>Other pathways still matter</h2><div className="listCol">{pathways.filter((p) => !p.title.toLowerCase().includes("semiconductor")).map((p) => <article className="resourceCard" key={p.title}><h3>{p.title}</h3><p>{p.description}</p></article>)}</div></section>
      <section className="section"><Link className="btn" href="/faculty">Next action: browse faculty</Link></section>
    </main>
  );
}
