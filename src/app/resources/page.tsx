type ToolGroup = {
  title: string;
  tools: { name: string; context: string }[];
};

const toolGroups: ToolGroup[] = [
  {
    title: "Detection + DFIR Lab",
    tools: [
      {
        name: "Splunk",
        context: "Log analysis, detection validation, and investigation workflow testing in your purple-team lab.",
      },
      {
        name: "VirtualBox",
        context: "Local attacker/victim/defender VM orchestration for repeatable security scenarios.",
      },
      {
        name: "Windows 11 Lab Host",
        context: "Base platform for controlled adversary simulation and telemetry experiments.",
      },
    ],
  },
  {
    title: "Infrastructure + Self-Hosted Ops",
    tools: [
      {
        name: "Docker / Docker Compose",
        context: "Service isolation, stack management, and iterative homelab operations.",
      },
      {
        name: "Tailscale",
        context: "Secure remote access and operational reach into your homelab environment.",
      },
      {
        name: "Linux Server Operations",
        context: "Day-to-day service management, hardening decisions, and troubleshooting.",
      },
      {
        name: "BookStack (planned/active)",
        context: "Documentation-first workflows for systems, procedures, and architecture notes.",
      },
      {
        name: "n8n (planned/active)",
        context: "Workflow automation layer for repeatable technical operations.",
      },
    ],
  },
  {
    title: "Threat Triage Workflow",
    tools: [
      {
        name: "urlscan.io",
        context: "Quick URL detonation, infrastructure fingerprinting, and visual page behavior review.",
      },
      {
        name: "VirusTotal",
        context: "Multi-engine reputation checks and graph pivots for domains, hashes, and URLs.",
      },
      {
        name: "Hybrid Analysis",
        context: "Malware and suspicious file/URL dynamic analysis for threat triage and enrichment.",
      },
      {
        name: "ANY.RUN",
        context: "Interactive sandbox sessions to validate suspicious behavior and collect indicators.",
      },
      {
        name: "AbuseIPDB",
        context: "IP reputation pivoting to quickly prioritize noisy versus high-risk infrastructure.",
      },
    ],
  },
  {
    title: "Email Investigation Workflow",
    tools: [
      {
        name: "MXToolbox",
        context: "Email security and deliverability analysis for SPF, DKIM, DMARC, and mail-header triage.",
      },
      {
        name: "Google Admin Toolbox Messageheader",
        context: "Header parsing to validate sender path, relay chain, and authentication alignment.",
      },
      {
        name: "dmarcian",
        context: "DMARC posture analysis and policy troubleshooting for domain email security.",
      },
    ],
  },
  {
    title: "Deobfuscation + Data Transformation Workflow",
    tools: [
      {
        name: "CyberChef",
        context: "Fast decode/encode, IOC transformation, and payload deobfuscation during investigations.",
      },
    ],
  },
  {
    title: "AI-Assisted Workflows",
    tools: [
      {
        name: "Hermes Agent",
        context: "Structured planning, execution, and operator support across security and infrastructure tasks.",
      },
      {
        name: "Open WebUI / OpenRouter (planned/active)",
        context: "Model routing and local AI workflow integration for practical day-to-day execution.",
      },
    ],
  },
  {
    title: "Engineering + Delivery",
    tools: [
      {
        name: "Next.js",
        context: "Personal site architecture and content delivery for recruiter-facing case studies.",
      },
      {
        name: "Git + GitHub",
        context: "Version control, project history, and portfolio transparency.",
      },
      {
        name: "Vercel",
        context: "Production deployment pipeline and domain delivery.",
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <section>
      <h1 className="hero-title">Tools Dump</h1>
      <p className="sub">
        A live inventory of platforms, frameworks, and systems I actively use across threat hunting,
        detection engineering, DFIR-style investigation workflows, and self-hosted operations.
      </p>

      <section className="section grid grid-2">
        {toolGroups.map((group) => (
          <article key={group.title} className="glass card">
            <h2>{group.title}</h2>
            <ul className="list-tight sub">
              {group.tools.map((tool) => (
                <li key={tool.name}>
                  <strong>{tool.name}:</strong> {tool.context}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </section>
  );
}
