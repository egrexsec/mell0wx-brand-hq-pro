import { featuredProjects, projectPipeline } from "@/components/site-data";

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/\s*&\s*/g, "-")
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="hero-title">Projects</h1>
      <p className="sub">Built for depth: architecture diagrams, implementation walkthroughs, stack tags, deployment notes, lessons learned, and practical outcomes.</p>

      <div className="section grid grid-2">
        {featuredProjects.map((p) => (
          <article id={slugify(p.name)} key={p.name} className="glass card project-card">
            <h3>{p.name}</h3>
            <p>{p.summary}</p>
            <div style={{ marginTop: 10 }}>{p.stack.map((s) => <span className="badge" key={s}>{s}</span>)}</div>
          </article>
        ))}
        {projectPipeline.map((name) => (
          <article id={slugify(name)} key={name} className="glass card project-card">
            <h3>{name}</h3>
            <p>Production notes, security posture decisions, and post-deployment tuning insights.</p>
            <div style={{ marginTop: 10 }}><span className="badge">Writeup</span><span className="badge">Architecture</span><span className="badge">Lessons Learned</span></div>
          </article>
        ))}
      </div>
    </section>
  );
}
