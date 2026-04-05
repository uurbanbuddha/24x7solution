import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const METRICS = [
  { value: 50, suffix: 'M+', prefix: '$', label: 'Ad Spend Managed' },
  { value: 300, suffix: '+', prefix: '', label: 'Brands Scaled' },
  { value: 3, suffix: '', prefix: '', label: 'Countries Served' },
  { value: 24, suffix: 'x7', prefix: '', label: 'Campaign Monitoring' },
];

function Counter({ target, prefix, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
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
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="font-mono font-700 text-3xl sm:text-4xl lg:text-5xl text-brand-text">
      {prefix}{count}{suffix}
    </span>
  );
}

export default function MetricsBar() {
  return (
    <section data-testid="metrics-bar" className="relative border-y border-brand-border bg-brand-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {METRICS.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <Counter target={m.value} prefix={m.prefix} suffix={m.suffix} />
              <p className="text-brand-muted text-sm mt-2 font-body">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
