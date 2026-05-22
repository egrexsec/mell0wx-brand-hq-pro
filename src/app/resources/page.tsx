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
