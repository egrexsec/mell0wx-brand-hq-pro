import Link from "next/link";
import { resourceTracks } from "@/components/site-data";

export default function ResourcesPage() {
  return (
    <section>
      <h1 className="hero-title">Resources</h1>
      <p className="sub">Curated stack for operators and creators. Structured to support future affiliate monetization without sacrificing credibility.</p>
      <div className="section grid grid-3">
        {resourceTracks.map((item) => (
          <article id={item.href.replace("/resources#", "")} key={item.name} className="glass card">
            <h3>{item.name}</h3>
            <p>Reviewed tools, setup notes, and where each item delivers the most value.</p>
            <div style={{ marginTop: 12 }}>
              <Link href={item.href} className="btn" aria-label={`Open ${item.name} section`}>
                Permalink
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
