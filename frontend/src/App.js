import React from 'react';
import './App.css';
import { Toaster } from './components/ui/sonner';
import Navbar from './components24x7/Navbar';
import ModernHero from './components24x7/ModernHero';
import TrustedBySection from './components24x7/TrustedBySection';
import CleanGuaranteeSection from './components24x7/CleanGuaranteeSection';
import ResultsSection from './components24x7/ResultsSection';
import GrowthCalculator from './components24x7/GrowthCalculator';
import TestimonialsSection from './components24x7/TestimonialsSection';
import LeadCaptureForm from './components24x7/LeadCaptureForm';
import FAQSection from './components24x7/FAQSection';
import Footer from './components24x7/Footer';
import FOMONotification from './components24x7/FOMONotification';

function App() {
  return (
    <div className="App bg-slate-950 min-h-screen">
      <Navbar />
      <main>
        <ModernHero />
        <TrustedBySection />
        <CleanGuaranteeSection />
        <ResultsSection />
        <div id="calculator">
          <GrowthCalculator />
        </div>
        <TestimonialsSection />
        <div id="contact">
          <LeadCaptureForm />
        </div>
        <FAQSection />
      </main>
      <Footer />
      <FOMONotification />
      <Toaster />
    </div>
  );
}

export default App;
