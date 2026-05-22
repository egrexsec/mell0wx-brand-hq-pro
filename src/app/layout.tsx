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
          <details className="mobile-menu">
            <summary aria-label="Open navigation menu">☰</summary>
            <div className="mobile-menu-panel">
              {nav.map((href) => (
                <Link key={`m-${href}`} href={href}>{label(href)}</Link>
              ))}
            </div>
          </details>
        </header>

        <main className="container-main">{children}</main>

        <footer className="site-footer">© {new Date().getFullYear()} mell0wx · Cybersecurity · Infrastructure · Creative Technology</footer>
      </body>
    </html>
  );
}
