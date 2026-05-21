import Link from "next/link";

const studies = [
  {
    slug: "purple-team-lab",
    status: "In Progress",
    title: "Purple Team Lab with Splunk and Investigation Automation",
    summary:
      "A repeatable local lab for attack simulation, detection validation, and investigation workflow refinement.",
  },
  {
    slug: "bug-bounty-methodology",
    status: "In Progress",
    title: "Hermes Bug Bounty Methodology Workflow",
    summary:
      "A structured vulnerability research process focused on methodology, scope discipline, and reporting clarity.",
  },
  {
    slug: "self-hosted-ai-infrastructure",
    status: "Active",
    title: "Self-Hosted AI + Infrastructure Stack",
    summary:
      "A security-minded Docker homelab that supports documentation, automation, and AI-assisted operations.",
  },
];

export default function CaseStudiesPage() {
  return (
    <section>
      <p className="kicker">Proof of Work</p>
      <h1 className="hero-title">Flagship Security Case Studies</h1>
      <p className="sub">
        These projects show how I approach security engineering: define the problem clearly, build practical systems,
        validate outcomes, and document decisions so work is repeatable and defensible.
      </p>

      <div className="section grid grid-2">
        {studies.map((study) => (
          <article key={study.slug} className="glass card project-card">
            <p className="kicker" style={{ marginBottom: 8 }}>
              {study.status}
            </p>
            <h2 style={{ marginTop: 0 }}>{study.title}</h2>
            <p className="sub">{study.summary}</p>
            <Link href={`/case-studies/${study.slug}`} className="btn" style={{ marginTop: 12 }}>
              Read Full Case Study
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
