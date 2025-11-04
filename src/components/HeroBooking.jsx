import { useState } from "react";
import { Plane, Calendar, Users, Search } from "lucide-react";

export default function HeroBooking() {
  const [form, setForm] = useState({
    from: "New York (JFK)",
    to: "London (LHR)",
    depart: "",
    return: "",
    travelers: 1,
    cabin: "Economy",
  });

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const summary = `Searching flights from ${form.from} to ${form.to} for ${form.travelers} traveler(s), ${form.cabin} cabin. Depart: ${form.depart || "Any"}${form.return ? ", Return: " + form.return : ""}`;
    alert(summary);
  };

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

          <div id="book">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 shadow-lg/50 shadow-slate-200"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="col-span-1">
                  <label className="text-sm font-medium text-slate-700">From</label>
                  <input
                    type="text"
                    value={form.from}
                    onChange={(e) => update("from", e.target.value)}
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="City or airport"
                    required
                    aria-label="From"
                  />
                </div>
                <div className="col-span-1">
                  <label className="text-sm font-medium text-slate-700">To</label>
                  <input
                    type="text"
                    value={form.to}
                    onChange={(e) => update("to", e.target.value)}
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="City or airport"
                    required
                    aria-label="To"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    <Calendar className="h-4 w-4 text-blue-600" /> Depart
                  </label>
                  <input
                    type="date"
                    value={form.depart}
                    onChange={(e) => update("depart", e.target.value)}
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    aria-label="Depart date"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    <Calendar className="h-4 w-4 text-blue-600" /> Return
                  </label>
                  <input
                    type="date"
                    value={form.return}
                    onChange={(e) => update("return", e.target.value)}
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    aria-label="Return date"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    <Users className="h-4 w-4 text-blue-600" /> Travelers
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={9}
                    value={form.travelers}
                    onChange={(e) => update("travelers", Number(e.target.value))}
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    aria-label="Travelers"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Cabin</label>
                  <select
                    value={form.cabin}
                    onChange={(e) => update("cabin", e.target.value)}
                    className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    aria-label="Cabin class"
                  >
                    <option>Economy</option>
                    <option>Premium Economy</option>
                    <option>Business</option>
                    <option>First</option>
                  </select>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="text-xs text-slate-500">
                  No hidden fees. Free 24h cancellation.
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
                >
                  <Search className="h-4 w-4" />
                  Search flights
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center" id="deals">
          {[
            { label: "Flexible fares", value: "Up to 30% off" },
            { label: "Summer deals", value: "Save big" },
            { label: "Loyalty match", value: "Elite fast-track" },
            { label: "Green routes", value: "Lower emissions" },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="text-sm text-slate-500">{item.label}</div>
              <div className="mt-1 text-lg font-semibold text-slate-900">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
