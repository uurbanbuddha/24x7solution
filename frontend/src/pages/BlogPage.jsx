import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';

const POSTS = [
  {
    slug: 'meta-ads-strategy-2025',
    title: 'Meta Ads in 2025: The Complete Strategy for US & AU E-commerce Brands',
    excerpt: 'Everything you need to know about running profitable Meta Ads campaigns in 2025 — from audience targeting shifts to creative formats that convert.',
    category: 'Paid Social',
    readTime: '8 min read',
    date: 'January 15, 2025',
  },
  {
    slug: 'b2b-lead-gen-playbook',
    title: 'The B2B Lead Generation Playbook: How We Generate 850+ MQLs/Month for SaaS Companies',
    excerpt: 'A step-by-step breakdown of the exact lead generation funnel we use to generate 850+ marketing qualified leads per month for B2B SaaS clients.',
    category: 'Lead Generation',
    readTime: '11 min read',
    date: 'January 8, 2025',
  },
  {
    slug: 'uk-real-estate-lead-gen-case',
    title: 'How We Scaled a UK Real Estate Agency to 2,400 Leads in One Quarter',
    excerpt: 'A deep dive into the Google Ads + CRM strategy that generated 2,400 qualified property leads for a UK real estate group in just 90 days.',
    category: 'Case Study',
    readTime: '6 min read',
    date: 'December 20, 2024',
  },
];

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title>Growth Marketing Blog | 24x7 Solution</title>
        <meta name="description" content="Strategy, insights, and playbooks for scaling businesses in the US, AU & UK markets. The 24x7 Growth Lab." />
      </Helmet>
      <div className="pt-20 min-h-screen" data-testid="blog-page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
            <p className="text-brand-mint font-mono text-sm mb-4 tracking-widest uppercase">The 24x7 Growth Lab</p>
            <h1 className="font-display font-800 text-4xl sm:text-5xl text-brand-text mb-4">
              Strategy, insights, and playbooks.
            </h1>
            <p className="text-brand-muted text-base max-w-xl mx-auto">
              Actionable growth marketing content for scaling businesses in the US, AU & UK markets.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  data-testid={`blog-post-${post.slug}`}
                  className="block h-full rounded-xl bg-brand-surface border border-brand-border card-hover group overflow-hidden"
                >
                  <div className="h-40 bg-gradient-to-br from-brand-mint/10 via-brand-blue/10 to-brand-surface flex items-center justify-center">
                    <span className="font-display font-800 text-4xl text-brand-mint/20">24x7</span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-brand-mint/10 text-brand-mint border border-brand-mint/20">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-brand-muted">
                        <Clock size={11} /> {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-display font-700 text-base text-brand-text mb-2 line-clamp-2 group-hover:text-brand-mint transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-brand-muted mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-brand-muted">{post.date}</span>
                      <span className="text-xs font-display font-600 text-brand-mint flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
