import { useState, useEffect } from 'react';

const COOKIE_KEY = '24x7_cookie_consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = (type) => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify({ type, date: new Date().toISOString() }));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div data-testid="cookie-banner" className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-4xl mx-auto bg-brand-surface border border-brand-border rounded-xl p-5 shadow-2xl shadow-black/50">
        {showPrefs ? (
          <div>
            <h3 className="font-display font-700 text-brand-text text-sm mb-3">Cookie Preferences</h3>
            <div className="space-y-3 mb-4">
              <PrefRow label="Essential Cookies" desc="Required for the website to function." checked disabled />
              <PrefRow label="Analytics Cookies" desc="Help us understand how visitors use our site." checked />
              <PrefRow label="Marketing Cookies" desc="Used to deliver relevant ads and measure campaigns." checked />
            </div>
            <div className="flex gap-2">
              <button onClick={() => accept('custom')} data-testid="cookie-save-prefs" className="px-4 py-2 bg-brand-mint text-brand-bg font-display font-600 text-xs rounded-lg">Save Preferences</button>
              <button onClick={() => setShowPrefs(false)} className="px-4 py-2 text-brand-muted text-xs font-display">Back</button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-sm text-brand-muted flex-1">
              We use cookies to improve your experience and analyze site traffic. By clicking "Accept All", you consent to our use of cookies.
              See our <a href="/privacy" className="text-brand-mint underline">Privacy Policy</a>.
            </p>
            <div className="flex gap-2 flex-shrink-0">
              <button onClick={() => setShowPrefs(true)} data-testid="cookie-manage" className="px-4 py-2 border border-brand-border text-brand-muted text-xs font-display font-600 rounded-lg hover:text-brand-text transition-colors">Manage Preferences</button>
              <button onClick={() => accept('all')} data-testid="cookie-accept-all" className="px-4 py-2 bg-brand-mint text-brand-bg font-display font-600 text-xs rounded-lg">Accept All</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function PrefRow({ label, desc, checked, disabled }) {
  return (
    <label className="flex items-start gap-3 cursor-pointer">
      <input type="checkbox" defaultChecked={checked} disabled={disabled} className="mt-1 accent-[#00FF88]" />
      <div>
        <span className="text-sm text-brand-text font-display font-600">{label}</span>
        {disabled && <span className="text-xs text-brand-mint ml-2">(Required)</span>}
        <p className="text-xs text-brand-muted">{desc}</p>
      </div>
    </label>
  );
}
