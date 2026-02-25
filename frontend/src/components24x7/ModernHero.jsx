import React, { useEffect, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '../components/ui/button';
import { motion } from 'framer-motion';

// Clean, minimalistic hero inspired by RefineLabs
const ModernHero = () => {
  const [count, setCount] = useState({ leads: 0, clients: 0, roi: 0 });

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = { leads: 10500, clients: 47, roi: 320 };
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setCount({
        leads: Math.floor((targets.leads / steps) * step),
        clients: Math.floor((targets.clients / steps) * step),
        roi: Math.floor((targets.roi / steps) * step)
      });

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Headline - Bold & Direct like RefineLabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight mb-8">
              AI-Powered Growth for<br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                B2B & Service Businesses
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
              We deliver sales-ready decision makers in 30-60 days.
            </p>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              No tire-kickers. No wasted ad spend. Just qualified leads ready to close.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-20"
          >
            <Button
              size="lg"
              className="group bg-white hover:bg-gray-100 text-black font-bold px-10 py-7 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Book Strategy Call
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 font-semibold px-10 py-7 rounded-lg text-lg transition-all duration-300"
              onClick={() => document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' })}
            >
              <Play className="mr-2 h-5 w-5" />
              See ROI Calculator
            </Button>
          </motion.div>

          {/* Animated Counter Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">{count.leads.toLocaleString()}+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Qualified Leads Generated</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">{count.clients}+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Active Clients</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">{count.roi}%</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Average ROI</div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
};

export default ModernHero;