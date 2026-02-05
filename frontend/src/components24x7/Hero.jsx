import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Target, TrendingUp, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { motion } from 'framer-motion';
import { SOCIAL_PROOF } from '../config';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'High-Intent Leads';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 text-blue-400/20"
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <Target className="h-16 w-16" />
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-1/4 text-purple-400/20"
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        >
          <TrendingUp className="h-20 w-20" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 left-1/3 text-orange-400/20"
          animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        >
          <Zap className="h-14 w-14" />
        </motion.div>
      </div>

      <div className="relative container mx-auto px-6 pt-32 pb-20">
        {/* F-Pattern Layout: Eye starts top-left, moves right, then down-left */}
        <div className="max-w-5xl mx-auto">
          {/* Top Section - F-Pattern horizontal bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-6 py-3 mb-6">
              <Sparkles className="h-5 w-5 text-yellow-400 animate-pulse" />
              <span className="text-sm font-semibold text-gray-300">AI-Powered Growth Solutions</span>
            </div>
          </motion.div>

          {/* Main Headline - F-Pattern left alignment */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              <span className="text-white">AI-Powered Growth for </span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                B2B & Service Businesses
              </span>
            </h1>
            
            {/* 30-60 Day Hook */}
            <div className="inline-block bg-gradient-to-r from-orange-500/20 to-orange-600/20 border-2 border-orange-500 rounded-2xl px-8 py-6 mb-6">
              <p className="text-2xl md:text-4xl font-black text-white">
                Sales-Ready Decision Makers in{' '}
                <span className="text-orange-400">30-60 Days</span>
              </p>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Stop wasting time on unqualified prospects. Our AI-powered system delivers
              <span className="text-white font-semibold"> decision-makers ready to buy</span>.
            </p>
          </motion.div>

          {/* Social Proof - Bandwagon Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center items-center gap-8 mb-12"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white">{SOCIAL_PROOF.totalLeads.toLocaleString()}+</div>
              <div className="text-sm text-gray-400">Qualified Leads Generated</div>
            </div>
            <div className="hidden md:block h-12 w-px bg-gray-700"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">{SOCIAL_PROOF.activeClients}+</div>
              <div className="text-sm text-gray-400">Active Clients</div>
            </div>
            <div className="hidden md:block h-12 w-px bg-gray-700"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">{SOCIAL_PROOF.avgROI}%</div>
              <div className="text-sm text-gray-400">Average ROI</div>
            </div>
          </motion.div>

          {/* CTA Buttons - Z-Pattern terminal points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            {/* Primary CTA - Von Restorff Effect (orange stands out) */}
            <Button
              size="lg"
              className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-8 py-7 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-orange-500/50"
              onClick={() => document.getElementById('lead-form').scrollIntoView({ behavior: 'smooth' })}
            >
              Get Your Free Growth Audit
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            {/* Secondary CTA */}
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 font-semibold px-8 py-7 rounded-xl text-lg transition-all duration-300"
              onClick={() => document.getElementById('case-studies').scrollIntoView({ behavior: 'smooth' })}
            >
              See Case Studies
            </Button>
          </motion.div>

          {/* Trust Signal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-sm text-gray-500">
              🔒 100% Money-Back Guarantee • No Long-Term Contracts • ROI Guarantee
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;