const TESTIMONIALS = [
  {
    name: 'Sarah Mitchell',
    company: 'ScaleUp Fashion',
    country: '\u{1F1FA}\u{1F1F8}',
    stars: 5,
    quote: '24x7 Solution literally never sleeps. We saw our ROAS jump from 1.8x to 4.2x in the first 90 days. The always-on monitoring is a game-changer.',
  },
  {
    name: 'James Cooper',
    company: 'PropertyNest UK',
    country: '\u{1F1EC}\u{1F1E7}',
    stars: 5,
    quote: 'Our Google Ads were bleeding money before 24x7 took over. They cut our CPL by 60% and the leads are actually qualified. Incredible team.',
  },
  {
    name: 'Priya Mehta',
    company: 'CloudSync AU',
    country: '\u{1F1E6}\u{1F1FA}',
    stars: 5,
    quote: 'We needed a team that understood our AU market and could run campaigns across time zones. 24x7 delivers on both. 850+ MQLs per month now.',
  },
  {
    name: 'David Rodriguez',
    company: 'FitTech Pro',
    country: '\u{1F1FA}\u{1F1F8}',
    stars: 5,
    quote: 'The real-time reporting is insane. I can see exactly what is working at any hour. 24x7 lives up to their name — they really do work around the clock.',
  },
  {
    name: 'Emma Watson',
    company: 'LegalConnect UK',
    country: '\u{1F1EC}\u{1F1E7}',
    stars: 5,
    quote: 'Other agencies gave us vanity metrics. 24x7 gave us revenue. Our lead gen funnel now runs on autopilot and the results speak for themselves.',
  },
  {
    name: 'Marcus Chen',
    company: 'EduPath Global',
    country: '\u{1F1E6}\u{1F1FA}',
    stars: 5,
    quote: 'From strategy to execution to optimization — all 24x7. We scaled our paid social from $5K to $50K/month in ad spend with consistent returns.',
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }) {
  return (
    <div className="flex-shrink-0 w-[340px] p-5 rounded-xl bg-brand-surface border border-brand-border mx-2">
      <StarRating count={t.stars} />
      <p className="text-sm text-brand-muted mt-3 mb-4 leading-relaxed line-clamp-4">"{t.quote}"</p>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-brand-mint/10 border border-brand-mint/20 flex items-center justify-center text-xs font-display font-700 text-brand-mint">
          {t.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <p className="text-sm font-display font-600 text-brand-text">{t.name}</p>
          <p className="text-xs text-brand-muted">{t.company} {t.country}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsMarquee() {
  const row1 = TESTIMONIALS.slice(0, 3);
  const row2 = TESTIMONIALS.slice(3, 6);

  return (
    <section data-testid="testimonials-marquee" className="py-20 lg:py-28 bg-brand-surface/30 overflow-hidden">
      <div className="text-center mb-12 px-4">
        <p className="text-brand-mint font-mono text-sm mb-3 tracking-widest uppercase">Testimonials</p>
        <h2 className="font-display font-800 text-3xl sm:text-4xl text-brand-text">
          What Our Clients Say
        </h2>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-brand-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-brand-bg to-transparent z-10 pointer-events-none" />
        <div className="flex animate-marquee mb-4">
          {[...row1, ...row1, ...row1, ...row1].map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
        <div className="flex animate-marquee-reverse">
          {[...row2, ...row2, ...row2, ...row2].map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
