import Link from "next/link";

export default function ProductionGradeHomelabReliabilityPage() {
  return (
    <article>
      <p className="kicker">Drafting · Infrastructure · Reliability Engineering</p>
      <h1 className="hero-title">Production-Grade Homelab Reliability</h1>
      <p className="sub">
        Personal infrastructure should be treated like real infrastructure. This article explains how I design backups,
        restore tests, alerting, and change control in a self-hosted Docker environment.
      </p>

      <section className="section grid grid-2">
        <article className="glass card">
          <h2>What This Covers</h2>
          <ul className="list-tight sub">
            <li>Backup strategy design with restore-first thinking.</li>
            <li>Health checks and alert routing for core homelab services.</li>
            <li>Change-control habits that reduce accidental downtime.</li>
            <li>Secure remote operations over Tailscale and SSH workflows.</li>
          </ul>
        </article>
        <article className="glass card">
          <h2>Why It Matters</h2>
          <p className="sub">
            Reliability is a security outcome. If your systems cannot be restored, monitored, or safely changed, incident
            response quality degrades under pressure.
          </p>
        </article>
      </section>

      <section className="section glass card">
        <h2>Current Build Context</h2>
        <p className="sub">
          Based on your active self-hosted stack and operational practice: Docker services, remote access hardening,
          infrastructure backups, and documentation-led runbooks for continuity.
        </p>
        <div className="btn-row">
          <Link href="/case-studies/self-hosted-ai-infrastructure" className="btn">View Related Case Study</Link>
          <Link href="/blog" className="btn">Back to Blog</Link>
        </div>
      </section>
    </article>
  );
}
