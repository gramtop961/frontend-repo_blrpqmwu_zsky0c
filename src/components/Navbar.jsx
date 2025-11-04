import { Plane, Shield, Phone } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/70 backdrop-blur border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white shadow">
              <Plane className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-slate-900">AeroTrust</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#book" className="hover:text-slate-900 transition">Book</a>
            <a href="#deals" className="hover:text-slate-900 transition">Deals</a>
            <a href="#trust" className="hover:text-slate-900 transition">Why Us</a>
            <a href="#support" className="hover:text-slate-900 transition">Support</a>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 text-sm text-slate-600">
              <Shield className="h-4 w-4 text-emerald-600" />
              <span>Secure booking</span>
            </div>
            <a
              href="#support"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              <Phone className="h-4 w-4" />
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
