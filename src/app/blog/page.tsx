import Link from "next/link";
import { blogPosts, blogTopics } from "@/components/site-data";

export default function BlogPage() {
  return (
    <section>
      <h1 className="hero-title">Blog</h1>
      <p className="sub">Long-form technical writing on security, infrastructure, and operational excellence. Structured for SEO and discoverability.</p>
      <div className="section glass card">
        {blogTopics.map((topic) => <span key={topic} className="badge">{topic}</span>)}
      </div>
      <div className="section grid grid-3">
        {blogPosts.map((post) => (
          <article key={post.title} className="glass card">
            <h3>{post.title}</h3>
            <p>{post.summary}</p>
            <div style={{ marginTop: 12 }}>
              <span className="badge">{post.status}</span>
              <Link href={post.href} className="btn" aria-label={`Read ${post.title}`}>
                Read article
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
