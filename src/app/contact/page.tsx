import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="glass card">
      <p className="kicker">Contact</p>
      <h1 className="hero-title">Available for consulting and technical collaborations.</h1>
      <p className="sub">For cybersecurity engineering, infrastructure design, observability reviews, automation projects, and technical content partnerships.</p>

      <div className="section grid grid-3">
        <article className="glass card">
          <h3>Email</h3>
          <p>
            <Link href="mailto:hello@mell0wx.com" className="btn">hello@mell0wx.com</Link>
          </p>
        </article>
        <article className="glass card">
          <h3>GitHub</h3>
          <p>
            <Link href="https://github.com/mell0wx" className="btn" target="_blank" rel="noreferrer">github.com/mell0wx</Link>
          </p>
        </article>
        <article className="glass card">
          <h3>LinkedIn</h3>
          <p>
            <Link href="https://www.linkedin.com/in/mell0wx" className="btn" target="_blank" rel="noreferrer">linkedin.com/in/mell0wx</Link>
          </p>
        </article>
      </div>
    </section>
  );
}
