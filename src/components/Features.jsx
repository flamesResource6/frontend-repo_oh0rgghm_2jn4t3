import { ShieldCheck, Lock, Radar, Server, Globe, Activity } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Zero‑Trust Access",
    desc: "Eliminate implicit trust. Enforce identity, device, and context verification on every request.",
  },
  {
    icon: Radar,
    title: "Autonomous Detection",
    desc: "AI-driven behavioral analytics to detect anomalies in real time across your stack.",
  },
  {
    icon: Lock,
    title: "Encryption Everywhere",
    desc: "End-to-end encryption with hardware-backed keys and continuous key rotation.",
  },
  {
    icon: Server,
    title: "Cloud Native",
    desc: "Seamless coverage across multi-cloud and on-prem with agentless deployment.",
  },
  {
    icon: Globe,
    title: "Compliance Ready",
    desc: "Automated evidence collection for SOC2, ISO 27001, HIPAA, GDPR, and more.",
  },
  {
    icon: Activity,
    title: "24/7 Monitoring",
    desc: "Global telemetry backbone with sub-second alerting and response orchestration.",
  },
];

export default function Features() {
  return (
    <section id="solutions" className="relative z-10 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="bg-gradient-to-br from-white via-emerald-50 to-emerald-200 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
            Secure by design. Intelligent by default.
          </h2>
          <p className="mt-3 text-emerald-100/80">
            A unified platform that prevents, detects, and responds to threats — automatically.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-emerald-400/20 bg-slate-900/60 p-6 backdrop-blur-xl shadow-[0_0_40px_rgba(16,185,129,0.08)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-green-600 ring-1 ring-emerald-300/50 shadow-lg">
                <Icon className="h-6 w-6 text-slate-900" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-1 text-sm text-emerald-100/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
