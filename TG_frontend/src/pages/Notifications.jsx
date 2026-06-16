import SiteLayout from "@/components/layout/SiteLayout";
import PageBanner from "@/components/layout/PageBanner";
import { notifications } from "@/data/notifications";
import { useState } from "react";
import { Search, Calendar, Bell, X, ArrowRight } from "lucide-react";

const CATEGORIES = ["All", "Application", "Exam", "Result", "Counselling"];

function Badge({ children, className = "" }) {
  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${className}`}>
      {children}
    </span>
  );
}

export default function Notifications() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = notifications.filter((n) => {
    const matchesSearch =
      n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.summary.toLowerCase().includes(search.toLowerCase());

    const matchesCat = activeCategory === "All" || n.category === activeCategory;

    return matchesSearch && matchesCat;
  });

  return (
    <SiteLayout>
      <PageBanner
        title="Notifications & Updates"
        crumbs={[{ label: "Notifications" }]}
      />

      <div className="container mx-auto max-w-5xl px-4 py-12">
        <style>
          {`
            @keyframes fadeUp {
              from {
                opacity: 0;
                transform: translateY(18px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}
        </style>

        <div className="mb-8 rounded-3xl bg-gradient-to-r from-[#06254D] via-[#0B3A75] to-[#06254D] p-6 text-white shadow-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
              <Bell className="h-6 w-6 text-yellow-300" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Latest Notifications</h2>
              <p className="text-sm text-white/75">
                Search exam updates, applications, results and counselling news.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-white/60 bg-white/75 p-4 shadow-md backdrop-blur-xl md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              placeholder="Search notifications..."
              className="h-10 w-full rounded-md border border-slate-300 bg-white pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-yellow-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="flex w-full gap-2 overflow-x-auto md:w-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeCategory === cat
                    ? "bg-[#06254D] text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filtered.length === 0 ? (
            <div className="rounded-2xl border bg-white/75 py-12 text-center text-slate-500 shadow-md">
              No notifications found.
            </div>
          ) : (
            filtered.map((n, i) => (
              <div
                key={n.id}
                className="group flex flex-col gap-4 rounded-2xl border border-white/60 bg-white/80 p-5 shadow-md backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:flex-row sm:items-center"
                style={{ animation: `fadeUp 0.45s ease ${i * 0.08}s both` }}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-[#06254D]">
                  <Bell className="h-6 w-6" />
                </div>

                <div className="flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <Badge className="bg-slate-100 text-slate-700">
                      {n.category}
                    </Badge>

                    <span className="flex items-center text-xs text-slate-500">
                      <Calendar className="mr-1 h-3 w-3" />
                      {n.date}
                    </span>

                    {n.isNew && (
                      <Badge className="bg-red-500 text-white">
                        NEW
                      </Badge>
                    )}
                  </div>

                  <h3 className="mb-1 text-lg font-bold text-[#06254D] group-hover:text-yellow-600">
                    {n.title}
                  </h3>

                  <p className="line-clamp-2 text-sm text-slate-500">
                    {n.summary}
                  </p>
                </div>

                <button
                  onClick={() => setSelected(n)}
                  className="inline-flex items-center justify-center gap-1 rounded-full border border-[#06254D]/20 px-4 py-2 text-sm font-bold text-[#06254D] transition hover:bg-[#06254D] hover:text-white"
                >
                  Read more
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
            <div className="relative w-full max-w-lg rounded-3xl border border-white/60 bg-white p-6 shadow-2xl">
              <button
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 rounded-full bg-slate-100 p-2 text-slate-500 hover:bg-slate-200"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="mb-4 flex items-center gap-2 pr-10">
                <Badge className="bg-slate-100 text-slate-700">
                  {selected.category}
                </Badge>
                <span className="text-xs text-slate-500">{selected.date}</span>
              </div>

              <h2 className="mb-4 text-2xl font-bold text-[#06254D]">
                {selected.title}
              </h2>

              <p className="text-sm leading-7 text-slate-600">
                {selected.body}
              </p>
            </div>
          </div>
        )}
      </div>
    </SiteLayout>
  );
}

