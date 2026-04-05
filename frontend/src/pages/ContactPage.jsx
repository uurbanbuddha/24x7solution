import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import { API_ENDPOINTS, SITE_CONFIG } from '@/config';
import LiveClocks from '@/components/shared/LiveClocks';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid work email required'),
  company: z.string().min(1, 'Company name is required'),
  website: z.string().optional(),
  country: z.string().min(1, 'Select your country'),
  budget: z.string().min(1, 'Select your budget range'),
  services: z.array(z.string()).min(1, 'Select at least one service'),
  message: z.string().optional(),
});

const SERVICE_OPTIONS = [
  'Paid Social', 'Google Ads', 'Lead Generation',
  'Performance Creative', 'Email/CRM', 'SEO',
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { services: [] },
  });

  const selectedServices = watch('services') || [];

  const toggleService = (svc) => {
    const updated = selectedServices.includes(svc)
      ? selectedServices.filter((s) => s !== svc)
      : [...selectedServices, svc];
    setValue('services', updated, { shouldValidate: true });
  };

  const onSubmit = async (data) => {
    setSubmitting(true);
    try {
      await fetch(API_ENDPOINTS.contact, {
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
        <title>Contact 24x7 Solution | Free Strategy Call Available Now</title>
        <meta name="description" content="Get in touch with 24x7 Solution. Whether you're in New York, Sydney, or London — our team is online right now. Average response time: under 2 hours." />
      </Helmet>
      <div className="pt-20 min-h-screen" data-testid="contact-page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-brand-mint font-mono text-sm mb-4 tracking-widest uppercase">Get In Touch</p>
              <h1 className="font-display font-800 text-4xl sm:text-5xl text-brand-text mb-4">Let's Talk Growth.</h1>
              <p className="text-brand-muted text-base mb-8 leading-relaxed">
                Whether you're in New York, Sydney, or London — our team is online right now.
              </p>
              <div className="mb-8">
                <LiveClocks />
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-brand-mint" />
                  <span className="text-sm text-brand-muted">Average response time: <strong className="text-brand-text">Under 2 hours</strong></span>
                </div>
                <p className="text-sm text-brand-muted">We respond 24x7 — yes, really.</p>
              </div>

              <div className="mt-12 p-6 rounded-xl bg-brand-surface border border-brand-border">
                <h3 className="font-display font-600 text-brand-text text-base mb-3">Prefer to talk now?</h3>
                <p className="text-sm text-brand-muted mb-4">Book a 30-min strategy call:</p>
                <a
                  href={SITE_CONFIG.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="calendly-link"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-mint text-brand-bg font-display font-700 text-sm rounded-full hover:shadow-[0_0_24px_rgba(0,255,136,0.3)] transition-all"
                >
                  Book on Calendly <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
              {submitted ? (
                <div className="p-8 rounded-xl bg-brand-surface border border-brand-mint/20 text-center" data-testid="contact-success">
                  <CheckCircle2 size={48} className="text-brand-mint mx-auto mb-4" />
                  <h2 className="font-display font-700 text-2xl text-brand-text mb-2">Message Sent!</h2>
                  <p className="text-brand-muted">We'll get back to you within 2 hours. Check your inbox.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" data-testid="contact-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Full Name *" error={errors.name?.message}>
                      <input {...register('name')} data-testid="contact-name" className="form-input" placeholder="John Smith" />
                    </Field>
                    <Field label="Work Email *" error={errors.email?.message}>
                      <input {...register('email')} data-testid="contact-email" className="form-input" placeholder="john@company.com" type="email" />
                    </Field>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Company Name *" error={errors.company?.message}>
                      <input {...register('company')} data-testid="contact-company" className="form-input" placeholder="Acme Inc" />
                    </Field>
                    <Field label="Website URL">
                      <input {...register('website')} data-testid="contact-website" className="form-input" placeholder="https://..." />
                    </Field>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Country *" error={errors.country?.message}>
                      <select {...register('country')} data-testid="contact-country" className="form-input">
                        <option value="">Select country</option>
                        <option value="USA">USA</option>
                        <option value="Australia">Australia</option>
                        <option value="UK">UK</option>
                        <option value="Other">Other</option>
                      </select>
                    </Field>
                    <Field label="Monthly Ad Budget *" error={errors.budget?.message}>
                      <select {...register('budget')} data-testid="contact-budget" className="form-input">
                        <option value="">Select budget</option>
                        <option value="$1K-$5K">$1K - $5K</option>
                        <option value="$5K-$15K">$5K - $15K</option>
                        <option value="$15K-$50K">$15K - $50K</option>
                        <option value="$50K+">$50K+</option>
                      </select>
                    </Field>
                  </div>
                  <Field label="Services Interested In *" error={errors.services?.message}>
                    <div className="flex flex-wrap gap-2">
                      {SERVICE_OPTIONS.map((svc) => (
                        <button
                          key={svc}
                          type="button"
                          onClick={() => toggleService(svc)}
                          data-testid={`service-toggle-${svc.toLowerCase().replace(/[/\s]/g, '-')}`}
                          className={`px-3 py-1.5 rounded-lg text-xs font-display font-600 border transition-all ${
                            selectedServices.includes(svc)
                              ? 'bg-brand-mint/10 border-brand-mint/30 text-brand-mint'
                              : 'bg-brand-surface border-brand-border text-brand-muted hover:text-brand-text'
                          }`}
                        >
                          {svc}
                        </button>
                      ))}
                    </div>
                  </Field>
                  <Field label="Message (optional)">
                    <textarea {...register('message')} data-testid="contact-message" className="form-input h-24 resize-none" placeholder="Tell us about your goals..." />
                  </Field>
                  <button
                    type="submit"
                    disabled={submitting}
                    data-testid="contact-submit"
                    className="w-full py-3 bg-brand-mint text-brand-bg font-display font-700 text-sm rounded-xl hover:shadow-[0_0_24px_rgba(0,255,136,0.3)] transition-all disabled:opacity-50"
                  >
                    {submitting ? 'Sending...' : "Send Message — We'll Reply Within 2 Hours"}
                  </button>
                </form>
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
