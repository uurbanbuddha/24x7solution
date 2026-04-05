import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const ROTATING_WORDS = ['Leads', 'Revenue', 'Brand', 'Growth'];

function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(0,255,136,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,255,136,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-mint/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-blue/5 rounded-full blur-[120px]" />
    </div>
  );
}

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % ROTATING_WORDS.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <section data-testid="hero-section" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <GridBackground />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-mint/20 bg-brand-mint/5 mb-8"
        >
          <span className="w-2 h-2 bg-brand-mint rounded-full animate-pulse-live" />
          <span className="text-xs font-mono text-brand-mint">Live Across USA &middot; AU &middot; UK Time Zones</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-display font-800 text-4xl sm:text-5xl lg:text-7xl text-brand-text leading-[1.1] tracking-tight mb-6"
        >
          We Scale Your{' '}
          <span className="relative inline-block w-[180px] sm:w-[240px] lg:w-[300px] text-left align-bottom overflow-hidden h-[1.15em]">
            {ROTATING_WORDS.map((word, i) => (
              <motion.span
                key={word}
                className="absolute left-0 text-brand-mint"
                initial={{ y: '100%', opacity: 0 }}
                animate={{
                  y: i === wordIndex ? '0%' : '-100%',
                  opacity: i === wordIndex ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                {word}
              </motion.span>
            ))}
          </span>
          <br className="hidden sm:block" />
          {' '}&mdash; 24x7.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg text-brand-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          24x7 Solution is a performance marketing agency that runs your paid social,
          lead generation & Google Ads around the clock — so high-value clients in the US,
          Australia, and UK keep coming to you. Non-stop.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <Link
            to="/contact"
            data-testid="hero-cta-primary"
            className="group relative px-8 py-4 bg-brand-mint text-brand-bg font-display font-700 text-base rounded-full hover:shadow-[0_0_32px_rgba(0,255,136,0.3)] transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Your Free Strategy Call <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </Link>
          <Link
            to="/case-studies"
            data-testid="hero-cta-secondary"
            className="px-8 py-4 border border-brand-border text-brand-text font-display font-600 text-base rounded-full hover:border-brand-mint/40 hover:text-brand-mint transition-all duration-300 flex items-center gap-2"
          >
            <Play size={16} /> See Client Results
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xs text-brand-muted"
        >
          No lock-in contracts &middot; Free onboarding audit &middot; Results guaranteed or we work for free
        </motion.p>
      </div>
    </section>
  );
}
