import AtomBackground from "../src/components/AtomBackground";
import { faculty, featureRoadmap, meetingTypes, pathways, researchEntryModules, ucfResources } from "../src/data/siteContent";

function Section({ id, title, intro, children }: { id?: string; title: string; intro?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="section lightSection">
      <h2>{title}</h2>
      {intro ? <p className="sectionIntro">{intro}</p> : null}
      {children}
    </section>
  );
}

const playbookPreviewTitles = new Set([
  "Start From Zero",
  "Finding Research Opportunities",
  "Professor Email Builder",
  "Timing and Follow-Up",
  "What Professors and PIs Actually Value",
  "Summer Research and REU Strategy",
]);

export default function Home() {
  const preview = researchEntryModules.filter((m) => playbookPreviewTitles.has(m.title));

  const grouped = researchEntryModules.reduce<Record<string, (typeof researchEntryModules)[number][]>>((acc, item) => {
    acc[item.category] ??= [];
    acc[item.category].push(item);
    return acc;
  }, {});

  const facultyByDepartment = faculty.reduce<Record<string, (typeof faculty)[number][]>>((acc, person) => {
    acc[person.department] ??= [];
    acc[person.department].push(person);
    return acc;
  }, {});

  return (
    <main>
      <header className="hero cleanHero">
        <AtomBackground />
        <div className="heroContent">
          <span className="badge">Materials Advantage @ UCF</span>
          <h1>Entering Research and Mentor Resources</h1>
          <p className="heroText">
            A student-led hub for entering research, exploring technical fields, and building career direction.
          </p>
          <p className="callout compactCallout">
            You do not need to have everything figured out. Start with one lab, one professor, one paper, or one
            question.
          </p>
        </div>
      </header>

      <section className="trackRow">
        <article className="trackCard">
          <h3>Materials Advantage Mentorship Documentation</h3>
          <p>Meeting systems, mentor roles, office hours, and practical student support tools.</p>
          <a href="/materials-advantage">Open mentorship docs →</a>
        </article>
        <article className="trackCard">
          <h3>Semiconductor Mentor Documentation and Resources</h3>
          <p>One pathway example from UCF research experience, plus resource and faculty starting points.</p>
          <a href="/semiconductor">Open semiconductor docs →</a>
        </article>
      </section>

      <Section
        id="research"
        title="Why Research Matters for Any Career Path"
        intro="Research is not only for grad school. It helps with internships, industry jobs, technical interviews, networking, confidence, and figuring out what you actually enjoy."
      >
        <ul className="simpleList">
          <li>Learn to solve unclear problems instead of only textbook problems.</li>
          <li>Build real project stories for recruiters, labs, and scholarship reviewers.</li>
          <li>Meet mentors and faculty who can guide your next move.</li>
        </ul>
      </Section>

      <Section title="Three Meeting System" intro="Short, repeatable meetings keep mentoring practical and consistent.">
        <div className="stackedCards">
          {meetingTypes.map((meeting) => (
            <article className="card cleanCard" key={meeting.title}>
              <h3>{meeting.title}</h3>
              <p className="mutedLine">Suggested length: {meeting.length}</p>
              <p>{meeting.purpose}</p>
              <details>
                <summary>Sample questions</summary>
                <ul>{meeting.questions.map((q) => <li key={q}>{q}</li>)}</ul>
              </details>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="playbook"
        title="Research Entry Playbook"
        intro="The goal is not to sound impressive. The goal is to show real curiosity and take the next step."
      >
        <div className="previewGrid">
          {preview.map((item) => (
            <article className="card cleanCard" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.humanCopy}</p>
            </article>
          ))}
        </div>

        <details className="fullPlaybook">
          <summary>View full playbook by category</summary>
          {Object.entries(grouped).map(([category, items]) => (
            <div className="playbookGroup" key={category}>
              <h4>{category}</h4>
              {items.map((item) => (
                <details key={item.title} className="playbookItem">
                  <summary>{item.title}</summary>
                  <p>{item.humanCopy}</p>
                  <ul>{item.takeaways.map((t) => <li key={t}>{t}</li>)}</ul>
                </details>
              ))}
            </div>
          ))}
        </details>
      </Section>

      <Section title="Research Outreach Toolkit">
        <div className="toolkitCols">
          <article>
            <h3>3-part email structure</h3>
            <ol>
              <li>Why this lab specifically.</li>
              <li>What connects your interests or coursework.</li>
              <li>A clear ask for next step.</li>
            </ol>
          </article>
          <article>
            <h3>Follow-up rule</h3>
            <p>Send one short follow-up after about two weeks. Then move on respectfully.</p>
            <h3>What PIs value</h3>
            <p>Reliability, curiosity, honesty, and consistent effort.</p>
          </article>
        </div>
      </Section>

      <Section
        id="semiconductor"
        title="Semiconductor Guide Backbone"
        intro="Semiconductors are one example pathway, not the only Materials Science path."
      >
        <div className="resourceList">
          {ucfResources.map((resource) => (
            <article className="resourceRow" key={resource.name}>
              <div>
                <p className="miniTag">{resource.category}</p>
                <h3>{resource.name}</h3>
                <p>{resource.description}</p>
              </div>
              <a href={resource.url}>Open</a>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Other Materials Pathways" intro="Keep multiple paths visible while you explore what fits.">
        <div className="pathwayRow">
          {pathways.map((pathway) => (
            <article className="card cleanCard" key={pathway.title}>
              <h3>{pathway.title}</h3>
              <p>{pathway.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Compact UCF Faculty Starter Map" intro="Starter list only—verify current pages and do not mass-email professors.">
        {Object.entries(facultyByDepartment).map(([dept, people]) => (
          <details className="facultyGroup" key={dept}>
            <summary>{dept} ({people.length})</summary>
            <ul>
              {people.map((person) => (
                <li key={person.name}>
                  <strong>{person.name}:</strong> {person.area}
                </li>
              ))}
            </ul>
          </details>
        ))}
      </Section>

      <Section title="Conferences and Networking">
        <p>
          Talks, conferences, career fairs, and industry visits help you practice technical conversations and meet hiring
          engineers. Follow up quickly and turn each event into one next step.
        </p>
      </Section>

      <Section title="Feature Roadmap">
        <ul className="roadmap compactRoadmap">{featureRoadmap.map((feature) => <li key={feature}>{feature}</li>)}</ul>
      </Section>
    </main>
  );
}
