import React from 'react';
import './App.css';
import { Toaster } from './components/ui/sonner';
import Navbar from './components24x7/Navbar';
import Hero from './components24x7/Hero';
import FOMONotification from './components24x7/FOMONotification';
import GrowthCalculator from './components24x7/GrowthCalculator';
import CaseStudiesSection from './components24x7/CaseStudiesSection';
import TestimonialsSection from './components24x7/TestimonialsSection';
import LeadCaptureForm from './components24x7/LeadCaptureForm';
import FAQSection from './components24x7/FAQSection';
import Footer from './components24x7/Footer';

function App() {
  return (
    <div className="App bg-slate-950 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <CaseStudiesSection />
        <GrowthCalculator />
        <TestimonialsSection />
        <LeadCaptureForm />
        <FAQSection />
      </main>
      <Footer />
      <FOMONotification />
      <Toaster />
    </div>
  );
}

export default App;
