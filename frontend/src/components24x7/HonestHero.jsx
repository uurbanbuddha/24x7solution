import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { motion } from 'framer-motion';

// Honest, minimalistic hero
const HonestHero = () => {
  return (
    <section className="relative min-h-screen bg-slate-950 flex items-center">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white leading-[1.1] mb-8">
              AI-Powered Growth<br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                for B2B & Services
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
              We deliver sales-ready decision makers in 30-60 days
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
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
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
              className="border-2 border-gray-600 text-gray-300 hover:border-white hover:text-white hover:bg-white/5 font-semibold px-10 py-7 rounded-lg text-lg transition-all duration-300"
              onClick={() => document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' })}
            >
              Calculate Your ROI
            </Button>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
};

export default HonestHero;