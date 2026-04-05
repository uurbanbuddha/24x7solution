import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CASES = [
  {
    slug: 'us-ecommerce-meta-ads',
    flag: '\u{1F1FA}\u{1F1F8}',
    region: 'USA',
    client: 'US E-commerce Brand',
    result: '4.8x ROAS in 90 days via Meta Ads',
    service: 'Paid Social',
    stat: '4.8x',
    statLabel: 'ROAS',
  },
  {
    slug: 'au-b2b-saas-lead-gen',
    flag: '\u{1F1E6}\u{1F1FA}',
    region: 'Australia',
    client: 'AU B2B SaaS Company',
    result: 'CPL reduced from $120 to $34 in 60 days',
    service: 'Lead Generation',
    stat: '$34',
    statLabel: 'CPL (from $120)',
  },
  {
    slug: 'uk-real-estate-google-ads',
    flag: '\u{1F1EC}\u{1F1E7}',
    region: 'UK',
    client: 'UK Real Estate Agency',
    result: '2,400 qualified leads in Q4 2024',
    service: 'Google Ads + Funnels',
    stat: '2,400',
    statLabel: 'Leads in Q4',
  },
];

export default function CaseStudiesPreview() {
  return (
    <section data-testid="case-studies-preview" className="py-20 lg:py-28 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-mint font-mono text-sm mb-3 tracking-widest uppercase">Case Studies</p>
          <h2 className="font-display font-800 text-3xl sm:text-4xl text-brand-text">
            Real Clients. Real Markets. Real Results.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CASES.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={`/case-studies/${c.slug}`}
                data-testid={`case-study-card-${i}`}
                className="block p-6 rounded-xl bg-brand-surface border border-brand-border card-hover group"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg">{c.flag}</span>
                  <span className="text-xs font-mono text-brand-muted">{c.region}</span>
                  <span className="ml-auto text-xs font-mono px-2 py-0.5 rounded bg-brand-mint/10 text-brand-mint border border-brand-mint/20">
                    {c.service}
                  </span>
                </div>
                <div className="mb-4">
                  <span className="font-mono font-700 text-3xl text-brand-mint">{c.stat}</span>
                  <p className="text-xs text-brand-muted mt-1">{c.statLabel}</p>
                </div>
                <h3 className="font-display font-600 text-brand-text text-base mb-2">{c.client}</h3>
                <p className="text-sm text-brand-muted mb-4">{c.result}</p>
                <span className="text-xs font-display font-600 text-brand-mint flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read Case Study <ArrowRight size={12} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            data-testid="view-all-case-studies"
            className="inline-flex items-center gap-2 text-sm font-display font-600 text-brand-mint hover:text-brand-text transition-colors"
          >
            View All Case Studies <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
