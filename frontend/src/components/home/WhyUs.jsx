import { motion } from 'framer-motion';
import { Clock, BarChart3, Shield } from 'lucide-react';

const PILLARS = [
  {
    icon: Clock,
    title: 'Always-On Management',
    desc: 'Your campaigns run 24 hours. So do we. Live across US, UK & AU time zones.',
  },
  {
    icon: BarChart3,
    title: 'Performance-First, Always',
    desc: "We don't celebrate vanity metrics. We report ROAS, CPL, and real revenue.",
  },
  {
    icon: Shield,
    title: 'Zero Fluff. Full Accountability.',
    desc: 'No retainer lock-ins. No hiding behind dashboards. Just results.',
  },
];

export default function WhyUs() {
  return (
    <section data-testid="why-us-section" className="py-20 lg:py-28 bg-brand-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-mint font-mono text-sm mb-3 tracking-widest uppercase">Why 24x7 Solution</p>
          <h2 className="font-display font-800 text-3xl sm:text-4xl text-brand-text">
            We Don't Clock Out. Neither Does Your Growth.
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="p-8 rounded-xl bg-brand-bg border border-brand-border text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-brand-mint/10 border border-brand-mint/20 flex items-center justify-center mb-5">
                <p.icon size={24} className="text-brand-mint" />
              </div>
              <h3 className="font-display font-700 text-xl text-brand-text mb-3">{p.title}</h3>
              <p className="text-sm text-brand-muted leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
