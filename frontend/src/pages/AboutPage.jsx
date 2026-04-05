import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, BarChart3, Handshake, Rocket, ArrowRight, Linkedin } from 'lucide-react';

const VALUES = [
  { icon: Zap, title: 'Always On', desc: 'We monitor 24x7, across every time zone.' },
  { icon: BarChart3, title: 'Data Over Opinion', desc: 'Every decision is backed by numbers.' },
  { icon: Handshake, title: 'Radical Transparency', desc: 'You see everything, always.' },
  { icon: Rocket, title: 'Results or Nothing', desc: "We don't celebrate effort, we celebrate outcomes." },
];

const TEAM = [
  { name: 'Founder / CEO', role: 'Strategy & Growth', covers: 'Global', initials: 'FC' },
  { name: 'Head of Paid Social', role: 'Meta, TikTok, LinkedIn Ads', covers: 'USA & UK', initials: 'PS' },
  { name: 'Lead Gen Strategist', role: 'Funnels & CRM', covers: 'Australia', initials: 'LG' },
  { name: 'Creative Director', role: 'Performance Creative', covers: 'Global', initials: 'CD' },
  { name: 'Client Success Lead', role: 'Onboarding & Support', covers: 'USA', initials: 'CS' },
];

const COUNTERS = [
  { value: '$50M+', label: 'Ad Spend Managed' },
  { value: '300+', label: 'Brands Scaled' },
  { value: '3', label: 'Countries' },
  { value: '5+', label: 'Years' },
  { value: '24x7', label: 'Uptime' },
];

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About 24x7 Solution | Always-On Marketing Agency</title>
        <meta name="description" content="Learn about 24x7 Solution — the always-on performance marketing agency built to serve businesses in the US, Australia, and UK around the clock." />
      </Helmet>
      <div className="pt-20 min-h-screen" data-testid="about-page">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-brand-mint font-mono text-sm mb-6 tracking-widest uppercase">Our Mission</p>
            <h1 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-brand-text leading-tight">
              Most agencies work 9-5.<br />
              We built 24x7 Solution to work like your business does — without stopping.
            </h1>
          </motion.div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display font-700 text-2xl text-brand-text mb-4">Our Story</h2>
            <div className="space-y-4 text-brand-muted leading-relaxed">
              <p>24x7 Solution was born from frustration. Frustration with agencies that disappear after onboarding. Frustration with campaign managers who clock out at 5pm while your ads keep spending. Frustration with monthly reports that hide more than they reveal.</p>
              <p>We built something different: a performance marketing agency that operates across US, UK, and Australian time zones with round-the-clock campaign management, real-time optimization, and radical transparency.</p>
              <p>Our team is structured to ensure that at any given hour, someone is watching your campaigns, analyzing your data, and making decisions that move the needle. Because leads don't stop at 5pm — and neither do we.</p>
            </div>
          </motion.div>
        </section>

        <section className="bg-brand-surface/30 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-700 text-2xl text-brand-text mb-10 text-center">The Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {TEAM.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-5 rounded-xl bg-brand-bg border border-brand-border text-center"
                >
                  <div className="w-14 h-14 mx-auto rounded-full bg-brand-mint/10 border border-brand-mint/20 flex items-center justify-center text-brand-mint font-display font-700 text-sm mb-3">
                    {t.initials}
                  </div>
                  <h3 className="font-display font-600 text-brand-text text-sm">{t.name}</h3>
                  <p className="text-xs text-brand-muted mt-1">{t.role}</p>
                  <p className="text-xs text-brand-mint/60 mt-1">Covers: {t.covers}</p>
                  <Linkedin size={14} className="text-brand-muted mx-auto mt-3 hover:text-brand-mint cursor-pointer transition-colors" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-700 text-2xl text-brand-text mb-10 text-center">Our Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {VALUES.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-xl bg-brand-surface border border-brand-border text-center"
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-brand-mint/10 border border-brand-mint/20 flex items-center justify-center mb-4">
                    <v.icon size={22} className="text-brand-mint" />
                  </div>
                  <h3 className="font-display font-700 text-brand-text mb-2">{v.title}</h3>
                  <p className="text-sm text-brand-muted">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-surface/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-700 text-2xl text-brand-text mb-10 text-center">By the Numbers</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {COUNTERS.map((c) => (
                <div key={c.label} className="text-center p-4">
                  <span className="font-mono font-700 text-3xl text-brand-mint">{c.value}</span>
                  <p className="text-sm text-brand-muted mt-1">{c.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-display font-700 text-2xl text-brand-text mb-4">Ready to Work With a Team That Never Stops?</h2>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-mint text-brand-bg font-display font-700 text-sm rounded-full hover:shadow-[0_0_24px_rgba(0,255,136,0.3)] transition-all mt-4">
              Book Your Free Strategy Call <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
