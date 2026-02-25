import React from 'react';
import './App.css';
import { Toaster } from './components/ui/sonner';
import Navbar from './components24x7/Navbar';
import HonestHero from './components24x7/HonestHero';
import WhyItMattersSection from './components24x7/WhyItMattersSection';
import WhatWeDoSection from './components24x7/WhatWeDoSection';
import SimpleGuarantee from './components24x7/SimpleGuarantee';
import GrowthCalculator from './components24x7/GrowthCalculator';
import LeadCaptureForm from './components24x7/LeadCaptureForm';
import FAQSection from './components24x7/FAQSection';
import Footer from './components24x7/Footer';

function App() {
  return (
    <div className="App bg-slate-950 min-h-screen">
      <Navbar />
      <main>
        <HonestHero />
        <WhyItMattersSection />
        <WhatWeDoSection />
        <SimpleGuarantee />
        <div id="calculator">
          <GrowthCalculator />
        </div>
        <div id="contact">
          <LeadCaptureForm />
        </div>
        <FAQSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
