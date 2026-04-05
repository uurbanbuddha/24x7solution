import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Facebook, Twitter, Youtube, ArrowRight } from 'lucide-react';
import { SITE_CONFIG, API_ENDPOINTS } from '@/config';
import LiveClocks from '@/components/shared/LiveClocks';

const footerLinks = {
  Services: [
    { label: 'Paid Social Ads', href: '/services#paid-social' },
    { label: 'Google Ads & PPC', href: '/services#google-ads' },
    { label: 'Lead Generation', href: '/services#lead-gen' },
    { label: 'Performance Creative', href: '/services#creative' },
    { label: 'Email & CRM', href: '/services#email' },
    { label: 'SEO & Content', href: '/services#seo' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
    { label: 'Free Audit', href: '/free-audit' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/privacy#cookies' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: SITE_CONFIG.social.linkedin, label: 'LinkedIn' },
  { icon: Instagram, href: SITE_CONFIG.social.instagram, label: 'Instagram' },
  { icon: Facebook, href: SITE_CONFIG.social.facebook, label: 'Facebook' },
  { icon: Twitter, href: SITE_CONFIG.social.twitter, label: 'X / Twitter' },
  { icon: Youtube, href: SITE_CONFIG.social.youtube, label: 'YouTube' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subStatus, setSubStatus] = useState(null);

  const handleNewsletter = async (e) => {
    e.preventDefault();
    if (!email) return;
    try {
      const res = await fetch(API_ENDPOINTS.newsletter, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setSubStatus('success');
        setEmail('');
      } else {
        setSubStatus('error');
      }
    } catch {
      setSubStatus('error');
    }
  };

  return (
    <footer data-testid="site-footer" className="bg-brand-bg border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-flex items-baseline gap-0.5">
              <span className="font-display font-800 text-3xl text-brand-mint tracking-tight">24x7</span>
              <span className="font-display font-500 text-xl text-brand-text ml-1">Solution</span>
            </Link>
            <p className="text-brand-muted text-sm leading-relaxed max-w-xs">
              Round-the-clock performance marketing that generates real leads and real revenue — while you sleep.
            </p>
            <LiveClocks />
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`footer-social-${s.label.toLowerCase()}`}
                  className="w-9 h-9 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center text-brand-muted hover:text-brand-mint hover:border-brand-mint/30 transition-colors"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:col-span-2">
              <h4 className="font-display font-600 text-brand-text text-sm mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-brand-muted hover:text-brand-mint transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-2">
            <h4 className="font-display font-600 text-brand-text text-sm mb-4">Growth Insights</h4>
            <p className="text-xs text-brand-muted mb-3">Weekly strategy — no spam, just growth.</p>
            <form onSubmit={handleNewsletter} className="space-y-2" data-testid="newsletter-form">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                data-testid="newsletter-email-input"
                className="w-full px-3 py-2 bg-brand-surface border border-brand-border rounded-lg text-sm text-brand-text placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-mint/40 transition-colors"
              />
              <button
                type="submit"
                data-testid="newsletter-submit-button"
                className="w-full px-3 py-2 bg-brand-mint/10 border border-brand-mint/20 text-brand-mint text-xs font-display font-600 rounded-lg hover:bg-brand-mint/20 transition-colors flex items-center justify-center gap-1"
              >
                Subscribe <ArrowRight size={12} />
              </button>
              {subStatus === 'success' && (
                <p className="text-xs text-brand-mint">Subscribed!</p>
              )}
              {subStatus === 'error' && (
                <p className="text-xs text-red-400">Something went wrong.</p>
              )}
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-muted">
            &copy; {new Date().getFullYear()} 24x7 Solution. All rights reserved.
          </p>
          <p className="text-xs text-brand-muted">
            www.24x7solution.in
          </p>
        </div>
      </div>
    </footer>
  );
}
