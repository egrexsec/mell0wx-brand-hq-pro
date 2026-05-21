export default function LabPage() {
  return (
    <section>
      <h1 className="hero-title">Documentation / Lab</h1>
      <p className="sub">Public-facing knowledge base with SOPs, architecture diagrams, troubleshooting guides, and implementation notes.</p>
      <div className="section grid grid-3">
        <article className="glass card"><h3>Architecture Blueprints</h3><p>Secure access patterns, data flows, service boundaries, and observability layers.</p></article>
        <article className="glass card"><h3>Setup Guides</h3><p>Reproducible installation and hardening docs with rollback guidance.</p></article>
        <article className="glass card"><h3>Troubleshooting Runbooks</h3><p>Forensic checklists and fast recovery paths for common failures.</p></article>
      </div>
    </section>
  );
}
