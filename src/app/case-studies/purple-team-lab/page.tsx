import Link from "next/link";

export default function PurpleTeamLabCaseStudyPage() {
  return (
    <article>
      <p className="kicker">Case Study · In Progress</p>
      <h1 className="hero-title">Purple Team Lab with Splunk and Investigation Automation</h1>
      <p className="sub">
        I built this lab to prove I can turn attack simulation into repeatable detection and investigation outcomes.
        It reflects the core skills teams expect from a security engineer: controlled testing, signal validation, and
        disciplined technical documentation.
      </p>

      <section className="section grid grid-2">
        <article className="glass card">
          <h2>1) Problem / Goal</h2>
          <p className="sub">
            I needed a safe environment to run realistic attack scenarios and test detection assumptions without
            production risk. The goal was to replace one-off analysis with a repeatable workflow that can be tuned,
            replayed, and defended in front of stakeholders.
          </p>
        </article>
        <article className="glass card">
          <h2>2) What I Built</h2>
          <p className="sub">
            A VirtualBox-based Windows 11 lab with attacker, victim, and defender systems, plus Splunk for telemetry
            collection and analysis. The stack is intentionally built for structured replay, faster detection iteration,
            and cleaner incident investigation handoff.
          </p>
        </article>
      </section>

      <section className="section">
        <article className="glass card">
          <h2>3) Architecture Diagram (Current Build)</h2>
          <div className="diagram">
            <div className="diagram-node">
              <h4>Attacker VM</h4>
              <p>Runs controlled attack simulations against predefined scenarios.</p>
            </div>
            <div className="diagram-node">
              <h4>Victim VM</h4>
              <p>Generates endpoint and system activity for telemetry validation.</p>
            </div>
            <div className="diagram-node">
              <h4>Splunk Core</h4>
              <p>Centralizes logs, correlation views, and detection tuning loops.</p>
            </div>
            <div className="diagram-node">
              <h4>Defender Workflow Node</h4>
              <p>Runs triage, investigation notes, and replay-based validation checks.</p>
            </div>
          </div>
        </article>
      </section>

      <section className="section grid grid-2">
        <article className="glass card">
          <h2>4) Architecture / Workflow</h2>
          <ul className="sub list-tight">
            <li>Isolated VM environment for controlled simulation</li>
            <li>Attack execution from attacker VM against victim workflows</li>
            <li>Telemetry centralization in Splunk for detection analysis</li>
            <li>Defender-side triage workflow and investigation notes</li>
            <li>Replay pattern to compare baseline vs tuned detections</li>
          </ul>
        </article>
        <article className="glass card">
          <h2>5) Key Decisions / Tradeoffs</h2>
          <ul className="sub list-tight">
            <li>Prioritized repeatability over lab scale</li>
            <li>Chose local virtualization for speed and full control</li>
            <li>Focused on qualitative signal quality before formal metrics</li>
            <li>Designed docs-first workflow for future expansion</li>
          </ul>
        </article>
      </section>

      <section className="section grid grid-2">
        <article className="glass card">
          <h2>6) Outcome / Lesson</h2>
          <p className="sub">
            The lab now supports repeatable attack simulation and detection tuning cycles. The key gain is methodological:
            better consistency in how detections are validated and investigations are documented.
          </p>
        </article>
        <article className="glass card">
          <h2>7) Professional Signal</h2>
          <p className="sub">
            This project shows I can bridge security engineering, detection thinking, and systems implementation with
            practical execution discipline.
          </p>
        </article>
      </section>

      <div className="section">
        <Link href="/case-studies" className="btn">← Back to Case Studies</Link>
      </div>
    </article>
  );
}
