export default function AboutPage() {
  return (
    <section className="glass card">
      <p className="kicker">About</p>
      <h1 className="hero-title">A modern systems engineer with a creative core.</h1>
      <p className="sub">I bridge cybersecurity, infrastructure, automation, and music to build systems that are resilient, understandable, and operationally sharp. My approach is disciplined and practical: secure defaults, forensic clarity, and repeatable outcomes.</p>

      <div className="section timeline">
        <div className="timeline-item">
          <h4>Cybersecurity & Detection Engineering</h4>
          <p>Designing and tuning detections that map to real adversary behavior while minimizing alert fatigue.</p>
        </div>
        <div className="timeline-item">
          <h4>Cloud / Security Operations</h4>
          <p>Hardening infrastructure, improving observability, and driving response readiness through evidence-first workflows.</p>
        </div>
        <div className="timeline-item">
          <h4>Church AV/IT Leadership</h4>
          <p>Modernizing environments where uptime, usability, and stakeholder trust all matter simultaneously.</p>
        </div>
        <div className="timeline-item">
          <h4>Creative Technology & Music</h4>
          <p>Combining technical rigor with artistic perspective to produce systems and experiences people actually connect with.</p>
        </div>
      </div>
    </section>
  );
}
