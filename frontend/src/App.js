import React, { useEffect } from 'react';
import './App.css';
import { Toaster } from './components/ui/sonner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Services from './components/Services';
import Comparison from './components/Comparison';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <PainPoints />
        <Services />
        <Comparison />
        <CaseStudies />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;