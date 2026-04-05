import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CASE_STUDIES = [
  {
    slug: 'us-ecommerce-meta-ads',
    flag: '\u{1F1FA}\u{1F1F8}',
    region: 'USA',
    client: 'US Fashion E-commerce (DTC)',
    service: 'Paid Social',
    serviceTags: ['Paid Social'],
    regionTag: 'USA',
    headline: '4.8x ROAS in 90 Days via Meta Ads',
    stats: [
      { value: '4.8x', label: 'ROAS' },
      { value: '$340K', label: 'Revenue in 90 Days' },
      { value: '62%', label: 'Lower CPA' },
      { value: '2.1M', label: 'Impressions' },
    ],
    excerpt: 'A US-based fashion DTC brand came to us spending $30K/month on Meta Ads with a 1.4x ROAS. Within 90 days of 24x7 optimization, we scaled to $80K/month in spend at 4.8x ROAS.',
  },
  {
    slug: 'au-b2b-saas-lead-gen',
    flag: '\u{1F1E6}\u{1F1FA}',
    region: 'Australia',
    client: 'AU B2B SaaS Platform',
    service: 'Lead Generation',
    serviceTags: ['Lead Gen'],
    regionTag: 'Australia',
    headline: 'CPL from $120 to $34 — 850 MQLs/Month',
    stats: [
      { value: '$34', label: 'Cost Per Lead' },
      { value: '850', label: 'MQLs/Month' },
      { value: '72%', label: 'CPL Reduction' },
      { value: '340%', label: 'Pipeline Growth' },
    ],
    excerpt: 'An Australian B2B SaaS company was struggling with $120+ cost per lead from Google Ads. We rebuilt their entire lead funnel and reduced CPL to $34 while generating 850+ MQLs per month.',
  },
  {
    slug: 'uk-real-estate-google-ads',
    flag: '\u{1F1EC}\u{1F1E7}',
    region: 'UK',
    client: 'UK Real Estate Group',
    service: 'Google Ads + Funnels',
    serviceTags: ['Google Ads'],
    regionTag: 'UK',
    headline: '2,400 Qualified Leads in Q4 2024',
    stats: [
      { value: '2,400', label: 'Qualified Leads' },
      { value: '18%', label: 'Conversion Rate' },
      { value: '$28', label: 'Cost Per Lead' },
      { value: '5.2x', label: 'ROAS' },
    ],
    excerpt: 'A UK real estate group needed a consistent pipeline of qualified property buyers. Our Google Ads + CRM funnel generated 2,400 qualified leads in a single quarter with an 18% conversion rate.',
  },
];

const FILTERS = ['All', 'USA', 'Australia', 'UK', 'Paid Social', 'Lead Gen', 'Google Ads', 'SEO'];

export default function CaseStudiesPage() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((c) => c.regionTag === filter || c.serviceTags.includes(filter));

  return (
    <>
      <Helmet>
        <title>Client Results & Case Studies | 24x7 Solution Agency</title>
        <meta name="description" content="Real results from real clients across the US, Australia, and UK. See how 24x7 Solution delivers ROI through performance marketing." />
      </Helmet>
      <div className="pt-20 min-h-screen" data-testid="case-studies-page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <p className="text-brand-mint font-mono text-sm mb-4 tracking-widest uppercase">Case Studies</p>
            <h1 className="font-display font-800 text-4xl sm:text-5xl text-brand-text mb-4">
              Real Clients. Real Markets. Real Results.
            </h1>
            <p className="text-brand-muted text-base max-w-xl mx-auto">
              Every case study below is a performance marketing campaign managed 24x7 by our team.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-2 mb-12" data-testid="case-study-filters">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                data-testid={`filter-${f.toLowerCase().replace(/\s/g, '-')}`}
                className={`px-4 py-1.5 rounded-full text-xs font-display font-600 border transition-all ${
                  filter === f
                    ? 'bg-brand-mint/10 border-brand-mint/30 text-brand-mint'
                    : 'bg-brand-surface border-brand-border text-brand-muted hover:text-brand-text'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((c, i) => (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={`/case-studies/${c.slug}`}
                  data-testid={`case-study-${c.slug}`}
                  className="block p-6 rounded-xl bg-brand-surface border border-brand-border card-hover group h-full"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg">{c.flag}</span>
                    <span className="text-xs font-mono text-brand-muted">{c.region}</span>
                    <span className="ml-auto text-xs font-mono px-2 py-0.5 rounded bg-brand-mint/10 text-brand-mint border border-brand-mint/20">
                      {c.service}
                    </span>
                  </div>
                  <h3 className="font-display font-700 text-lg text-brand-text mb-3">{c.headline}</h3>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {c.stats.slice(0, 2).map((s) => (
                      <div key={s.label} className="p-2 rounded-lg bg-brand-bg border border-brand-border/50">
                        <span className="font-mono font-700 text-xl text-brand-mint block">{s.value}</span>
                        <span className="text-xs text-brand-muted">{s.label}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-brand-muted mb-4 line-clamp-2">{c.excerpt}</p>
                  <span className="text-xs font-display font-600 text-brand-mint flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read Full Case Study <ArrowRight size={12} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
