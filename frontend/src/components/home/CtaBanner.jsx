import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section data-testid="cta-banner" className="py-20 lg:py-28 bg-brand-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-10 lg:p-16 rounded-2xl border border-brand-mint/20 bg-gradient-to-br from-brand-mint/5 to-brand-blue/5 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,136,0.06),transparent_70%)]" />
          <div className="relative z-10">
            <h2 className="font-display font-800 text-3xl sm:text-4xl text-brand-text mb-4">
              Ready to Have a Marketing Team<br className="hidden sm:block" /> That Never Clocks Out?
            </h2>
            <p className="text-brand-muted text-base mb-8 max-w-xl mx-auto">
              Book a free 30-minute strategy call. We'll audit your current marketing and show you exactly where you're leaving money on the table.
            </p>
            <Link
              to="/contact"
              data-testid="cta-banner-button"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-brand-mint text-brand-bg font-display font-700 text-base rounded-full hover:shadow-[0_0_32px_rgba(0,255,136,0.3)] transition-all duration-300"
            >
              Book Your Free Strategy Call
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
