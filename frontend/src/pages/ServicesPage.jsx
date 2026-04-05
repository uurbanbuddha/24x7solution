import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Megaphone, Target, Zap, Video, Mail, Search, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ServicesFaqJsonLd } from '@/components/shared/JsonLd';

const ICON_MAP = { Megaphone, Target, Zap, Video, Mail, Search };

function IncludedItem({ text }) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg bg-brand-bg/50 border border-brand-border/50">
      <CheckCircle2 size={18} className="text-brand-mint flex-shrink-0 mt-0.5" />
      <span className="text-sm text-brand-muted">{text}</span>
    </div>
  );
}

function MarketTag({ name }) {
  return (
    <span className="text-xs font-mono px-2 py-1 rounded bg-brand-surface border border-brand-border text-brand-muted">{name}</span>
  );
}

function ServiceBlock({ svc, idx }) {
  const Icon = ICON_MAP[svc.iconName];
  const bg = idx % 2 === 0 ? 'bg-brand-bg' : 'bg-brand-surface/30';
  const items = svc.included || [];
  const mkts = svc.markets || [];

  return (
    <div id={svc.id} className={`py-16 lg:py-20 ${bg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="w-12 h-12 rounded-xl bg-brand-mint/10 border border-brand-mint/20 flex items-center justify-center mb-5">
              {Icon && <Icon size={24} className="text-brand-mint" />}
            </div>
            <h2 className="font-display font-800 text-2xl sm:text-3xl text-brand-text mb-2">{svc.title}</h2>
            <p className="text-sm text-brand-muted font-mono mb-4">{svc.subtitle}</p>
            <p className="text-brand-muted leading-relaxed mb-6">{svc.description}</p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-mint/10 border border-brand-mint/20 mb-6">
              <span className="text-sm font-mono font-600 text-brand-mint">Typical results:</span>
              <span className="text-sm text-brand-text">{svc.results}</span>
            </div>
            <div className="flex items-center gap-2 mb-6">
              {mkts.map((m) => <MarketTag key={m} name={m} />)}
            </div>
            <Link to="/contact" data-testid={`service-cta-${svc.id}`} className="inline-flex items-center gap-2 px-6 py-3 bg-brand-mint text-brand-bg font-display font-700 text-sm rounded-full hover:shadow-[0_0_24px_rgba(0,255,136,0.3)] transition-all duration-300">
              Start {svc.title} <ArrowRight size={16} />
            </Link>
          </div>
          <div className="space-y-3">
            <h3 className="font-display font-600 text-brand-text text-sm mb-4 uppercase tracking-wider">What's Included</h3>
            {items.map((item) => <IncludedItem key={item} text={item} />)}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const services = require('@/data/content').SERVICES_DATA;

  return (
    <>
      <Helmet>
        <title>Performance Marketing Services | 24x7 Solution</title>
      </Helmet>
      <div className="pt-20" data-testid="services-page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-brand-mint font-mono text-sm mb-4 tracking-widest uppercase">What We Do</p>
            <h1 className="font-display font-800 text-4xl sm:text-5xl text-brand-text mb-4">Full-Stack Performance Marketing.</h1>
            <p className="text-brand-muted text-base max-w-2xl mx-auto">Six core services. One relentless team. Every campaign monitored around the clock.</p>
          </motion.div>
        </div>
        {services.map((s, i) => <ServiceBlock key={s.id} svc={s} idx={i} />)}
      </div>
    </>
  );
}
