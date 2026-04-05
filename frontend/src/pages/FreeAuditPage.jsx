import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle2, ArrowRight, Shield, Lock } from 'lucide-react';
import { API_ENDPOINTS } from '@/config';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid work email required'),
  website: z.string().url('Enter a valid URL').min(1, 'Website is required'),
  spend: z.string().min(1, 'Select your ad spend'),
  country: z.string().min(1, 'Select your country'),
});

const CHECKLIST = [
  'Full Meta/Google Ads account audit',
  'Landing page conversion rate analysis',
  'Competitor ad intelligence report',
  'Custom scaling roadmap (US/AU/UK market-specific)',
  '30-minute strategy call with a senior 24x7 specialist',
  'No pitch. No obligation. Just insight.',
];

const TRUST_SIGNALS = [
  '200+ Free Audits Delivered',
  'Average $47K in wasted spend uncovered per audit',
];

export default function FreeAuditPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    setSubmitting(true);
    try {
      await fetch(API_ENDPOINTS.audit, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Free Performance Marketing Audit | Worth $500 | 24x7 Solution</title>
        <meta name="description" content="Get a free 24x7 Performance Marketing Audit worth $500. Full Meta/Google Ads audit, landing page analysis, and custom scaling roadmap." />
      </Helmet>
      <div className="pt-20 min-h-screen" data-testid="free-audit-page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-mint/10 border border-brand-mint/20 text-brand-mint text-xs font-mono mb-6">
                Worth $500 — Yours Free
              </div>
              <h1 className="font-display font-800 text-4xl sm:text-5xl text-brand-text mb-4 leading-tight">
                Get Your FREE 24x7<br />Performance Marketing Audit
              </h1>
              <p className="text-brand-muted text-base mb-8 leading-relaxed">
                We'll audit your current paid social, Google Ads, and lead gen strategy and show you exactly where you're leaving money on the table.
              </p>

              <div className="space-y-3 mb-10">
                <h3 className="font-display font-600 text-brand-text text-sm uppercase tracking-wider mb-4">What You Get</h3>
                {CHECKLIST.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-brand-mint flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-brand-muted">{item}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-8">
                {TRUST_SIGNALS.map((sig) => (
                  <div key={sig} className="flex items-center gap-2">
                    <Shield size={14} className="text-brand-mint" />
                    <span className="text-sm font-mono text-brand-text">{sig}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 text-xs text-brand-muted">
                <Lock size={12} /> Your data is private. We will never spam you.
              </div>

              <div className="mt-8 p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/20">
                <p className="text-sm text-yellow-400 font-display font-600">
                  We only accept 10 free audits per month to ensure quality.{' '}
                  <span className="font-mono font-700 text-yellow-300">3 spots remaining</span> this month.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
              {submitted ? (
                <div className="p-8 rounded-xl bg-brand-surface border border-brand-mint/20 text-center" data-testid="audit-success">
                  <CheckCircle2 size={48} className="text-brand-mint mx-auto mb-4" />
                  <h2 className="font-display font-700 text-2xl text-brand-text mb-2">Audit Request Received!</h2>
                  <p className="text-brand-muted">Our team will reach out within 24 hours with your personalized audit.</p>
                </div>
              ) : (
                <div className="p-6 lg:p-8 rounded-xl bg-brand-surface border border-brand-border">
                  <h2 className="font-display font-700 text-xl text-brand-text mb-6">Claim Your Free Audit</h2>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" data-testid="audit-form">
                    <Field label="Full Name *" error={errors.name?.message}>
                      <input {...register('name')} data-testid="audit-name" className="form-input" placeholder="John Smith" />
                    </Field>
                    <Field label="Work Email *" error={errors.email?.message}>
                      <input {...register('email')} data-testid="audit-email" className="form-input" placeholder="john@company.com" type="email" />
                    </Field>
                    <Field label="Website URL *" error={errors.website?.message}>
                      <input {...register('website')} data-testid="audit-website" className="form-input" placeholder="https://yoursite.com" />
                    </Field>
                    <Field label="Current Monthly Ad Spend *" error={errors.spend?.message}>
                      <select {...register('spend')} data-testid="audit-spend" className="form-input">
                        <option value="">Select range</option>
                        <option value="Under $1K">Under $1K</option>
                        <option value="$1K-$5K">$1K - $5K</option>
                        <option value="$5K-$20K">$5K - $20K</option>
                        <option value="$20K+">$20K+</option>
                      </select>
                    </Field>
                    <Field label="Country *" error={errors.country?.message}>
                      <select {...register('country')} data-testid="audit-country" className="form-input">
                        <option value="">Select country</option>
                        <option value="USA">USA</option>
                        <option value="Australia">Australia</option>
                        <option value="UK">UK</option>
                        <option value="Other">Other</option>
                      </select>
                    </Field>
                    <button
                      type="submit"
                      disabled={submitting}
                      data-testid="audit-submit"
                      className="w-full py-3 bg-brand-mint text-brand-bg font-display font-700 text-sm rounded-xl hover:shadow-[0_0_24px_rgba(0,255,136,0.3)] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {submitting ? 'Submitting...' : 'Claim My Free Audit'} <ArrowRight size={16} />
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

function Field({ label, error, children }) {
  return (
    <div>
      <label className="block text-xs font-display font-600 text-brand-muted mb-1.5">{label}</label>
      {children}
      {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
    </div>
  );
}
