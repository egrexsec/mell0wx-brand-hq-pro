import Link from "next/link";

export default function RoutineUpdateHomelabSleepPage() {
  return (
    <article>
      <p className="kicker">Published · Homelab Operations · Linux Reliability</p>
      <h1 className="hero-title">When a Routine Update Put My Homelab to Sleep</h1>
      <p className="sub">
        A real-world reliability incident: after a normal Linux update, my homelab host began suspending itself. This
        post breaks down what happened, why it matters, and how to patch safely without sacrificing uptime.
      </p>

      <section className="section glass card">
        <h2>When a Routine Update Put My Homelab to Sleep</h2>
        <p>
          I recently ran into a homelab issue that perfectly captures the tension every self-hoster knows: updates are
          necessary for security, but they can also introduce unexpected instability.
        </p>
        <p>
          After a routine system update, my Linux homelab server started randomly suspending itself. At first glance,
          it looked like a crash or some odd Docker-related problem, but the logs told a different story. The host was
          entering a real suspend state through the normal Linux power-management path, with systemd-logind initiating
          suspend and the kernel entering ACPI S3 deep sleep before resuming a couple of minutes later. The logs also
          pointed to KDE Plasma’s power-management stack, including PowerDevil and power-button related input events,
          as likely parts of the trigger path.
        </p>
        <p>
          What made this more interesting was the timing. The issue began right after a package update that included a
          new Linux kernel, updated Qt6 libraries, systemd, firmware tooling, and other desktop-related components.
          On the same system, KDE Plasma components such as PowerDevil, KWin Wayland, and Plasma Workspace were
          installed, which meant this “server” was also carrying a desktop power-management layer capable of reacting
          to suspend and power-button events.
        </p>
      </section>

      <section className="section glass card">
        <h2>Why this matters</h2>
        <p>
          This is one of the hidden risks in homelab environments: many of us run mixed-purpose systems. A box might
          be a Docker host, a remote-access endpoint, a testing machine, and a desktop environment all at once. That
          flexibility is useful, but it also increases the chance that an update in one part of the stack affects
          something unrelated, like uptime for self-hosted services.
        </p>
        <p>
          In my case, the update did not appear to cause a hardware failure. Instead, it likely changed behavior in the
          power-management or input-handling stack. The server was not “randomly dying”; it was being told to suspend.
          That is an important distinction, because it changes the troubleshooting path completely.
        </p>
      </section>

      <section className="section glass card">
        <h2>The risk of updates</h2>
        <p>
          There is a real operational risk in applying updates blindly to systems that provide continuous services.
          Kernel changes can affect suspend and resume behavior. Desktop power-management components can change defaults
          or react differently after upgrades. Virtual input devices from remote tools can suddenly become relevant if
          the updated system begins treating them as button-capable devices. Even when each individual package update
          is reasonable, the interaction between them can create a failure mode that did not exist before.
        </p>
        <p>
          For homelab operators, the risk is not just inconvenience. An unexpected suspend can interrupt reverse
          proxies, DNS, monitoring, media services, backup jobs, and anything else running on the host. If the box is
          serving internal infrastructure, the blast radius can be much larger than one machine going idle.
        </p>
      </section>

      <section className="section glass card">
        <h2>Why updates still matter</h2>
        <p>
          At the same time, avoiding updates is not a real strategy. The same maintenance window that introduced this
          behavior also included updates to OpenSSL, OpenSSH, systemd, DNS tooling, kernel packages, and other core
          system components. Those packages are part of the security foundation of the host, and leaving them stale
          increases exposure over time.
        </p>
        <p>
          Security updates matter even more in homelabs that expose services through reverse proxies, remote access
          tools, or VPN-based management. A self-hosted environment is still infrastructure, and infrastructure needs
          patching. The answer is not to stop updating, but to update with better guardrails.
        </p>
      </section>

      <section className="section glass card">
        <h2>What I learned</h2>
        <p>
          The biggest lesson is that updates need a validation plan, not just a reboot. For an always-on homelab
          server, desktop-style power behavior should be explicitly disabled rather than left to defaults. Linux
          systems use systemd-logind to handle power-button and suspend-key actions, so those settings should be
          reviewed on any server-like machine. KDE Plasma’s PowerDevil also controls suspend behavior in Plasma-based
          environments, which means desktop convenience features can conflict with server reliability.
        </p>
        <p>
          A second lesson is that logs matter more than assumptions. The system journal made it clear that the machine
          was entering a clean suspend path rather than crashing, and that changed everything. Once you know whether a
          box is suspending, rebooting, panicking, or losing power, you can stop guessing and start fixing the right
          layer.
        </p>
      </section>

      <section className="section glass card">
        <h2>A better update strategy for homelabs</h2>
        <p>Here is the approach I recommend after this experience:</p>
        <ul className="list-tight sub">
          <li>
            Separate “server role” from “desktop role” where possible, because desktop power-management features can
            create unnecessary risk on infrastructure hosts.
          </li>
          <li>
            Review power-management settings after major updates, especially on Plasma-based systems using PowerDevil
            and Wayland.
          </li>
          <li>
            Keep recent package history and kernel versions handy so regressions can be correlated quickly after a
            change.
          </li>
          <li>
            Test updates in stages when possible, especially kernel, firmware, and system-management packages.
          </li>
          <li>
            Apply security updates consistently, but pair them with post-update checks for uptime, networking,
            containers, and system sleep behavior.
          </li>
        </ul>
      </section>

      <section className="section glass card">
        <h2>The balance</h2>
        <p>
          Homelab maintenance is always a balance between security and stability. Updates reduce risk from known
          vulnerabilities, but they can also introduce new behavior that breaks assumptions in an environment built over
          time. The goal is not to choose one over the other. The goal is to patch responsibly, monitor closely, and
          design the host so critical services are protected from workstation-style behavior.
        </p>
        <p>
          In other words: update your systems, but don’t trust defaults to protect uptime.
        </p>
      </section>

      <section className="section">
        <div className="btn-row">
          <Link href="/blog" className="btn">Back to Blog</Link>
          <Link href="/projects" className="btn">View Projects</Link>
        </div>
      </section>
    </article>
  );
}
