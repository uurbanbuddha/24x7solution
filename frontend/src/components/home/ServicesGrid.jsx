import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Megaphone, Target, Zap, Video, Mail, Search, ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    icon: Megaphone,
    title: 'Paid Social Ads',
    desc: 'Meta, TikTok, LinkedIn — managed 24x7 for maximum ROAS.',
    href: '/services#paid-social',
  },
  {
    icon: Target,
    title: 'Google Ads & PPC',
    desc: 'Search, Display, YouTube, Shopping — precision-targeted.',
    href: '/services#google-ads',
  },
  {
    icon: Zap,
    title: 'Lead Generation Funnels',
    desc: 'Landing pages, lead magnets, nurture sequences that convert.',
    href: '/services#lead-gen',
  },
  {
    icon: Video,
    title: 'Performance Creative',
    desc: 'UGC video ads, static creatives, A/B tested hooks.',
    href: '/services#creative',
  },
  {
    icon: Mail,
    title: 'Email Marketing & CRM',
    desc: 'Klaviyo, HubSpot, ActiveCampaign — automated and optimized.',
    href: '/services#email',
  },
  {
    icon: Search,
    title: 'SEO & Content Marketing',
    desc: 'Technical SEO, content strategy, link building for US/AU/UK.',
    href: '/services#seo',
  },
];

export default function ServicesGrid() {
  return (
    <section data-testid="services-grid" className="py-20 lg:py-28 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-mint font-mono text-sm mb-3 tracking-widest uppercase">Services</p>
          <h2 className="font-display font-800 text-3xl sm:text-4xl text-brand-text">
            Everything You Need to Scale. Under One Roof.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={s.href}
                data-testid={`service-card-${i}`}
                className="block p-6 rounded-xl bg-brand-surface border border-brand-border card-hover group"
              >
                <div className="w-11 h-11 rounded-lg bg-brand-mint/10 border border-brand-mint/20 flex items-center justify-center mb-4 group-hover:bg-brand-mint/20 transition-colors">
                  <s.icon size={20} className="text-brand-mint" />
                </div>
                <h3 className="font-display font-700 text-lg text-brand-text mb-2">{s.title}</h3>
                <p className="text-sm text-brand-muted mb-4 leading-relaxed">{s.desc}</p>
                <span className="text-xs font-display font-600 text-brand-mint flex items-center gap-1 group-hover:gap-2 transition-all">
                  Explore <ArrowRight size={12} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
