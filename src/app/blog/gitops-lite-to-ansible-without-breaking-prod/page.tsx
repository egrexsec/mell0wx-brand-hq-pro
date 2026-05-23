import Link from "next/link";

export default function GitOpsLiteToAnsibleWithoutBreakingProdPage() {
  return (
    <article>
      <p className="kicker">Published · Homelab Operations · Automation Maturity</p>
      <h1 className="hero-title">From GitOps-lite to Ansible Without Breaking Prod</h1>
      <p className="sub">
        A practical field note on evolving a live homelab from script-heavy operations into a validated Ansible
        baseline while keeping recovery paths, backup integrity, and service uptime intact.
      </p>

      <section className="section grid grid-2">
        <article className="glass card">
          <h2>What Changed</h2>
          <ul className="list-tight sub">
            <li>DR assets were standardized: runbook, bootstrap, secrets check, health check, restore order.</li>
            <li>Ansible baseline landed with inventory, roles, playbooks, host/group vars, and templates.</li>
            <li>Validation moved from ad-hoc checks to repeatable syntax + execution tests.</li>
          </ul>
        </article>
        <article className="glass card">
          <h2>Why This Worked</h2>
          <ul className="list-tight sub">
            <li>Incremental rollout instead of big-bang automation rewrites.</li>
            <li>Security-first defaults (private networking, controlled privilege, no secrets in Git).</li>
            <li>Reality-based health checks that distinguish true outages from expected states.</li>
          </ul>
        </article>
      </section>

      <section className="section glass card">
        <h2>Known-Good Validation Loop</h2>
        <pre className="sub" style={{ whiteSpace: "pre-wrap" }}>{`cd /home/mell0wx/homelab-infrastructure-backup/ansible
ansible-playbook --syntax-check playbooks/validate.yml
ansible-playbook -i inventory/hosts.yml playbooks/validate.yml -e ansible_become=false`}</pre>
        <p className="sub" style={{ marginTop: 12 }}>
          Operational nuance: Traefik root can return HTTP 404 when no route matches. In this environment, that is
          accepted as service alive, while connection failures still fail fast.
        </p>
      </section>

      <section className="section glass card">
        <h2>Operator Takeaway</h2>
        <p className="sub">
          Maturity is not about replacing every script with Ansible overnight. It is about building deterministic,
          testable workflows with clear rollback paths, then proving they work under normal ops pressure.
        </p>
        <div className="btn-row">
          <Link href="/blog" className="btn">Back to Blog</Link>
          <Link href="/projects" className="btn">View Related Projects</Link>
        </div>
      </section>
    </article>
  );
}
