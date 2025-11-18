import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradients and overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-900/30 to-slate-950" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(16,185,129,0.25),transparent)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-slate-900/60 px-3 py-1 text-xs text-emerald-200/80 backdrop-blur-xl">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Live Threat Intelligence
        </div>

        <h1 className="mt-6 max-w-4xl bg-gradient-to-br from-white via-emerald-50 to-emerald-200 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl">
          Next‑Gen Cyber Security, Built for Trust
        </h1>
        <p className="mt-4 max-w-2xl text-base text-emerald-100/80 sm:text-lg">
          Protect your business with autonomous detection, automated response, and continuous compliance — powered by AI and zero‑trust architecture.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a href="#audit" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/25">
            Start Free Security Audit
          </a>
          <a href="#demo" className="inline-flex items-center justify-center rounded-xl border border-emerald-400/30 bg-slate-900/60 px-6 py-3 text-sm font-semibold text-emerald-100/90 backdrop-blur-xl">
            View Interactive Demo
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-10 grid w-full max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
          {["SOC 2", "ISO 27001", "HIPAA", "GDPR"].map((item) => (
            <div key={item} className="rounded-xl border border-emerald-400/20 bg-slate-900/60 p-3 text-center text-xs text-emerald-100/80 backdrop-blur-xl">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
