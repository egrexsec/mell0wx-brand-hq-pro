import Link from "next/link";

const flagshipCaseStudies = [
  {
    slug: "purple-team-lab",
    title: "Purple Team Lab with Splunk and Investigation Automation",
    status: "In Progress",
    image:
      "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1400&q=80",
    problem:
      "Build a repeatable local environment for attack simulation, detection validation, and investigation workflow development.",
    build:
      "VirtualBox-based Windows 11 lab with attacker, victim, and defender systems plus Splunk-driven telemetry analysis.",
    signal:
      "Demonstrates practical detection engineering, systems design, and disciplined testing workflow execution.",
  },
  {
    slug: "bug-bounty-methodology",
    title: "Hermes Bug Bounty Methodology Workflow",
    status: "In Progress",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1400&q=80",
    problem:
      "Reduce ad-hoc bounty testing by operationalizing a methodology-first approach to scope, hypotheses, and reporting.",
    build:
      "A structured Hermes-driven workflow for scope intake, test planning, evidence capture, and reporting continuity.",
    signal:
      "Shows research discipline, repeatability, and stronger signal quality for security engineering teams.",
  },
  {
    slug: "self-hosted-ai-infrastructure",
    title: "Self-Hosted AI + Infrastructure Stack",
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80",
    problem:
      "Create an operationally reliable environment for documentation, automation, and AI-assisted technical workflows.",
    build:
      "Docker-based homelab architecture with service organization, documentation-first operations, and secure workflow patterns.",
    signal:
      "Highlights ownership across infrastructure, security posture, and long-term operational maintainability.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="glass hero premium-hero hero-retro">
        <p className="kicker">mell0wx</p>
        <h1 className="hero-title">Cybersecurity Engineer • Infrastructure Architect • Creative Technologist</h1>
        <p className="sub">Building secure systems, intelligent workflows, and modern technical experiences.</p>
        <div className="btn-row hero-cta-grid">
          <Link href="/projects" className="btn primary hero-main-cta">
            View Projects →
          </Link>
          <Link href="/blog" className="btn hero-outline-cta">
            Read Blog
          </Link>
          <Link href="/contact" className="btn hero-blue-cta">
            Contact
          </Link>
        </div>
      </section>

      <section className="section grid grid-3">
        <article className="glass card">
          <div className="metric">Target Roles</div>
          <p className="metric-label">
            Threat Hunter · Detection Engineer · DFIR Analyst · Incident Responder · Security Operations Analyst
          </p>
          <p className="sub">
            Positioned for teams that need disciplined investigation, practical detection logic, and clear evidence-backed
            incident workflows.
          </p>
        </article>
        <article className="glass card">
          <div className="metric">Core Tooling + Environment</div>
          <p className="metric-label">Splunk · VirtualBox Labs · Docker · Tailscale · Linux · Hermes Agent</p>
          <p className="sub">
            Built around your real stack: purple-team simulation, self-hosted infrastructure, and AI-assisted execution for
            repeatable security operations.
          </p>
        </article>
        <article className="glass card">
          <div className="metric">How You Operate</div>
          <p className="metric-label">Methodical · Detection-minded · Architecture-first · Documentation-driven</p>
          <p className="sub">
            You translate complex systems into testable workflows, then iterate with logs, tradeoff notes, and operational
            guardrails teams can trust.
          </p>
        </article>
      </section>

      <section className="section">
        <h2>Flagship Case Studies</h2>
        <p className="sub">Three systems that represent how I build: hypothesis-driven, testable, and operationally grounded.</p>

        <div className="grid grid-3" style={{ marginTop: 14 }}>
          {flagshipCaseStudies.map((study) => (
            <article key={study.title} className="glass card case-card">
              <img src={study.image} alt={study.title} className="case-image" />
              <div className="case-body">
                <p className="kicker" style={{ marginBottom: 8 }}>
                  {study.status}
                </p>
                <h3>
                  <Link href={`/case-studies/${study.slug}`}>{study.title}</Link>
                </h3>
                <p>
                  <strong>Goal:</strong> {study.problem}
                </p>
                <p>
                  <strong>Built:</strong> {study.build}
                </p>
                <p>
                  <strong>Professional Signal:</strong> {study.signal}
                </p>
                <Link href={`/case-studies/${study.slug}`} className="btn" style={{ marginTop: 8 }}>
                  Open Case Study
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section grid grid-2">
        <article className="glass card">
          <h2>Security Methodology</h2>
          <p className="sub">
            I structure projects around repeatable workflows: define hypotheses, build controlled test paths, validate
            outcomes, log tradeoffs, and publish implementation notes that can be replayed later.
          </p>
        </article>
        <article className="glass card">
          <h2>Infrastructure + Lab Systems</h2>
          <p className="sub">
            Self-hosted Docker services, documentation-first operations, and secure remote management patterns that
            prioritize reliability, observability, and controlled change over convenience shortcuts.
          </p>
        </article>
      </section>
    </>
  );
}
