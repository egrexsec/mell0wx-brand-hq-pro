import Link from "next/link";

export default function PurpleTeamLabCaseStudyPage() {
  return (
    <article>
      <p className="kicker">Case Study · In Progress</p>
      <h1 className="hero-title">Purple Team Lab with Splunk and Investigation Automation</h1>
      <p className="sub">
        A local, repeatable testing environment for simulating attacker behavior, validating detection logic, and
        improving investigation workflow quality.
      </p>

      <section className="section grid grid-2">
        <article className="glass card">
          <h2>1) Problem / Goal</h2>
          <p className="sub">
            I needed a safe environment to run realistic attack scenarios and test detection assumptions without
            production risk. The objective was to make detection validation and post-attack investigation repeatable,
            not one-off.
          </p>
        </article>
        <article className="glass card">
          <h2>2) What I Built</h2>
          <p className="sub">
            A VirtualBox-based Windows 11 lab with attacker, victim, and defender systems, plus Splunk for telemetry
            collection and analysis. The environment is designed for structured scenario replay and tuning.
          </p>
        </article>
      </section>

      <section className="section grid grid-2">
        <article className="glass card">
          <h2>3) Architecture / Workflow</h2>
          <ul className="sub list-tight">
            <li>Isolated VM environment for controlled simulation</li>
            <li>Attack execution from attacker VM against victim workflows</li>
            <li>Telemetry centralization in Splunk for detection analysis</li>
            <li>Defender-side triage workflow and investigation notes</li>
            <li>Replay pattern to compare baseline vs tuned detections</li>
          </ul>
        </article>
        <article className="glass card">
          <h2>4) Key Decisions / Tradeoffs</h2>
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
          <h2>5) Outcome / Lesson</h2>
          <p className="sub">
            The lab now supports repeatable attack simulation and detection tuning cycles. The key gain is methodological:
            better consistency in how detections are validated and investigations are documented.
          </p>
        </article>
        <article className="glass card">
          <h2>6) Professional Signal</h2>
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
