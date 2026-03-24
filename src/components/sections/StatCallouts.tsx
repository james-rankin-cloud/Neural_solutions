import { useEffect, useRef, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 120, suffix: "+", label: "Automations deployed" },
  { value: 6, suffix: "", label: "Industries served" },
  { value: 3, suffix: "x", label: "Average ROI" },
  { value: 24, suffix: "/7", label: "AI uptime" },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <span ref={ref} className="font-display text-6xl md:text-7xl lg:text-8xl font-extrabold text-foreground tabular-nums">
      {count}{suffix}
    </span>
  );
};

const StatCallouts = () => (
  <section className="py-28 px-6 relative z-10">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {stats.map((stat, i) => (
          <ScrollReveal key={stat.label} delay={i * 100}>
            <div className="text-center">
              <CountUp target={stat.value} suffix={stat.suffix} />
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mt-3">{stat.label}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default StatCallouts;