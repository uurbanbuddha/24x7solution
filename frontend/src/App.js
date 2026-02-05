import React from 'react';
import './App.css';
import { Toaster } from './components/ui/sonner';
import Navbar from './components24x7/Navbar';
import Hero from './components24x7/Hero';
import FOMONotification from './components24x7/FOMONotification';
import ServicesSection from './components24x7/ServicesSection';
import GrowthCalculator from './components24x7/GrowthCalculator';
import LeadCaptureForm from './components24x7/LeadCaptureForm';

function App() {
  return (
    <div className="App bg-slate-950 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
        <GrowthCalculator />
        <LeadCaptureForm />
      </main>
      <FOMONotification />
      <Toaster />
    </div>
  );
}

export default App;
