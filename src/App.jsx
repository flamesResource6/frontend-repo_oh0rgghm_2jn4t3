import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Background grid */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.06)_1px,transparent_1px)] bg-[size:44px_44px]" />

      <Navbar />
      <Hero />
      <Features />
      <CTA />

      {/* Footer */}
      <footer className="relative z-10 border-t border-emerald-400/20 bg-slate-950/80 py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-emerald-100/70 text-sm">© {new Date().getFullYear()} CyberShield. All rights reserved.</p>
            <div className="flex items-center gap-4 text-xs text-emerald-100/60">
              <a href="#privacy" className="hover:text-white">Privacy</a>
              <a href="#terms" className="hover:text-white">Terms</a>
              <a href="#status" className="hover:text-white">Status</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
