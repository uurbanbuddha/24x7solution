import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FloatingCTA() {
  return (
    <div data-testid="floating-cta" className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-3 bg-gradient-to-t from-brand-bg via-brand-bg/95 to-transparent pointer-events-none">
      <Link
        to="/contact"
        className="pointer-events-auto flex items-center justify-center gap-2 w-full py-3.5 bg-brand-mint text-brand-bg font-display font-700 text-sm rounded-xl shadow-[0_0_24px_rgba(0,255,136,0.3)]"
      >
        <Phone size={16} /> Book Free Call
      </Link>
    </div>
  );
}
