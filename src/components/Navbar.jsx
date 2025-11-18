import { Menu, Shield, ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <header className="relative z-20">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div className="flex items-center justify-between rounded-2xl border border-emerald-400/20 bg-slate-900/60 px-4 py-3 backdrop-blur-xl shadow-[0_0_40px_rgba(16,185,129,0.15)]">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-green-600 ring-1 ring-inset ring-emerald-300/50 shadow-lg">
              <Shield className="h-5 w-5 text-slate-900" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-white">
              CyberShield
            </span>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-emerald-100/80 md:flex">
            <a href="#solutions" className="hover:text-white transition-colors">Solutions</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#resources" className="hover:text-white transition-colors flex items-center gap-1">Resources <ChevronDown className="h-4 w-4" /></a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="hidden md:block">
            <a href="#audit" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/25 focus:outline-none focus:ring-2 focus:ring-emerald-400">
              Get a Security Audit
            </a>
          </div>

          <button className="md:hidden inline-flex items-center justify-center rounded-xl border border-emerald-400/30 p-2 text-emerald-200/80">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
