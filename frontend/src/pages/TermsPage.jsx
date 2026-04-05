import { Helmet } from 'react-helmet-async';

export default function TermsPage() {
  return (
    <>
      <Helmet><title>Terms of Service | 24x7 Solution</title></Helmet>
      <div className="pt-20 min-h-screen" data-testid="terms-page">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="font-display font-800 text-3xl text-brand-text mb-8">Terms of Service</h1>
          <div className="prose prose-invert prose-sm max-w-none text-brand-muted space-y-4">
            <p>Last updated: January 2025</p>
            <p>These Terms of Service govern your use of the website www.24x7solution.in operated by 24x7 Solution.</p>
            <h2 className="text-brand-text font-display text-xl mt-8">Services</h2>
            <p>24x7 Solution provides social media marketing, lead generation, and performance marketing services to businesses. Specific service terms are outlined in individual client agreements.</p>
            <h2 className="text-brand-text font-display text-xl mt-8">Intellectual Property</h2>
            <p>The content, features, and functionality of this website are owned by 24x7 Solution and are protected by international copyright, trademark, and other intellectual property laws.</p>
            <h2 className="text-brand-text font-display text-xl mt-8">Limitation of Liability</h2>
            <p>24x7 Solution shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services or website.</p>
            <h2 className="text-brand-text font-display text-xl mt-8">Contact</h2>
            <p>For questions about these Terms, contact us at hello@24x7solution.in.</p>
          </div>
        </div>
      </div>
    </>
  );
}
