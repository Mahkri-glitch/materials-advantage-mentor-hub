import { meetingTypes, researchEntryModules } from "../../src/data/siteContent";
import { PageIntro, Section } from "../shared/sections";

export default function MaterialsAdvantageDocs() {
  const grouped = researchEntryModules.reduce<Record<string, (typeof researchEntryModules)[number][]>>((acc, item) => {
    acc[item.category] ??= [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <main>
      <PageIntro
        title="Materials Advantage Mentorship Documentation"
        text="Practical mentoring guidance for helping UCF Materials students move from confusion to action."
      />

      <Section title="Why Mentoring Matters">
        <p>
          Advising gives information. Mentoring helps growth. This track focuses on trust, listening, clear expectations,
          feedback, and helping mentees become independent.
        </p>
      </Section>

      <Section title="Three Meeting System">
        <div className="grid">
          {meetingTypes.map((meeting) => (
            <article className="card" key={meeting.title}>
              <h3>{meeting.title}</h3>
              <p><strong>Purpose:</strong> {meeting.purpose}</p>
              <p><strong>Suggested length:</strong> {meeting.length}</p>
              <details>
                <summary>Sample questions</summary>
                <ul>{meeting.questions.map((q) => <li key={q}>{q}</li>)}</ul>
              </details>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Research Entry Playbook">
        {Object.entries(grouped).map(([category, items]) => (
          <div className="moduleGroup" key={category}>
            <h3>{category}</h3>
            <div className="grid">
              {items.map((item) => (
                <article className="card" key={item.title}>
                  <h4>{item.title}</h4>
                  <p>{item.humanCopy}</p>
                </article>
              ))}
            </div>
          </div>
        ))}
      </Section>
    </main>
  );
}
