export default function CTA() {
  return (
    <section id="audit" className="relative z-10 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="overflow-hidden rounded-3xl border border-emerald-400/25 bg-gradient-to-br from-slate-900 to-slate-950 p-8 shadow-[0_0_50px_rgba(16,185,129,0.12)] sm:p-12">
          <div className="grid gap-8 sm:grid-cols-2 sm:items-center">
            <div>
              <h3 className="bg-gradient-to-br from-white via-emerald-50 to-emerald-200 bg-clip-text text-2xl font-bold tracking-tight text-transparent sm:text-3xl">
                Get your free security posture audit
              </h3>
              <p className="mt-2 text-emerald-100/80">
                We run 30+ baseline checks across identity, endpoints, cloud, and data to highlight your top risks and quick wins.
              </p>
              <ul className="mt-4 space-y-2 text-emerald-100/80 text-sm list-disc list-inside">
                <li>Attack surface overview</li>
                <li>Misconfigurations and exposures</li>
                <li>Priority remediation plan</li>
              </ul>
            </div>

            <form className="rounded-2xl border border-emerald-400/20 bg-slate-900/60 p-4 backdrop-blur-xl">
              <div className="grid gap-3 sm:grid-cols-2">
                <input className="rounded-xl border border-emerald-400/30 bg-slate-950/60 px-4 py-2 text-sm text-white placeholder-emerald-200/50 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Full name" />
                <input className="rounded-xl border border-emerald-400/30 bg-slate-950/60 px-4 py-2 text-sm text-white placeholder-emerald-200/50 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Work email" />
                <input className="sm:col-span-2 rounded-xl border border-emerald-400/30 bg-slate-950/60 px-4 py-2 text-sm text-white placeholder-emerald-200/50 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Company" />
                <button type="button" className="sm:col-span-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/25">
                  Request audit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
