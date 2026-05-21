import Link from "next/link";
import { blogTopics, featuredProjects, specialties } from "@/components/site-data";

export default function HomePage() {
  return (
    <>
      <section className="glass hero">
        <p className="kicker">Digital Headquarters</p>
        <h1 className="hero-title">Cybersecurity Engineer • Infrastructure Architect • Creative Technologist</h1>
        <p className="sub">Building secure systems, intelligent workflows, and modern technical experiences.</p>
        <div className="btn-row">
          <Link href="/projects" className="btn primary">View Projects</Link>
          <Link href="/blog" className="btn">Read Blog</Link>
          <Link href="/contact" className="btn">Contact</Link>
        </div>
        <div className="terminal glass">
          <div className="typing">mell0wx@command-center:~$ orchestrate --secure --observable --repeatable</div>
        </div>
      </section>

      <section className="section grid grid-3">
        <article className="glass card"><div className="metric">24/7</div><div className="metric-label">Operator mindset & reliability discipline</div></article>
        <article className="glass card"><div className="metric">Zero-Trust</div><div className="metric-label">Access architecture and least privilege first</div></article>
        <article className="glass card"><div className="metric">Restore-Proven</div><div className="metric-label">Backup confidence through real recovery tests</div></article>
      </section>

      <section className="section">
        <h2>Featured Projects</h2>
        <div className="grid grid-2">
          {featuredProjects.map((p) => (
            <article key={p.name} className="glass card project-card">
              <h3><Link href={p.href}>{p.name}</Link></h3>
              <p>{p.summary}</p>
              <div style={{ marginTop: 10 }}>
                {p.stack.map((tag) => <span className="badge" key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section grid grid-2">
        <article className="glass card">
          <h2>Technical Specialties</h2>
          <div style={{ marginTop: 8 }}>
            {specialties.map((s) => <span className="badge" key={s}>{s}</span>)}
          </div>
        </article>
        <article className="glass card">
          <h2>Current Lab Environment</h2>
          <p className="sub">Secure remote access, monitoring stack maturity, backup + restore validation, and architecture hardening for production-like homelab operations.</p>
          <div style={{ marginTop: 10 }}>
            <span className="badge">Tailscale</span><span className="badge">Loki</span><span className="badge">Grafana</span><span className="badge">Restic</span>
          </div>
        </article>
      </section>

      <section className="section grid grid-2">
        <article className="glass card">
          <h2>Latest Blog Tracks</h2>
          <div style={{ marginTop: 8 }}>{blogTopics.slice(0, 8).map((t) => <span className="badge" key={t}>{t}</span>)}</div>
        </article>
        <article className="glass card">
          <h2>Music + Creative Technology</h2>
          <p className="sub">Beyond infrastructure and security, the studio side focuses on audio storytelling, production systems, and creative toolchains that make technical content memorable.</p>
        </article>
      </section>
    </>
  );
}
