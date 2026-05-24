import {
  faculty,
  featureRoadmap,
  meetingTypes,
  pathways,
  researchEntryModules,
  ucfResources,
} from "../src/data/siteContent";

function Section({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="section">
      <p className="eyebrow">Materials Advantage @ UCF</p>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

const mentorResponsibilities = [
  "Set clear expectations for communication, meeting cadence, and boundaries.",
  "Listen first, then guide. Do not assume the student already knows the right path.",
  "Give honest feedback without making students feel behind or incapable.",
  "Help students build independence by asking them to own the next step.",
  "Refer students out when something is outside your scope.",
];

const menteeResponsibilities = [
  "Show up prepared with questions, updates, or a draft to review.",
  "Follow through on action items between meetings.",
  "Ask for clarity early instead of waiting until things pile up.",
  "Be honest about uncertainty, workload, and goals.",
  "Respect mentor time and communicate when plans change.",
];

const meetingDeliverables: Record<string, string> = {
  "Initial Mentor-Mentee Meeting": "A one-page next-step plan: top interests, one short-term action, and a draft outreach target list.",
  "Mid-Semester Mentee Check-In": "A progress update with what worked, what did not, and a revised next-step plan.",
  "Mentor Philosophy Meeting": "A written mentor philosophy and office-hour support scope that can be shared with mentees.",
};

const semiconductorBackbone = [
  "Process & manufacturing (deposition, etch, metrology, yield thinking)",
  "Materials & devices (thin films, interfaces, reliability, performance)",
  "Design & computing (circuit/device modeling, simulation, data workflow)",
  "Packaging & integration (thermal, interconnect, advanced integration)",
  "Quantum & photonics (quantum materials, optoelectronics, photonic systems)",
  "Data & AI (process optimization, failure analysis, predictive tools)",
];

export default function Home() {
  const grouped = researchEntryModules.reduce<Record<string, (typeof researchEntryModules)[number][]>>(
    (acc, item) => {
      acc[item.category] ??= [];
      acc[item.category].push(item);
      return acc;
    },
    {},
  );

  return (
    <main>
      <header className="hero">
        <span className="badge">Mentorship + Research Entry Hub</span>
        <h1>Entering Research and Mentor Resources</h1>
        <p className="heroText">
          A Materials Advantage @ UCF mentoring hub for students entering research, exploring technical fields,
          and building career direction.
        </p>
        <p className="callout">
          You do not need to have your whole career figured out. Bring your questions, interests, and uncertainty.
          This program helps you find a starting point.
        </p>
        <nav>
          <a href="#research">Why Research</a>
          <a href="/materials-advantage">Mentorship Docs</a>
          <a href="/semiconductor">Semiconductor Docs</a>
          <a href="#meetings">Three Meetings</a>
          <a href="#playbook">Research Playbook</a>
          <a href="#semiconductor">Semiconductor Guide</a>
          <a href="#faculty">Faculty Map</a>
        </nav>
      </header>

      <Section id="research" title="Why Research Matters for Any Career Path">
        <div className="twoCol">
          <p>
            Research is not just for graduate school. It helps you think through unclear problems, test what kind of
            work you enjoy, and build technical stories for interviews, internships, and full-time roles.
          </p>
          <p>
            Whether you are aiming for industry, grad school, semiconductors, or still figuring it out, research helps
            you build communication, confidence, mentor relationships, and real decision-making skills.
          </p>
        </div>
      </Section>

      <Section title="Why Mentoring Matters">
        <div className="twoCol">
          <p>
            Advising gives information. Mentoring helps growth. Good mentoring is built on trust, respect, listening,
            clear expectations, feedback, and helping students become independent.
          </p>
          <p>
            Mentoring is not about having perfect answers. It is about helping someone take the next real step when
            they feel stuck.
          </p>
        </div>
        <div className="grid topGap">
          <article className="card">
            <h3>Mentor Responsibilities</h3>
            <ul>{mentorResponsibilities.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
          <article className="card">
            <h3>Mentee Responsibilities</h3>
            <ul>{menteeResponsibilities.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
          <article className="card">
            <h3>Support Without Overstepping</h3>
            <p>
              Mentors can guide on research, classes, outreach, and career direction. They should avoid acting as a
              therapist, making decisions for the student, or creating dependency.
            </p>
          </article>
        </div>
      </Section>

      <Section id="meetings" title="Three Meeting System">
        <div className="grid">
          {meetingTypes.map((meeting) => (
            <article className="card" key={meeting.title}>
              <span className="tag">Suggested length: {meeting.length}</span>
              <h3>{meeting.title}</h3>
              <p>
                <strong>Purpose:</strong> {meeting.purpose}
              </p>
              <p>
                <strong>Deliverable:</strong> {meetingDeliverables[meeting.title]}
              </p>
              <details>
                <summary>Sample questions</summary>
                <ul>{meeting.questions.map((q) => <li key={q}>{q}</li>)}</ul>
              </details>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Mentor Office Hours">
        <div className="grid">
          <article className="card">
            <h3>General Office Hours</h3>
            <p>Open support for professor emails, resume review, research readiness, and career direction.</p>
          </article>
          <article className="card">
            <h3>Field-Specific Office Hours</h3>
            <p>Dedicated help for semiconductors, polymers, biomaterials, manufacturing, ceramics, and computation.</p>
          </article>
          <article className="card">
            <h3>Appointment-Based Help</h3>
            <p>For research group selection, REU/internship planning, or deeper one-on-one roadmap conversations.</p>
          </article>
        </div>
      </Section>

      <Section id="playbook" title="Research Entry Playbook">
        {Object.entries(grouped).map(([category, items]) => (
          <div className="moduleGroup" key={category}>
            <h3>{category}</h3>
            <div className="grid">
              {items.map((item) => (
                <article className="card" key={item.title}>
                  <h4>{item.title}</h4>
                  <p>{item.humanCopy}</p>
                  <details>
                    <summary>Practical checkpoints</summary>
                    <ul>{item.takeaways.map((x) => <li key={x}>{x}</li>)}</ul>
                  </details>
                </article>
              ))}
            </div>
          </div>
        ))}
      </Section>

      <Section title="Research Outreach Toolkit">
        <div className="grid">
          <article className="card">
            <h3>3-Part Email Structure</h3>
            <ol>
              <li>Why this specific lab caught your attention.</li>
              <li>What class, skill, project, or question connects you to that work.</li>
              <li>Your ask: short meeting or interest in contributing as an undergraduate.</li>
            </ol>
          </article>
          <article className="card">
            <h3>Research-Interest Statement Structure</h3>
            <p>Name one specific method, material, question, or paper and explain why it made you curious.</p>
          </article>
          <article className="card">
            <h3>Timing + Follow-Up Rule</h3>
            <p>Email in a normal weekday window, then send one short follow-up around two weeks later.</p>
          </article>
          <article className="card">
            <h3>What PIs Value</h3>
            <p>Curiosity, reliability, humility, consistency, clear communication, and willingness to learn.</p>
          </article>
          <article className="card">
            <h3>Red-Flag Checklist</h3>
            <ul>
              <li>Generic copy-paste language.</li>
              <li>Too long or overly formal message.</li>
              <li>No specific connection to the lab.</li>
              <li>Mass-email behavior.</li>
            </ul>
          </article>
        </div>
      </Section>

      <Section id="semiconductor" title="Semiconductor Guide Backbone">
        <p className="callout">
          Semiconductors are one example pathway based on Maahir&apos;s UCF experience, not the only definition of
          success in Materials Science.
        </p>
        <div className="grid topGap">
          {semiconductorBackbone.map((track) => (
            <article className="card" key={track}>
              <h3>{track}</h3>
            </article>
          ))}
        </div>
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
        <article className="card wide editable">
          <p>
            [Editable notes for Maahir] Freshman year I was interested in semiconductors, but I did not know where I
            fit. Mentorship helped me turn broad interest into specific actions.
          </p>
          <p>
            In Dr. Parag Banerjee&apos;s lab, I learned how ALD, thin films, and in situ characterization connect to
            process science and real process-engineering decisions.
          </p>
          <p>
            Research helped me connect coursework to semiconductor process engineering. If you are starting, pick one
            process, one material system, or one measurement method and go deep enough to ask better questions.
          </p>
        </article>
      </Section>

      <Section id="faculty" title="UCF Faculty Starter Map">
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
              <p>
                <strong>Student angle:</strong> {person.studentAngle}
              </p>
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
              <div>{pathway.skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}</div>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Conferences and Networking">
        <div className="grid">
          <article className="card">
            <h3>Why It Matters</h3>
            <p>
              Talks, conferences, career fairs, and company events help you meet hiring engineers, practice technical
              conversations, and learn what teams actually need.
            </p>
          </article>
          <article className="card">
            <h3>How to Use Events Well</h3>
            <p>Show up prepared, ask specific questions, take notes, and follow up while the conversation is still fresh.</p>
          </article>
          <article className="card">
            <h3>Turn Contacts Into Opportunities</h3>
            <p>Follow up with context, connect on LinkedIn, and turn one conversation into one concrete next step.</p>
          </article>
        </div>
      </Section>

      <Section title="Feature Roadmap">
        <ul className="roadmap">{featureRoadmap.map((feature) => <li key={feature}>{feature}</li>)}</ul>
      </Section>
    </main>
  );
}
