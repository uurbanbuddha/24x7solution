import { Helmet } from 'react-helmet-async';
import Hero from '@/components/home/Hero';
import MetricsBar from '@/components/home/MetricsBar';
import TrustBar from '@/components/home/TrustBar';
import ServicesGrid from '@/components/home/ServicesGrid';
import WhyUs from '@/components/home/WhyUs';
import CaseStudiesPreview from '@/components/home/CaseStudiesPreview';
import TestimonialsMarquee from '@/components/home/TestimonialsMarquee';
import ProcessTimeline from '@/components/home/ProcessTimeline';
import CtaBanner from '@/components/home/CtaBanner';
import { HomeJsonLd } from '@/components/shared/JsonLd';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>24x7 Solution | Social Media Marketing & Lead Generation Agency | USA, AU, UK</title>
        <meta name="description" content="24x7 Solution is a performance marketing agency that runs your paid social, lead generation & Google Ads around the clock for clients in the US, Australia, and UK." />
      </Helmet>
      <HomeJsonLd />
      <Hero />
      <MetricsBar />
      <TrustBar />
      <ServicesGrid />
      <WhyUs />
      <CaseStudiesPreview />
      <TestimonialsMarquee />
      <ProcessTimeline />
      <CtaBanner />
    </>
  );
}
