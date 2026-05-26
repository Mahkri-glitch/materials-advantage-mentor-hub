import Link from "next/link";
import { FacultyBrowser } from "../../src/components/ui";

export default function FacultyPage() {
  return (
    <main>
      <section className="section"><h1>Faculty Starter Map</h1><p>This is a starter list, not exhaustive. Verify current faculty pages before outreach and do not mass-email professors.</p></section>
      <section className="section sectionTight"><Link className="btn" href="/">← Back to Home</Link></section>
      <FacultyBrowser />
      <section className="section"><Link className="btn" href="/templates">Next action: draft your outreach message</Link></section>
    </main>
  );
}
