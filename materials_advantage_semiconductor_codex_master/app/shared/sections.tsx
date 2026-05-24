import { ReactNode } from "react";

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="section">
      <p className="eyebrow">Materials Advantage @ UCF</p>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export function PageIntro({ title, text }: { title: string; text: string }) {
  return (
    <header className="hero compactHero">
      <span className="badge">Entering Research and Mentor Resources</span>
      <h1>{title}</h1>
      <p className="heroText">{text}</p>
      <nav>
        <a href="/">Back to Home</a>
      </nav>
    </header>
  );
}
