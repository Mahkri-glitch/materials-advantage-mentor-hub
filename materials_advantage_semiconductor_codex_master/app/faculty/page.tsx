import Link from "next/link";
import { FacultyBrowser } from "../../src/components/ui";

export default function FacultyPage() {
  return (
    <main>
      <section className="section pageIntro"><p className="kicker">Research discovery</p><h1>Faculty Starter Map</h1><p>Use this map to narrow your interests and identify a few relevant groups. It is a starter list—not a final or exhaustive directory.</p><p className="sourceNote">Verify current research on the faculty or lab website before outreach. Contact professors individually; do not mass-email a department.</p></section>
      <section className="section sectionTight"><Link className="btn" href="/">← Back to Home</Link></section>
      <FacultyBrowser />
      <section className="section actionPanel"><div><h2>Continue beyond this starter list</h2><p>Browse the official MSE directories for the complete, current list of faculty and laboratories.</p></div><div className="quickBtns"><a className="btn" href="https://mse.ucf.edu/lab-directory/" target="_blank" rel="noreferrer">Lab directory ↗</a><a className="btn" href="https://mse.ucf.edu/facultystaff/" target="_blank" rel="noreferrer">Faculty directory ↗</a></div></section>
      <section className="section"><Link className="btn" href="/templates">Next action: draft your outreach message</Link></section>
    </main>
  );
}
