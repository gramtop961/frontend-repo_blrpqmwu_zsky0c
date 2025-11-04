import { useState } from "react";
import { Plane } from "lucide-react";

export default function HeroBooking() {
  const [stats] = useState([
    { label: "Airlines", value: "200+" },
    { label: "Countries", value: "120+" },
    { label: "Avg. savings", value: "$86" },
    { label: "Happy travelers", value: "1M+" },
  ]);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white" aria-hidden />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm mb-4">
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-white">
                <Plane className="h-3 w-3" />
              </span>
              Trusted by 1M+ travelers
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              Book flights with confidence
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Compare the best fares from leading airlines. Transparent pricing, secure checkout, and world‑class support.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center lg:mt-10">
            {stats.map((item) => (
              <div key={item.label} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-sm text-slate-500">{item.label}</div>
                <div className="mt-1 text-lg font-semibold text-slate-900">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
