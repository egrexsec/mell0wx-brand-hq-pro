import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const sans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const nav = ["/", "/about", "/projects", "/blog", "/resources", "/lab", "/contact"];

const label = (href: string) => (href === "/" ? "Home" : href.replace("/", "").replace(/^./, (s) => s.toUpperCase()));

export const metadata: Metadata = {
  metadataBase: new URL("https://mell0wx.com"),
  title: {
    default: "mell0wx — Cybersecurity Engineer & Creative Technologist",
    template: "%s | mell0wx",
  },
  description:
    "Modern digital command center for cybersecurity, infrastructure engineering, automation, music, and consulting.",
  openGraph: {
    title: "mell0wx — Cybersecurity Engineer • Infrastructure Architect • Creative Technologist",
    description: "Building secure systems, intelligent workflows, and modern technical experiences.",
    type: "website",
    url: "https://mell0wx.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "mell0wx — Modern Digital Command Center",
    description: "Cybersecurity, infrastructure, automation, and creative technology.",
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
        <main className="container-main">{children}</main>
        <footer className="site-footer">© {new Date().getFullYear()} mell0wx · Cybersecurity · Infrastructure · Creative Technology</footer>
      </body>
    </html>
  );
}
