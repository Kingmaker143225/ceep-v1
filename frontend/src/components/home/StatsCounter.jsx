import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { label: "Participating Institutes", value: 125, suffix: "+" },
  { label: "PG Courses Offered", value: 45, suffix: "" },
  { label: "Test Centers", value: 18, suffix: "" },
  { label: "Students Enrolled", value: 45000, suffix: "+" },
];

function Counter({ value, duration = 2 }: { value, duration? }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = value / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [value, duration, isInView]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export default function StatsCounter() {
  return (
    <section className="py-16 bg-primary text-primary-foreground relative">
      <div className="absolute inset-0 opacity-10 bg-[url('@/assets/pattern.png')] bg-cover bg-center mix-blend-overlay pointer-events-none" />
      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-secondary/20">
          {stats.map((stat, i) => (
            <div key={i} className="text-center px-4 first:border-l-0">
              <div className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-2 drop-shadow-sm">
                <Counter value={stat.value} />{stat.suffix}
              </div>
              <div className="text-sm md:text-base font-medium text-white/80 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}