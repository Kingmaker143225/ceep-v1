import { importantDates } from "@/data/importantDates";
import SectionTitle from "./SectionTitle";
import { CalendarDays } from "lucide-react";

export default function UpcomingDates() {
  const upcoming = importantDates
    .filter((d) => d.status === "upcoming" || d.status === "active")
    .slice(0, 4);

  return (
    <section className="py-10 bg-muted/20">
      <div className="container mx-auto max-w-7xl px-4">
        <SectionTitle title="Important Schedule" centered />

        <div className="relative mt-12">
          {/* Horizontal line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-border -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-4 gap-6 relative z-10">
            {upcoming.map((item, i) => (
              <div key={i} className="relative pt-8 md:pt-0">
                
                {/* Timeline dot */}
                <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-secondary border-4 border-background z-20" />

                {/* Card replacement */}
                <div
                  className={`relative bg-card border border-border rounded-xl shadow-sm p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg ${
                    item.status === "active"
                      ? "border-secondary ring-1 ring-secondary/20"
                      : ""
                  }`}
                >
                  {/* Current badge */}
                  {item.status === "active" && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Current
                    </div>
                  )}

                  <div className="w-10 h-10 mx-auto bg-primary/5 rounded-full flex items-center justify-center text-primary mb-4">
                    <CalendarDays className="w-5 h-5" />
                  </div>

                  <div className="font-bold text-lg text-foreground mb-1">
                    {item.date}
                  </div>

                  <div className="text-sm text-muted-foreground font-medium">
                    {item.event}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}