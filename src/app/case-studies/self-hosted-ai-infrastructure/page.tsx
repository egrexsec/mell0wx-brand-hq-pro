import Link from "next/link";

export default function SelfHostedAiInfrastructureCaseStudyPage() {
  return (
    <article>
      <p className="kicker">Case Study · Active</p>
      <h1 className="hero-title">Self-Hosted AI + Infrastructure Stack</h1>
      <p className="sub">
        A Docker-based homelab platform designed to support documentation, automation, and AI-assisted technical
        operations with security-minded architecture decisions.
      </p>

      <section className="section grid grid-2">
        <article className="glass card">
          <h2>1) Problem / Goal</h2>
          <p className="sub">
            I needed an environment where documentation, system operations, and AI-assisted workflows could run in one
            controlled stack without sacrificing maintainability or security posture.
          </p>
        </article>
        <article className="glass card">
          <h2>2) What I Built</h2>
          <p className="sub">
            A self-hosted Docker architecture with organized service boundaries, centralized operational documentation,
            and workflow components for AI-assisted execution and automation.
          </p>
        </article>
      </section>

      <section className="section">
        <article className="glass card">
          <h2>3) Architecture Diagram (Current Build)</h2>
          <div className="diagram">
            <div className="diagram-node">
              <h4>Access + Identity Layer</h4>
              <p>Tailscale/SSH-based secure entry path with scoped administrative access.</p>
            </div>
            <div className="diagram-node">
              <h4>Service Runtime</h4>
              <p>Docker-managed services with separated stacks and operational boundaries.</p>
            </div>
            <div className="diagram-node">
              <h4>Documentation Core</h4>
              <p>Runbooks and architecture notes that track change decisions and recovery flow.</p>
            </div>
            <div className="diagram-node">
              <h4>AI Workflow Layer</h4>
              <p>Assistant-driven workflows for automation, triage support, and execution planning.</p>
            </div>
          </div>
        </article>
      </section>

      <section className="section grid grid-2">
        <article className="glass card">
          <h2>4) Architecture / Workflow</h2>
          <ul className="sub list-tight">
            <li>Service-oriented Docker layout and directory conventions</li>
            <li>Documentation-first operations and runbook discipline</li>
            <li>Secure remote access and observability integration patterns</li>
            <li>Planned expansion for automation and workflow orchestration</li>
            <li>Iterative hardening and reliability checks over time</li>
          </ul>
        </article>
        <article className="glass card">
          <h2>5) Key Decisions / Tradeoffs</h2>
          <ul className="sub list-tight">
            <li>Chose operational clarity over rapid service sprawl</li>
            <li>Balanced convenience with secure-by-default practices</li>
            <li>Prioritized maintainable architecture over one-off scripts</li>
            <li>Designed for long-term extensibility with stable docs</li>
          </ul>
        </article>
      </section>

      <section className="section grid grid-2">
        <article className="glass card">
          <h2>6) Outcome / Lesson</h2>
          <p className="sub">
            The stack improved workflow centralization and reduced context switching between systems work,
            documentation, and execution. The ongoing lesson is that documentation quality directly impacts system reliability.
          </p>
        </article>
        <article className="glass card">
          <h2>7) Professional Signal</h2>
          <p className="sub">
            Shows ownership across infrastructure architecture, security-minded operations, and practical AI workflow
            integration for technical teams.
          </p>
        </article>
      </section>

      <div className="section">
        <Link href="/case-studies" className="btn">← Back to Case Studies</Link>
      </div>
    </article>
  );
}
