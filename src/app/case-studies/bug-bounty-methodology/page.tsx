import Link from "next/link";

export default function BugBountyMethodologyCaseStudyPage() {
  return (
    <article>
      <p className="kicker">Case Study · In Progress</p>
      <h1 className="hero-title">Hermes Bug Bounty Methodology Workflow</h1>
      <p className="sub">
        A methodology-first vulnerability research workflow focused on improving signal quality through structure,
        testing discipline, and reproducible notes.
      </p>

      <section className="section grid grid-2">
        <article className="glass card">
          <h2>1) Problem / Goal</h2>
          <p className="sub">
            Ad-hoc bounty testing creates inconsistent results and weak reporting context. I wanted a workflow that
            improves vulnerability discovery quality by structuring scope analysis, hypothesis generation, and follow-through.
          </p>
        </article>
        <article className="glass card">
          <h2>2) What I Built</h2>
          <p className="sub">
            A Hermes-driven process model for scope intake, attack-surface segmentation, test path planning, evidence
            capture, and reporting continuity.
          </p>
        </article>
      </section>

      <section className="section">
        <article className="glass card">
          <h2>3) Architecture Diagram (Current Build)</h2>
          <div className="diagram">
            <div className="diagram-node">
              <h4>Scope Intake Layer</h4>
              <p>Normalizes target rules, program scope, and testing constraints.</p>
            </div>
            <div className="diagram-node">
              <h4>Hypothesis Engine</h4>
              <p>Generates prioritized vulnerability hypotheses by attack surface.</p>
            </div>
            <div className="diagram-node">
              <h4>Investigation Workspace</h4>
              <p>Tracks test evidence, dead-ends, and validation checkpoints.</p>
            </div>
            <div className="diagram-node">
              <h4>Report Output Path</h4>
              <p>Converts findings into reproducible, report-ready structure.</p>
            </div>
          </div>
        </article>
      </section>

      <section className="section grid grid-2">
        <article className="glass card">
          <h2>4) Architecture / Workflow</h2>
          <ul className="sub list-tight">
            <li>Scope ingestion and target prioritization</li>
            <li>Hypothesis creation by attack surface</li>
            <li>Methodical test sequencing instead of random probing</li>
            <li>Evidence and notes capture throughout investigation</li>
            <li>Organized handoff into report-ready structure</li>
          </ul>
        </article>
        <article className="glass card">
          <h2>5) Key Decisions / Tradeoffs</h2>
          <ul className="sub list-tight">
            <li>Optimized for quality and repeatability over volume</li>
            <li>Kept workflow adaptable across different scope types</li>
            <li>Emphasized methodology artifacts that can be shared safely</li>
            <li>Accepted qualitative outcomes while process matures</li>
          </ul>
        </article>
      </section>

      <section className="section grid grid-2">
        <article className="glass card">
          <h2>6) Outcome / Lesson</h2>
          <p className="sub">
            The workflow improved discipline from recon through reporting. The immediate value is cleaner investigation
            reasoning and less context loss between finding and write-up.
          </p>
        </article>
        <article className="glass card">
          <h2>7) Professional Signal</h2>
          <p className="sub">
            Demonstrates security research rigor and the ability to operationalize methodology into repeatable team-relevant
            practices.
          </p>
        </article>
      </section>

      <div className="section">
        <Link href="/case-studies" className="btn">← Back to Case Studies</Link>
      </div>
    </article>
  );
}
