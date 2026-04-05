import { useState, useEffect } from 'react';

const TIMEZONES = [
  { city: 'New York', tz: 'America/New_York', flag: '\u{1F1FA}\u{1F1F8}' },
  { city: 'London', tz: 'Europe/London', flag: '\u{1F1EC}\u{1F1E7}' },
  { city: 'Sydney', tz: 'Australia/Sydney', flag: '\u{1F1E6}\u{1F1FA}' },
];

export default function LiveClocks() {
  const [times, setTimes] = useState({});

  useEffect(() => {
    const update = () => {
      const now = {};
      TIMEZONES.forEach(({ city, tz }) => {
        now[city] = new Date().toLocaleTimeString('en-US', {
          timeZone: tz,
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        });
      });
      setTimes(now);
    };
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <div data-testid="live-clocks" className="flex flex-wrap gap-3">
      {TIMEZONES.map(({ city, flag }) => (
        <div key={city} className="flex items-center gap-1.5 text-xs text-brand-muted">
          <span>{flag}</span>
          <span className="font-mono text-brand-text/70">{times[city] || '--:--'}</span>
        </div>
      ))}
    </div>
  );
}
