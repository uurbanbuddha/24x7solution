import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

function StatBox({ value, label, delay }) {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay }} className="p-4 rounded-xl bg-brand-surface border border-brand-border text-center">
      <span className="font-mono font-700 text-2xl sm:text-3xl text-brand-mint block">{value}</span>
      <span className="text-xs text-brand-muted">{label}</span>
    </motion.div>
  );
}

function Paragraph({ title, text }) {
  return (
    <div>
      <h2 className="font-display font-700 text-xl text-brand-text mb-3">{title}</h2>
      <p className="text-brand-muted leading-relaxed">{text}</p>
    </div>
  );
}

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const allStudies = require('@/data/content').CASE_STUDIES_DATA;
  const study = allStudies[slug];

  if (!study) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <h1 className="font-display font-800 text-2xl text-brand-text">Case Study Not Found</h1>
      </div>
    );
  }

  const statsList = study.stats || [];

  return (
    <>
      <Helmet><title>{study.headline} | 24x7 Solution</title></Helmet>
      <div className="pt-20 min-h-screen" data-testid="case-study-detail-page">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm text-brand-muted hover:text-brand-mint mb-8 transition-colors">
            <ArrowLeft size={14} /> All Case Studies
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="text-2xl">{study.flag}</span>
              <span className="font-mono text-sm text-brand-muted">{study.region} &middot; {study.industry}</span>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-brand-mint/10 text-brand-mint border border-brand-mint/20">{study.service}</span>
            </div>
            <h1 className="font-display font-800 text-3xl sm:text-4xl lg:text-5xl text-brand-text mb-8">{study.headline}</h1>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {statsList.map((s, i) => <StatBox key={s.label} value={s.value} label={s.label} delay={0.2 + i * 0.1} />)}
          </div>
          <div className="space-y-12">
            <Paragraph title="The Challenge" text={study.challenge} />
            <Paragraph title="Our Strategy" text={study.strategy} />
            <Paragraph title="Execution" text={study.execution} />
          </div>
          <div className="my-16 p-8 rounded-xl bg-brand-surface border border-brand-border relative">
            <Quote size={32} className="text-brand-mint/20 absolute top-4 left-4" />
            <blockquote className="text-brand-text text-lg leading-relaxed mb-4 pl-6">"{study.quote}"</blockquote>
            <p className="pl-6 font-display font-600 text-brand-text text-sm">{study.quoteName}</p>
            <p className="pl-6 text-xs text-brand-muted">{study.quoteTitle}</p>
          </div>
          <Paragraph title="What Happened Next" text={study.whatNext} />
          <div className="mt-16 p-8 rounded-xl border border-brand-mint/20 bg-brand-mint/5 text-center">
            <h3 className="font-display font-700 text-xl text-brand-text mb-3">Want Results Like These?</h3>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-mint text-brand-bg font-display font-700 text-sm rounded-full hover:shadow-[0_0_24px_rgba(0,255,136,0.3)] transition-all mt-4">
              Book Your Free Strategy Call <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
