import { Link } from "wouter";
import {
  BookOpen,
  MonitorPlay,
  Cpu,
  Zap,
  Briefcase,
  Database,
} from "lucide-react";
import SectionTitle from "./SectionTitle";
import { courses } from "@/data/courses";

const iconMap = {
  "MTech CSE": Database,
  "MTech ECE": Cpu,
  "MTech EEE": Zap,
  "MTech Mech": BookOpen,
  MBA: Briefcase,
  MCA: MonitorPlay,
};

export default function CoursesPreview() {
  return (
    <section className="py-16 bg-background relative">
      <div className="container mx-auto max-w-7xl px-4">
        <SectionTitle title="Programs Offered" centered />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {courses.map((course, i) => {
            const Icon = iconMap[course.code] || BookOpen;

            return (
              <div
                key={i}
                className="group border border-border rounded-xl p-6 bg-card hover:border-primary/50 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="mb-2">
                  <span className="text-xs font-bold text-secondary bg-secondary/10 px-2 py-1 rounded">
                    {course.code}
                  </span>
                </div>

                <h3 className="font-bold text-lg mb-2 text-primary">
                  {course.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {course.description}
                </p>

                <Link href="/syllabus">
                  <div className="text-sm font-semibold text-primary flex items-center gap-1 hover:text-secondary transition-colors cursor-pointer w-max">
                    View Syllabus{" "}
                    <span className="text-lg leading-none">&rarr;</span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}