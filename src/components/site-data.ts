export const featuredProjects = [
  {
    name: "Detection Engineering Lab",
    summary: "High-fidelity detection content lifecycle from hypothesis to validated SIEM rule outcomes.",
    stack: ["Splunk", "Sigma", "Python", "MITRE ATT&CK"],
    href: "/projects#detection-engineering-lab",
  },
  {
    name: "AI-Assisted Homelab",
    summary: "Automation-driven homelab operations with secure workflows, recovery tests, and observability.",
    stack: ["Docker", "Prometheus", "Loki", "Restic", "Tailscale"],
    href: "/projects#ai-assisted-homelab",
  },
  {
    name: "Church Infrastructure Modernization",
    summary: "AV/IT service reliability uplift through standardized architecture and operational runbooks.",
    stack: ["Network Segmentation", "Streaming", "SOPs"],
    href: "/projects#church-infrastructure-modernization",
  },
  {
    name: "Tailscale Secure Access Architecture",
    summary: "Zero-trust remote access pattern for private infrastructure with least-privilege controls.",
    stack: ["Tailscale", "SSH", "ACL", "Identity"],
    href: "/projects#tailscale-secure-access-architecture",
  },
];

export const projectPipeline = [
  "Grafana + Loki Monitoring Stack",
  "AWS Security Projects",
  "Automation Workflows",
  "Purple Team Lab",
];

export const specialties = [
  "Cybersecurity Engineering",
  "Detection & Threat Hunting",
  "Cloud / Infrastructure Security",
  "Automation & SRE Workflows",
  "Homelab Systems Architecture",
  "Technical Documentation",
  "Church AV/IT Operations",
  "Creative Music Technology",
];

export const blogTopics = [
  "AWS Security",
  "Splunk Detections",
  "Threat Hunting",
  "Incident Response",
  "Linux",
  "Docker",
  "Homelab Architecture",
  "AI Workflows",
  "Automation",
  "Church Technology",
  "Streaming Infrastructure",
];

export const blogPosts = [
  {
    title: "Threat-Informed Detection in Real Environments",
    summary: "How to model detections around attacker behavior and incident response decisions.",
    href: "/blog/threat-informed-detection",
    status: "Drafting",
  },
  {
    title: "Production-Grade Homelab Reliability",
    summary: "Backups, restores, alerts, and change control for serious personal infrastructure.",
    href: "/blog/production-grade-homelab-reliability",
    status: "Drafting",
  },
  {
    title: "Automation Patterns That Survive Drift",
    summary: "Designing scripts, jobs, and runbooks that remain useful six months later.",
    href: "/blog/automation-patterns-survive-drift",
    status: "Outline",
  },
];

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/\s*&\s*/g, "-")
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

export const resourceTracks = [
  "Cybersecurity Toolkit",
  "Homelab Hardware",
  "Streaming & Broadcast Stack",
  "Church AV Core Components",
  "Music Production Rig",
  "Productivity Stack",
  "Desk + Ergonomics",
].map((name) => ({
  name,
  href: `/resources#${slugify(name)}`,
}));
