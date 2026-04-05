import { Helmet } from 'react-helmet-async';

export default function PrivacyPage() {
  return (
    <>
      <Helmet><title>Privacy Policy | 24x7 Solution</title></Helmet>
      <div className="pt-20 min-h-screen" data-testid="privacy-page">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="font-display font-800 text-3xl text-brand-text mb-8">Privacy Policy</h1>
          <div className="prose prose-invert prose-sm max-w-none text-brand-muted space-y-4">
            <p>Last updated: January 2025</p>
            <p>24x7 Solution ("we", "us", or "our") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website at www.24x7solution.in.</p>
            <h2 className="text-brand-text font-display text-xl mt-8">Information We Collect</h2>
            <p>We collect information you provide directly to us, such as your name, email address, company name, and any messages you send through our contact forms.</p>
            <h2 className="text-brand-text font-display text-xl mt-8">How We Use Your Information</h2>
            <p>We use the information we collect to respond to your inquiries, provide our services, send marketing communications (with your consent), and improve our website.</p>
            <h2 className="text-brand-text font-display text-xl mt-8" id="cookies">Cookies</h2>
            <p>We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
            <h2 className="text-brand-text font-display text-xl mt-8">Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at hello@24x7solution.in.</p>
          </div>
        </div>
      </div>
    </>
  );
}
