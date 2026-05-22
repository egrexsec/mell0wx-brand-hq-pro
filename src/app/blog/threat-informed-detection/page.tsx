import Link from "next/link";

export default function ThreatInformedDetectionPage() {
  return (
    <article>
      <p className="kicker">Drafting · Threat Hunting · Detection Engineering</p>
      <h1 className="hero-title">Threat-Informed Detection in Real Environments</h1>
      <p className="sub">
        Detection quality improves when you map alerts to attacker behavior, investigation decisions, and response paths.
        This article outlines how I build detections in my Splunk-backed purple-team lab so they are actionable, not noisy.
      </p>

      <section className="section grid grid-2">
        <article className="glass card">
          <h2>What This Covers</h2>
          <ul className="list-tight sub">
            <li>Modeling detections from ATT&CK behaviors instead of raw signatures.</li>
            <li>Designing triage fields that support DFIR-style investigation flow.</li>
            <li>Validation loops using controlled adversary simulation in a local lab.</li>
            <li>How to document assumptions, false positives, and escalation criteria.</li>
          </ul>
        </article>
        <article className="glass card">
          <h2>Why It Matters</h2>
          <p className="sub">
            Teams rarely fail from missing detections alone—they fail from detections that cannot be trusted or acted on
            quickly. A threat-informed model improves signal quality and incident decision speed.
          </p>
        </article>
      </section>

      <section className="section glass card">
        <h2>Current Build Context</h2>
        <p className="sub">
          Built around VirtualBox-based attacker/victim/defender systems with Splunk telemetry, where each rule is tested
          against known behavior and tuned with operational notes for repeatability.
        </p>
        <div className="btn-row">
          <Link href="/case-studies/purple-team-lab" className="btn">View Related Case Study</Link>
          <Link href="/blog" className="btn">Back to Blog</Link>
        </div>
      </section>
    </article>
  );
}
