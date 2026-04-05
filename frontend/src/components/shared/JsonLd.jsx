import { Helmet } from 'react-helmet-async';

export function HomeJsonLd() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "24x7 Solution",
    "url": "https://www.24x7solution.in",
    "logo": "https://www.24x7solution.in/logo.png",
    "description": "24x7 Solution is a performance marketing agency that runs your paid social, lead generation & Google Ads around the clock for clients in the US, Australia, and UK.",
    "email": "hello@24x7solution.in",
    "sameAs": [
      "https://linkedin.com/company/24x7solution",
      "https://instagram.com/24x7solution",
      "https://facebook.com/24x7solution",
      "https://x.com/24x7solution",
      "https://youtube.com/@24x7solution"
    ]
  };

  const localBiz = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "24x7 Solution",
    "url": "https://www.24x7solution.in",
    "email": "hello@24x7solution.in",
    "description": "Social Media Marketing, Lead Generation & Performance Marketing Agency serving USA, Australia, and UK.",
    "areaServed": [
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "Australia" },
      { "@type": "Country", "name": "United Kingdom" }
    ],
    "serviceType": [
      "Paid Social Advertising",
      "Google Ads Management",
      "Lead Generation",
      "Performance Creative",
      "Email Marketing",
      "SEO"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(localBiz)}</script>
    </Helmet>
  );
}

export function ServicesFaqJsonLd() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does 24x7 Solution offer?",
        "acceptedAnswer": { "@type": "Answer", "text": "We offer Paid Social Ads, Google Ads & PPC, Lead Generation Funnels, Performance Creative, Email Marketing & CRM, and SEO & Content Marketing — all managed 24x7." }
      },
      {
        "@type": "Question",
        "name": "Which countries does 24x7 Solution serve?",
        "acceptedAnswer": { "@type": "Answer", "text": "We serve clients in the United States, Australia, and the United Kingdom with round-the-clock campaign management across all time zones." }
      },
      {
        "@type": "Question",
        "name": "What results can I expect from 24x7 Solution?",
        "acceptedAnswer": { "@type": "Answer", "text": "Typical results include 3-6x ROAS for paid social, 40-60% lower CPC for Google Ads, 50-80% CPL reduction for lead generation, and top 3 rankings within 6 months for SEO." }
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
  );
}
