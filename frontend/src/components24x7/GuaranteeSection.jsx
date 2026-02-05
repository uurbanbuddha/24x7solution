import React from 'react';
import { Shield, TrendingUp, Clock, CheckCircle, Lock, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const GuaranteeSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-900/20 via-slate-900 to-blue-900/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Trust Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-green-500/10 border border-green-500/30 rounded-full px-6 py-3 mb-6">
              <Shield className="h-6 w-6 text-green-400" />
              <span className="text-green-400 font-bold">100% Risk-Free Guarantee</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              We're So Confident, We'll
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"> Guarantee Your Results</span>
            </h2>
          </div>

          {/* Main Guarantee Box */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-10 border-2 border-green-500/50 shadow-2xl shadow-green-500/20 mb-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-xl shadow-green-500/50">
                  <Shield className="h-16 w-16 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold text-white mb-4">
                  60-Day Money-Back Guarantee
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  If we don't meet the specific KPIs (Key Performance Indicators) agreed upon during your onboarding within <span className="text-green-400 font-bold">60 days</span>, you get a <span className="text-green-400 font-bold">100% refund</span>. No questions asked. No hidden clauses.
                </p>
                
                {/* Trust Badges */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                  <div className="flex items-center space-x-2 bg-green-500/10 border border-green-500/30 rounded-lg px-4 py-2">
                    <Lock className="h-5 w-5 text-green-400" />
                    <span className="text-sm font-semibold text-green-400">Secure Payment</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 rounded-lg px-4 py-2">
                    <Award className="h-5 w-5 text-blue-400" />
                    <span className="text-sm font-semibold text-blue-400">Verified Results</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-purple-500/10 border border-purple-500/30 rounded-lg px-4 py-2">
                    <CheckCircle className="h-5 w-5 text-purple-400" />
                    <span className="text-sm font-semibold text-purple-400">No Contracts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* KPI Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-green-400" />
                </div>
                <h4 className="text-lg font-bold text-white">Lead Volume</h4>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                We agree on a minimum number of qualified leads per month. If we fall short, refund guaranteed.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-blue-400" />
                </div>
                <h4 className="text-lg font-bold text-white">Lead Quality</h4>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Leads must match your ICP and show genuine buying intent. Low quality = full refund.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-purple-400" />
                </div>
                <h4 className="text-lg font-bold text-white">Response Time</h4>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Leads delivered within agreed timeframes. Delays beyond our control don't affect your guarantee.
              </p>
            </motion.div>
          </div>

          {/* Bottom Note */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              * Guarantee terms apply to Growth and Enterprise plans. Minimum 60-day commitment required to qualify for refund.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
