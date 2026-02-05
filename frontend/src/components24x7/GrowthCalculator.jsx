import React, { useState } from 'react';
import { Calculator, TrendingUp, Users, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Slider } from '../components/ui/slider';

// Endowment Effect - Interactive calculator creates ownership
const GrowthCalculator = () => {
  const [monthlyVisitors, setMonthlyVisitors] = useState(10000);
  const [currentConversion, setCurrentConversion] = useState(2);
  const [avgDealValue, setAvgDealValue] = useState(5000);

  // Calculations
  const currentLeads = Math.round(monthlyVisitors * (currentConversion / 100));
  const currentRevenue = currentLeads * avgDealValue;

  // With our optimization (conservative 50% improvement)
  const improvedConversion = currentConversion * 1.5;
  const improvedLeads = Math.round(monthlyVisitors * (improvedConversion / 100));
  const improvedRevenue = improvedLeads * avgDealValue;

  const additionalRevenue = improvedRevenue - currentRevenue;
  const roiMultiplier = Math.round((additionalRevenue / 35000) * 100) / 100; // Against Growth plan price

  return (
    <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-6 py-2 mb-6">
              <Calculator className="h-5 w-5 text-blue-400" />
              <span className="text-sm font-semibold text-gray-300">Growth Calculator</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              See Your Potential
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Revenue Growth</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Calculate how much additional revenue you could generate with our optimization
            </p>
          </motion.div>

          {/* Calculator Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-blue-500/20 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Your Current Numbers</h3>

              <div className="space-y-8">
                {/* Monthly Visitors */}
                <div>
                  <Label className="text-gray-300 mb-3 block">
                    Monthly Website Visitors: <span className="text-white font-bold">{monthlyVisitors.toLocaleString()}</span>
                  </Label>
                  <Slider
                    value={[monthlyVisitors]}
                    onValueChange={(value) => setMonthlyVisitors(value[0])}
                    min={1000}
                    max={100000}
                    step={1000}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>1K</span>
                    <span>100K</span>
                  </div>
                </div>

                {/* Conversion Rate */}
                <div>
                  <Label className="text-gray-300 mb-3 block">
                    Current Conversion Rate: <span className="text-white font-bold">{currentConversion}%</span>
                  </Label>
                  <Slider
                    value={[currentConversion]}
                    onValueChange={(value) => setCurrentConversion(value[0])}
                    min={0.5}
                    max={10}
                    step={0.5}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>0.5%</span>
                    <span>10%</span>
                  </div>
                </div>

                {/* Average Deal Value */}
                <div>
                  <Label htmlFor="dealValue" className="text-gray-300 mb-3 block">
                    Average Deal Value (₹)
                  </Label>
                  <Input
                    id="dealValue"
                    type="number"
                    value={avgDealValue}
                    onChange={(e) => setAvgDealValue(Number(e.target.value) || 0)}
                    className="bg-slate-900/50 border-gray-700 text-white text-lg"
                  />
                </div>
              </div>
            </motion.div>

            {/* Results Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Current State */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700">
                <h4 className="text-lg font-semibold text-gray-400 mb-4">Current Performance</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-300">Monthly Leads</span>
                    </div>
                    <span className="text-2xl font-bold text-white">{currentLeads}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-300">Monthly Revenue</span>
                    </div>
                    <span className="text-2xl font-bold text-white">₹{currentRevenue.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Improved State */}
              <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 rounded-2xl p-6 border-2 border-green-500/50 shadow-xl shadow-green-500/20">
                <h4 className="text-lg font-semibold text-green-400 mb-4 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  With 24x7solution Optimization
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-green-400" />
                      <span className="text-gray-300">Monthly Leads</span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-white">{improvedLeads}</span>
                      <span className="text-sm text-green-400 ml-2">(+{improvedLeads - currentLeads})</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-5 w-5 text-green-400" />
                      <span className="text-gray-300">Monthly Revenue</span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-white">₹{improvedRevenue.toLocaleString()}</span>
                      <span className="text-sm text-green-400 ml-2">(+₹{additionalRevenue.toLocaleString()})</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ROI */}
              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl p-6 border border-blue-500/50">
                <h4 className="text-lg font-semibold text-blue-400 mb-2">Estimated ROI</h4>
                <p className="text-4xl font-bold text-white mb-2">{roiMultiplier}x</p>
                <p className="text-sm text-gray-400">
                  For every ₹1 spent, you get back ₹{roiMultiplier}
                </p>
              </div>

              {/* CTA */}
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl shadow-orange-500/50"
                onClick={() => document.getElementById('lead-form').scrollIntoView({ behavior: 'smooth' })}
              >
                Claim Your Free Growth Audit
              </Button>
            </motion.div>
          </div>

          {/* Disclaimer */}
          <p className="text-center text-sm text-gray-500 mt-8">
            *Results based on conservative 50% conversion rate improvement. Actual results may vary.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GrowthCalculator;