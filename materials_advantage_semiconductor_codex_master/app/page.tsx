import { faculty, featureRoadmap, meetingTypes, pathways, researchEntryModules, ucfResources } from "../src/data/siteContent";

function Section({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="section">
      <p className="eyebrow">Materials Advantage @ UCF</p>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default function Home() {
  const grouped = researchEntryModules.reduce<Record<string, typeof researchEntryModules[number][]>>((acc, item) => {
    acc[item.category] ??= [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <main>
      <header className="hero">
        <span className="badge">Mentorship + Research Entry Hub</span>
        <h1>Entering Research and Mentor Resources</h1>
        <p className="heroText">
          A Materials Advantage @ UCF mentoring hub for students entering research,
          exploring technical fields, and building career direction.
        </p>
        <p className="callout">
          You do not need to have your whole career figured out. Bring your questions,
          interests, and uncertainty. This program helps you find a starting point.
        </p>
        <nav>
          <a href="#research">Why Research</a>
          <a href="#meetings">Three Meetings</a>
          <a href="#playbook">Research Playbook</a>
          <a href="#semiconductor">Semiconductor Guide</a>
          <a href="#faculty">Faculty Map</a>
        </nav>
      </header>

      <Section id="research" title="Why Research Matters for Any Career Path">
        <div className="twoCol">
          <p>
            Research is not only for students who already know they want graduate school. It helps
            students learn how to work through unclear problems, explain technical ideas, build useful
            stories for interviews, and figure out what kind of work they actually like.
          </p>
          <p>
            For industry, research can show initiative and technical depth. For academia, it shows that
            students understand what research feels like. For any pathway, it builds confidence,
            communication, problem-solving, and relationships with mentors.
          </p>
        </div>
      </Section>

      <Section title="Why Mentoring Matters">
        <div className="twoCol">
          <p>
            Mentoring is more than advising. Advising gives information. Mentoring helps students grow
            through trust, honest feedback, listening, and repeated conversations.
          </p>
          <p>
            A good mentor does not need to have every answer. A good mentor helps the student ask better
            questions, find the right people, and take the next step.
          </p>
        </div>
      </Section>

      <Section id="meetings" title="Three Meeting System">
        <div className="grid">
          {meetingTypes.map((meeting) => (
            <article className="card" key={meeting.title}>
              <span className="tag">{meeting.length}</span>
              <h3>{meeting.title}</h3>
              <p>{meeting.purpose}</p>
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
          <article className="card"><h3>General Office Hours</h3><p>For research, classes, resumes, professor emails, and general career direction.</p></article>
          <article className="card"><h3>Field-Specific Office Hours</h3><p>For semiconductors, biomaterials, polymers, metals, ceramics, computational materials, or data skills.</p></article>
          <article className="card"><h3>Appointment-Based Help</h3><p>For professor email review, research group selection, REU/internship planning, or more personal questions.</p></article>
        </div>
      </Section>

      <Section id="playbook" title="Research Entry Playbook">
        <p className="callout">
          This playbook turns the hidden process of entering research into steps: find labs, read enough
          to ask better questions, reach out like a real person, follow up once, and build trust over time.
        </p>
        {Object.entries(grouped).map(([category, items]) => (
          <div className="moduleGroup" key={category}>
            <h3>{category}</h3>
            <div className="grid">
              {items.map((item) => (
                <article className="card" key={item.title}>
                  <h4>{item.title}</h4>
                  <p>{item.humanCopy}</p>
                  <details>
                    <summary>Key points</summary>
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
          <article className="card"><h3>3-Part Email Structure</h3><ol><li>Why this professor or lab.</li><li>Why your background or curiosity connects.</li><li>The ask and your availability.</li></ol></article>
          <article className="card"><h3>Interest Statement</h3><p>Name something specific, explain what caught your attention, and connect it to a class, project, skill, or question.</p></article>
          <article className="card"><h3>Follow-Up Rule</h3><p>Send one short follow-up after about two weeks. If there is still no response, move on respectfully.</p></article>
          <article className="card"><h3>Red Flags</h3><p>Generic tone, fake flattery, long emails, ignoring lab instructions, asking for too much too early, or sounding like a template.</p></article>
        </div>
      </Section>

      <Section id="semiconductor" title="Semiconductor Guide Backbone">
        <p className="callout">
          Semiconductors are one example pathway based on Maahir’s UCF experience. This section should help
          students explore whether semiconductors interest them and how to break in through coursework, labs,
          cleanroom exposure, conferences, networking, and personal experience.
        </p>
        <div className="grid">
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
            In Dr. Parag Banerjee’s lab, I was exposed to thin-film process science through atomic layer deposition,
            in situ characterization, and the connection between materials processing and device-relevant behavior.
          </p>
          <p>
            This helped me see that semiconductor work is not only about circuits. It also depends on surfaces,
            interfaces, deposition, etching, metrology, process control, and data analysis.
          </p>
          <p>
            The student takeaway is simple: start with one process, one material system, or one measurement method.
            Over time, the pieces start to connect.
          </p>
        </article>
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

      <Section id="faculty" title="Starter UCF Faculty Map">
        <p className="callout">
          This is a starter list, not a final or exhaustive list. Students should verify current faculty research
          pages before outreach and should not mass-email professors.
        </p>
        <div className="grid">
          {faculty.map((person) => (
            <article className="card" key={person.name}>
              <h3>{person.name}</h3>
              <p className="dept">{person.department}</p>
              <p>{person.area}</p>
              <p><strong>Student angle:</strong> {person.studentAngle}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Conferences and Networking">
        <div className="grid">
          <article className="card"><h3>Before</h3><p>Prepare a short intro, research companies or labs, write questions, and update your resume or LinkedIn.</p></article>
          <article className="card"><h3>During</h3><p>Talk to engineers, researchers, alumni, and company representatives. Ask what skills and roles actually matter.</p></article>
          <article className="card"><h3>After</h3><p>Follow up, reflect on what sounded interesting, and turn the event into one concrete next step.</p></article>
        </div>
      </Section>

      <Section title="Feature Roadmap">
        <ul className="roadmap">{featureRoadmap.map((feature) => <li key={feature}>{feature}</li>)}</ul>
      </Section>
    </main>
  );
}
