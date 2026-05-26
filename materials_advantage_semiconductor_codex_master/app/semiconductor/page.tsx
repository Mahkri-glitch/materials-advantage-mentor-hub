import { faculty, pathways, ucfResources } from "../../src/data/siteContent";
import { PageIntro, Section } from "../shared/sections";

export default function SemiconductorDocs() {
  return (
    <main>
      <PageIntro
        title="Semiconductor Mentor Documentation and Resources"
        text="Semiconductors are one strong example path at UCF, but not the only route in Materials Science."
      />

      <Section title="Semiconductor Guide Backbone">
        <p className="callout">
          This track uses Maahir&apos;s UCF pathway as a backbone: process/manufacturing, materials/devices, design/computing,
          packaging/integration, quantum/photonics, and data/AI.
        </p>
        <div className="grid topGap">
          {ucfResources.map((resource) => (
            <article className="card" key={resource.name}>
              <span className="tag">{resource.category}</span>
              <h3>{resource.name}</h3>
              <p>{resource.description}</p>
              <a href={resource.url}>Open resource</a>
            </article>
          ))}
        </div>
      </Section>

      <Section title="What I Learned Entering Semiconductor-Related Research Through Thin Films and ALD">
        <article className="card wide">
          <p>
            [Editable for Maahir] I started freshman year unsure where I fit. Mentorship and lab exposure made the path feel
            real. In Dr. Parag Banerjee&apos;s lab, ALD, thin films, in situ characterization, and process science helped me
            connect coursework to semiconductor process engineering.
          </p>
        </article>
      </Section>

      <Section title="UCF Faculty Starter Map">
        <p className="callout">
          This is a starter list, not a final or exhaustive list. Students should verify current faculty research pages
          before outreach and should not mass-email professors.
        </p>
        <div className="grid">
          {faculty.map((person) => (
            <article className="card" key={person.name}>
              <h3>{person.name}</h3>
              <p className="dept">{person.department}</p>
              <p>{person.area}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Other Materials Pathways">
        <div className="grid">
          {pathways.map((pathway) => (
            <article className="card" key={pathway.title}>
              <h3>{pathway.title}</h3>
              <p>{pathway.description}</p>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
