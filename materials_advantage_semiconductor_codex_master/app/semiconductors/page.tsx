import Link from "next/link";
import { CompanyBrainMap, ResourceCard } from "../../src/components/ui";
import { pathways } from "../../src/data/siteContent";
import { conferences, internshipTimeline, semiconductorResources, semiconductorWork } from "../../src/data/researchResources";

export default function SemiconductorsPage() {
  return (
    <main>
      <section className="section pageIntro"><p className="kicker">One materials-science pathway</p><h1>Semiconductors Pathway Guide</h1><p>Use this guide to connect coursework and research with roles across fabrication, equipment, materials, devices, packaging, photonics, and data. Semiconductors are one pathway—not the only successful direction in Materials Science.</p></section>
      <section className="section sectionTight"><Link className="btn" href="/">← Back to Home</Link></section>

      <section className="section"><h2>What semiconductor work includes</h2><p>Each area below connects a part of the chip lifecycle to common industry roles and active research questions.</p><div className="workGrid">{semiconductorWork.map((area)=><article className="workCard" key={area.title}><h3>{area.title}</h3><p>{area.explanation}</p><div className="workDetail"><strong>Industry jobs</strong><span>{area.jobs}</span></div><div className="workDetail"><strong>Research topics</strong><span>{area.research}</span></div></article>)}</div></section>
      <section className="section"><h2>How UCF connects to this pathway</h2><div className="resourceGrid">{semiconductorResources.map((r)=><ResourceCard key={r.title} title={r.title} category={r.group} description={r.description} href={r.url} />)}</div></section>
      <section className="section"><div className="sectionHeading"><div><p className="kicker">Interactive industry map</p><h2>How semiconductor companies fit together</h2></div><span className="countPill">Select a branch</span></div><p>Explore the major employers in this repository by business model. Some companies operate across more than one category; they are placed under the branch most useful for understanding their primary role.</p><CompanyBrainMap /></section>
      <section className="section"><h2>Internship planning timeline</h2><p className="sourceNote">This is a planning pattern, not a guaranteed company deadline. Semiconductor roles open and close individually.</p><div className="timelineGrid">{internshipTimeline.map(([period,action])=><article className="stepCard" key={period}><p className="stepLabel">{period}</p><p>{action}</p></article>)}</div></section>
      <section className="section"><h2>My Banerjee Lab experience</h2><p>I started unsure. In Dr. Parag Banerjee's lab, ALD, thin films, in situ characterization, and process science helped me connect coursework to process-engineering direction.</p></section>
      <section className="section"><h2>Conferences and networking</h2><p>Use technical meetings to learn what companies work on, practice technical conversations, meet hiring engineers, and follow up with context.</p><div className="resourceGrid">{conferences.map(c=><article className="resourceCard" key={c.name}><h3>{c.name}</h3><p>{c.focus}</p><a className="textLink" href={c.url} target="_blank" rel="noreferrer">Visit conference ↗</a></article>)}</div></section>
      <section className="section"><h2>Other Materials pathways</h2><div className="listCol">{pathways.map((p)=><article key={p.title} className="resourceCard"><h3>{p.title}</h3><p>{p.description}</p></article>)}</div></section>
      
      <section className="section"><Link className="btn" href="/faculty">What to do next: browse faculty</Link></section>
    </main>
  );
}
