import { useState } from "react";
import { Calendar, Users, Search, Repeat, MapPin } from "lucide-react";

export default function BookSection() {
  const [tripType, setTripType] = useState("round");
  const [form, setForm] = useState({
    from: "",
    to: "",
    depart: "",
    return: "",
    travelers: 1,
    cabin: "Economy",
  });

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  const swap = () => setForm((f) => ({ ...f, from: f.to, to: f.from }));

  const submit = (e) => {
    e.preventDefault();
    const route = `${form.from || "Origin"} → ${form.to || "Destination"}`;
    const dates = tripType === "oneway"
      ? `Depart: ${form.depart || "Any"}`
      : `Depart: ${form.depart || "Any"}${form.return ? ", Return: " + form.return : ""}`;
    alert(`Searching ${tripType === "oneway" ? "one‑way" : "round‑trip"} flights\n${route}\n${dates}\nTravelers: ${form.travelers}, Cabin: ${form.cabin}`);
  };

  return (
    <section id="book" className="py-14 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Book your flight</h2>
          <p className="mt-2 text-slate-600">Find the best fares across hundreds of airlines in seconds.</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 shadow">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            {[
              { key: "round", label: "Round trip" },
              { key: "oneway", label: "One‑way" },
            ].map((t) => (
              <button
                key={t.key}
                onClick={() => setTripType(t.key)}
                className={`rounded-full border px-3 py-1 ${tripType === t.key ? "border-blue-600 text-blue-700 bg-blue-50" : "border-slate-300 text-slate-600 hover:bg-slate-50"}`}
                type="button"
                aria-pressed={tripType === t.key}
              >
                {t.label}
              </button>
            ))}
          </div>

          <form onSubmit={submit} className="mt-4 grid grid-cols-1 md:grid-cols-6 gap-3">
            <div className="md:col-span-2">
              <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-600" /> From
              </label>
              <input
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="City or airport"
                value={form.from}
                onChange={(e) => update("from", e.target.value)}
                required
              />
            </div>
            <div className="md:col-span-1 flex items-end">
              <button
                type="button"
                onClick={swap}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-700 hover:bg-slate-50"
                aria-label="Swap origin and destination"
              >
                <Repeat className="h-4 w-4" />
                <span className="md:hidden">Swap</span>
              </button>
            </div>
            <div className="md:col-span-3">
              <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-600" /> To
              </label>
              <input
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="City or airport"
                value={form.to}
                onChange={(e) => update("to", e.target.value)}
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                <Calendar className="h-4 w-4 text-blue-600" /> Depart
              </label>
              <input
                type="date"
                value={form.depart}
                onChange={(e) => update("depart", e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className={`text-sm font-medium text-slate-700 flex items-center gap-2 ${tripType === "oneway" ? "opacity-50" : ""}`}>
                <Calendar className="h-4 w-4 text-blue-600" /> Return
              </label>
              <input
                type="date"
                value={form.return}
                onChange={(e) => update("return", e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                disabled={tripType === "oneway"}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                <Users className="h-4 w-4 text-blue-600" /> Travelers
              </label>
              <input
                type="number"
                min={1}
                max={9}
                value={form.travelers}
                onChange={(e) => update("travelers", Number(e.target.value))}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Cabin</label>
              <select
                value={form.cabin}
                onChange={(e) => update("cabin", e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option>Economy</option>
                <option>Premium Economy</option>
                <option>Business</option>
                <option>First</option>
              </select>
            </div>

            <div className="md:col-span-6 flex items-center justify-end pt-2">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
              >
                <Search className="h-4 w-4" /> Search flights
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
