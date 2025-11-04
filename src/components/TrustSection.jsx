import { Shield, CheckCircle, Mail, Phone } from "lucide-react";

export default function TrustSection() {
  const points = [
    {
      icon: <Shield className="h-5 w-5 text-emerald-600" />,
      title: "Bank‑grade security",
      desc: "Your data is encrypted end‑to‑end with rigorous compliance standards.",
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-emerald-600" />,
      title: "Transparent pricing",
      desc: "No hidden fees or surprises at checkout — ever.",
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-emerald-600" />,
      title: "24/7 expert support",
      desc: "Dedicated agents ready to help with changes and special requests.",
    },
  ];

  return (
    <section id="trust" className="py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Travel made simple and secure</h2>
            <p className="mt-3 text-slate-600">
              We partner with leading airlines and payment providers to ensure a seamless and protected booking experience.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {points.map((p) => (
                <div key={p.title} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-2">
                    {p.icon}
                    <div className="font-medium text-slate-900">{p.title}</div>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-sm" id="support">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-blue-600" />
              <div className="text-sm font-medium text-slate-700">Need help?</div>
            </div>
            <h3 className="mt-2 text-xl font-semibold text-slate-900">Concierge travel support</h3>
            <p className="mt-2 text-slate-600 text-sm">
              Changes, cancellations, special meals, seating — our experts do it for you.
            </p>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="mailto:support@aerotrust.com"
                className="flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-700 hover:bg-slate-50"
              >
                <Mail className="h-4 w-4" /> Email support
              </a>
              <a
                href="tel:+18001234567"
                className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                <Phone className="h-4 w-4" /> Call now
              </a>
            </div>

            <div className="mt-6 text-xs text-slate-500">
              Response times under 5 minutes on average.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
