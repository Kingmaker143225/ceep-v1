import SiteLayout from "@/components/layout/SiteLayout"
import PageBanner from "@/components/layout/PageBanner"
import { importantDates } from "@/data/importantDates"

export default function ImportantDates() {
  return (
    <SiteLayout>
      <PageBanner
        title="Important Dates"
        crumbs={[{ label: "Important Dates" }]}
      />

      <div className="container mx-auto max-w-5xl py-16 px-4">
        <div className="relative">
          <div className="absolute left-5 top-0 h-full w-[3px] bg-[#06254D]/20 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
            {importantDates.map((item, i) => {
              const isActive = item.status === "active"
              const isCompleted = item.status === "completed"
              const isLeft = i % 2 === 0

              return (
                <div
                  key={i}
                  className={`relative flex ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  <div className="absolute left-5 top-8 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-blue-100 shadow-md md:left-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7H3v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>

                  <div
                    className={`ml-16 w-full rounded-xl border bg-white p-6 shadow-sm transition-all hover:shadow-md md:ml-0 md:w-[43%] ${
                      isActive
                        ? "border-yellow-500 shadow-md"
                        : "border-slate-200"
                    }`}
                  >
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <span className="text-xl font-bold text-[#06254D]">
                        {item.date}
                      </span>

                      <span
                        className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase ${
                          isActive
                            ? "bg-yellow-500 text-blue-950"
                            : isCompleted
                            ? "bg-slate-200 text-slate-600"
                            : "border border-[#06254D] text-[#06254D]"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>

                    <h3
                      className={`text-base font-semibold ${
                        isCompleted ? "text-slate-500" : "text-[#06254D]"
                      }`}
                    >
                      {item.event}
                    </h3>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </SiteLayout>
  )
}