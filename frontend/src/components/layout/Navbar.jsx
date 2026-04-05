import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/config';

function Logo() {
  return (
    <Link to="/" className="flex items-baseline gap-0.5 group" data-testid="navbar-logo">
      <span className="font-display font-800 text-2xl text-brand-mint tracking-tight relative">
        24x7
        <span className="absolute -top-0.5 -right-1.5 w-2 h-2 bg-brand-mint rounded-full animate-pulse-live" />
      </span>
      <span className="font-display font-500 text-xl text-brand-text ml-1">Solution</span>
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        data-testid="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-brand-bg/80 backdrop-blur-xl border-b border-brand-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Logo />

            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  data-testid={`nav-link-${link.label.toLowerCase().replace(/\s/g, '-')}`}
                  className={`text-sm font-body font-medium transition-colors duration-200 ${
                    location.pathname === link.href
                      ? 'text-brand-mint'
                      : 'text-brand-muted hover:text-brand-text'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-xs font-mono text-brand-mint mr-2">
                <span className="w-1.5 h-1.5 bg-brand-mint rounded-full animate-pulse-live" />
                Live
              </div>
              <Link
                to="/contact"
                data-testid="nav-cta-button"
                className="relative px-5 py-2.5 bg-brand-mint text-brand-bg font-display font-600 text-sm rounded-full hover:shadow-[0_0_24px_rgba(0,255,136,0.3)] transition-all duration-300 overflow-hidden group"
              >
                <span className="relative z-10">Book Free Call</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Link>
            </div>

            <button
              data-testid="mobile-menu-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-brand-text"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            data-testid="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-brand-bg/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.href}
                    className={`text-2xl font-display font-600 transition-colors ${
                      location.pathname === link.href
                        ? 'text-brand-mint'
                        : 'text-brand-text hover:text-brand-mint'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  to="/contact"
                  className="mt-4 px-8 py-3 bg-brand-mint text-brand-bg font-display font-600 text-lg rounded-full"
                >
                  Book Free Call
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
