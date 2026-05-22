import Link from "next/link";

export default function AutomationPatternsSurviveDriftPage() {
  return (
    <article>
      <p className="kicker">Outline · Automation · Operational Design</p>
      <h1 className="hero-title">Automation Patterns That Survive Drift</h1>
      <p className="sub">
        Most automation breaks because assumptions are hidden. This article focuses on practical patterns for scripts,
        jobs, and runbooks that remain useful as environments change over time.
      </p>

      <section className="section grid grid-2">
        <article className="glass card">
          <h2>What This Covers</h2>
          <ul className="list-tight sub">
            <li>Designing automation with explicit prerequisites and rollback paths.</li>
            <li>Guardrails for idempotency, logging, and failure visibility.</li>
            <li>How to pair AI-assisted workflows with deterministic operator checks.</li>
            <li>Runbook structures that age well and reduce rework.</li>
          </ul>
        </article>
        <article className="glass card">
          <h2>Why It Matters</h2>
          <p className="sub">
            Automation is valuable only when it remains trustworthy. Drift-resistant patterns protect reliability,
            reduce firefighting, and preserve institutional knowledge.
          </p>
        </article>
      </section>

      <section className="section glass card">
        <h2>Current Build Context</h2>
        <p className="sub">
          Grounded in your Hermes-driven workflows and homelab operations where repeatability, auditability, and safe
          iteration are more important than one-off speed.
        </p>
        <div className="btn-row">
          <Link href="/resources" className="btn">View Tools Dump</Link>
          <Link href="/blog" className="btn">Back to Blog</Link>
        </div>
      </section>
    </article>
  );
}
