import { motion } from 'framer-motion';
import { ClipboardCheck, Compass, Rocket, TrendingUp } from 'lucide-react';

const STEPS = [
  {
    icon: ClipboardCheck,
    number: '01',
    title: '24x7 Audit',
    desc: 'We dissect your current marketing in 48 hours.',
  },
  {
    icon: Compass,
    number: '02',
    title: 'Strategy Sprint',
    desc: 'A custom growth roadmap built for your market (US/AU/UK), budget, and goals.',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Launch & Monitor',
    desc: 'Campaigns go live with 24x7 oversight and real-time optimization.',
  },
  {
    icon: TrendingUp,
    number: '04',
    title: 'Scale & Report',
    desc: "We scale what works. Kill what doesn't. You see everything in real-time.",
  },
];

export default function ProcessTimeline() {
  return (
    <section data-testid="process-timeline" className="py-20 lg:py-28 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-mint font-mono text-sm mb-3 tracking-widest uppercase">Our Process</p>
          <h2 className="font-display font-800 text-3xl sm:text-4xl text-brand-text">
            From Audit to Scale — in 4 Weeks.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-brand-mint/20 via-brand-mint/40 to-brand-mint/20" />
          {STEPS.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-brand-mint/10 border border-brand-mint/20 flex items-center justify-center mb-5 relative z-10">
                <s.icon size={24} className="text-brand-mint" />
              </div>
              <span className="font-mono text-xs text-brand-mint/50 mb-1 block">{s.number}</span>
              <h3 className="font-display font-700 text-lg text-brand-text mb-2">{s.title}</h3>
              <p className="text-sm text-brand-muted leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
