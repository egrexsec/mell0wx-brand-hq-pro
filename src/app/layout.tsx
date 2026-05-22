import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const sans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const nav = ["/", "/case-studies", "/about", "/projects", "/blog", "/resources", "/lab", "/contact"];

const labelMap: Record<string, string> = {
  "/": "Home",
  "/case-studies": "Case Studies",
};

const label = (href: string) => labelMap[href] ?? href.replace("/", "").replace(/^./, (s) => s.toUpperCase());

export const metadata: Metadata = {
  metadataBase: new URL("https://mell0wx.tech"),
  title: {
    default: "mell0wx — Security-Focused Systems Builder",
    template: "%s | mell0wx",
  },
  description:
    "Security engineering portfolio focused on methodology, lab-driven validation, self-hosted infrastructure, and practical technical outcomes.",
  openGraph: {
    title: "mell0wx — Security-Focused Systems Builder",
    description:
      "Case studies in security methodology, purple-team lab engineering, vulnerability research workflows, and self-hosted infrastructure.",
    type: "website",
    url: "https://mell0wx.tech",
  },
  twitter: {
    card: "summary_large_image",
    title: "mell0wx — Security-Focused Systems Builder",
    description: "Security methodology, lab systems, and infrastructure case studies.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <div className="bg-grid" />
        <header className="site-header">
          <Link href="/" className="brand">mell0wx</Link>
          <nav className="nav">
            {nav.map((href) => (
              <Link key={href} href={href}>{label(href)}</Link>
            ))}
          </nav>
        </header>

        <div className="task-strip" aria-label="quick actions">
          <Link href="/case-studies" className="task-pill">Flagship Case Studies</Link>
          <Link href="/projects" className="task-pill">Lab Projects</Link>
          <Link href="/contact" className="task-pill task-pill-primary">Contact</Link>
        </div>

        <main className="container-main">{children}</main>

        <nav className="mobile-taskbar" aria-label="mobile quick navigation">
          <Link href="/">Home</Link>
          <Link href="/case-studies">Cases</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <footer className="site-footer">© {new Date().getFullYear()} mell0wx · Cybersecurity · Infrastructure · Creative Technology</footer>
      </body>
    </html>
  );
}
