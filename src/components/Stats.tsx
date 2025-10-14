import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/siteConfig";

const StatCard = ({ number, label, suffix }: { number: number; label: string; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = number / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= number) {
        setCount(number);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, number]);

  return (
    <div 
      ref={ref}
      className="bg-card p-8 rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 text-center animate-scale-in"
    >
      <div className="text-5xl md:text-6xl font-bold text-primary mb-2 animate-counter">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-lg text-muted-foreground font-medium">
        {label}
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.stats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
