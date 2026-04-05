import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { API_ENDPOINTS } from '@/config';

const MODAL_KEY = '24x7_exit_modal_shown';

export default function LeadCaptureModal() {
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');

  useEffect(() => {
    if (sessionStorage.getItem(MODAL_KEY)) return;

    // Desktop: exit intent
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !sessionStorage.getItem(MODAL_KEY)) {
        setShow(true);
        sessionStorage.setItem(MODAL_KEY, '1');
      }
    };

    // Mobile: 60% scroll
    const handleScroll = () => {
      const scrollPct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrollPct >= 0.6 && !sessionStorage.getItem(MODAL_KEY)) {
        setShow(true);
        sessionStorage.setItem(MODAL_KEY, '1');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    try {
      await fetch(API_ENDPOINTS.audit, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Modal Lead', email, website: website || 'https://unknown.com', spend: 'Unknown', country: 'Unknown' }),
      });
    } catch { /* ignore */ }
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          data-testid="lead-capture-modal"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-brand-surface border border-brand-border rounded-2xl p-8"
          >
            <button onClick={() => setShow(false)} data-testid="modal-close" className="absolute top-4 right-4 text-brand-muted hover:text-brand-text transition-colors">
              <X size={20} />
            </button>

            {submitted ? (
              <div className="text-center py-4" data-testid="modal-success">
                <div className="w-12 h-12 mx-auto rounded-full bg-brand-mint/10 border border-brand-mint/20 flex items-center justify-center mb-4">
                  <ArrowRight size={20} className="text-brand-mint" />
                </div>
                <h3 className="font-display font-700 text-xl text-brand-text mb-2">Audit Request Sent!</h3>
                <p className="text-sm text-brand-muted">We'll reach out within 24 hours.</p>
              </div>
            ) : (
              <>
                <h3 className="font-display font-800 text-xl text-brand-text mb-2">Before You Go — Grab Your Free Audit</h3>
                <p className="text-sm text-brand-muted mb-6">Get a personalized marketing audit worth $500. No strings attached.</p>
                <form onSubmit={handleSubmit} className="space-y-3" data-testid="modal-form">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your work email"
                    required
                    data-testid="modal-email"
                    className="form-input"
                  />
                  <input
                    type="url"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="Your website URL"
                    data-testid="modal-website"
                    className="form-input"
                  />
                  <button type="submit" data-testid="modal-submit" className="w-full py-3 bg-brand-mint text-brand-bg font-display font-700 text-sm rounded-xl hover:shadow-[0_0_24px_rgba(0,255,136,0.3)] transition-all">
                    Send Me the Free Audit
                  </button>
                </form>
                <button onClick={() => setShow(false)} className="mt-3 w-full text-center text-xs text-brand-muted hover:text-brand-text transition-colors">
                  No thanks, I don't want free growth advice
                </button>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
