const BRANDS = [
  'TechScale Co', 'GrowthEdge', 'NovaBrand', 'Apex Digital',
  'FunnelPro', 'DataDrive', 'ScaleSmart', 'LeadForge',
  'PulseAds', 'MarketVault', 'ClickPath', 'RevFlow',
];

export default function TrustBar() {
  return (
    <section data-testid="trust-bar" className="py-10 overflow-hidden bg-brand-bg">
      <p className="text-center text-xs font-mono text-brand-muted mb-6 tracking-widest uppercase">
        Trusted by brands in the USA, Australia & UK
      </p>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-bg to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-bg to-transparent z-10" />
        <div className="flex animate-marquee whitespace-nowrap">
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <span
              key={i}
              className="mx-8 text-brand-muted/30 font-display font-700 text-lg select-none"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
