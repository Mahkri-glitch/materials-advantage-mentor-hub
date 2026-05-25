"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { faculty } from "../data/siteContent";

export function DecisionCard({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <article className="decisionCard">
      <h3>{title}</h3>
      <p>{description}</p>
      <Link className="btn" href={href}>Open</Link>
    </article>
  );
}

export function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <details className="accordion">
      <summary>{title}</summary>
      <div className="accordionBody">{children}</div>
    </details>
  );
}

export function StepCard({ step, title, summary, nextAction, details }: { step: number; title: string; summary: string; nextAction: string; details: React.ReactNode }) {
  return (
    <article className="stepCard">
      <p className="stepLabel">Step {step}</p>
      <h3>{title}</h3>
      <p>{summary}</p>
      <p><strong>What to do next:</strong> {nextAction}</p>
      <Accordion title="Show more details">{details}</Accordion>
    </article>
  );
}

export function TemplateBox({ title, content }: { title: string; content: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <article className="templateBox">
      <h3>{title}</h3>
      <pre>{content}</pre>
      <button
        className="btn"
        onClick={async () => {
          await navigator.clipboard.writeText(content);
          setCopied(true);
          setTimeout(() => setCopied(false), 1200);
        }}
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </article>
  );
}

export function ResourceCard({ title, category, description, href }: { title: string; category: string; description: string; href: string }) {
  return <article className="resourceCard"><p className="kicker">{category}</p><h3>{title}</h3><p>{description}</p><a href={href}>Open resource</a></article>;
}

export function FacultyBrowser() {
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState("All");
  const [interest, setInterest] = useState("All");

  const departments = ["All", ...Array.from(new Set(faculty.map((f) => f.department)))];
  const interests = ["All", "Semiconductors", "Computation", "Quantum", "Photonics", "Reliability", "Manufacturing"];

  const filtered = useMemo(() => {
    return faculty.filter((f) => {
      const q = query.toLowerCase();
      const matchesQuery = !q || `${f.name} ${f.department} ${f.area}`.toLowerCase().includes(q);
      const matchesDept = department === "All" || f.department === department;
      const matchesInterest = interest === "All" || f.area.toLowerCase().includes(interest.toLowerCase());
      return matchesQuery && matchesDept && matchesInterest;
    });
  }, [query, department, interest]);

  return (
    <section>
      <div className="filterRow">
        <input placeholder="Search faculty or topic" value={query} onChange={(e) => setQuery(e.target.value)} />
        <select value={department} onChange={(e) => setDepartment(e.target.value)}>{departments.map((d) => <option key={d}>{d}</option>)}</select>
        <select value={interest} onChange={(e) => setInterest(e.target.value)}>{interests.map((i) => <option key={i}>{i}</option>)}</select>
      </div>
      <div className="listCol">
        {filtered.map((f) => (
          <article key={f.name} className="facultyCard">
            <h3>{f.name}</h3><p className="kicker">{f.department}</p><p>{f.area.split(",")[0]}</p>
            <Accordion title="Expand"><p><strong>Full area:</strong> {f.area}</p><p><strong>Student angle:</strong> {f.studentAngle}</p></Accordion>
          </article>
        ))}
      </div>
    </section>
  );
}
