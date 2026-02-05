import React from 'react';
import { Check, Star } from 'lucide-react';
import { Button } from './ui/button';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built for B2B SaaS Teams Who Want More Demos, Not Fake Promises
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Starter Plan */}
          <div className="bg-white border-2 border-gray-200 hover:shadow-lg hover:border-gray-300 rounded-2xl p-8 transition-all duration-300">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Starter Plan</h3>
              <div className="mb-1">
                <span className="text-4xl font-bold text-gray-900">$160/week</span>
              </div>
              <p className="text-sm text-gray-600">(+10% of Ad Spend)</p>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-black flex items-center justify-center mt-0.5">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm text-gray-700">Channel Strategy & Setup</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-black flex items-center justify-center mt-0.5">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm text-gray-700">1 Platform</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-black flex items-center justify-center mt-0.5">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm text-gray-700">Basic Static Creatives</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-black flex items-center justify-center mt-0.5">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm text-gray-700">Monthly Reporting</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-black flex items-center justify-center mt-0.5">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm text-gray-700">Monthly Review Call</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-black flex items-center justify-center mt-0.5">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm text-gray-700">Shared Manager</span>
              </div>
            </div>

            <p className="text-xs text-gray-500 mb-6">*For custom plan, book strategy call</p>
            <Button className="w-full py-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 bg-black hover:bg-gray-800 text-white">
              Get Started
            </Button>
          </div>

          {/* Growth Plan - Highlighted */}
          <div className="bg-gradient-to-br from-black to-gray-800 border-2 border-black transform md:scale-105 shadow-2xl relative rounded-2xl p-8 transition-all duration-300">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                <Star className="h-4 w-4 fill-current" />
                <span>Most Popular</span>
              </div>
            </div>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2 text-white">Growth Plan</h3>
              <div className="mb-1">
                <span className="text-4xl font-bold text-white">$495/week</span>
              </div>
              <p className="text-sm text-gray-300">(+8% of Ad Spend)</p>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm text-white">Channel Setup & Strategy</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm text-white">Multi Channel (LinkedIn, Meta and Google)</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm text-white">Advanced Static + GIF Creatives</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm text-white">Retargeting Campaigns</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm text-white">Upto 4 A/B Test/Months</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm text-white">Basic Automation</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm text-white">Bi-Weekly Reporting</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm text-white">Bi-Weekly Optimization Calls</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm text-white">Dedicated Ads Specialist</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm text-white">Custom UTM & Attribution Setup</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm text-white">Conversion Tracking Audit</span>
              </div>
            </div>

            <p className="text-xs text-gray-400 mb-6">*For custom plan, book strategy call</p>
            <Button className="w-full py-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 bg-white hover:bg-gray-100 text-black">
              Get Started
            </Button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white border-2 border-gray-200 hover:shadow-lg hover:border-gray-300 rounded-2xl p-8 transition-all duration-300">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Enterprise plan</h3>
              <div className="mb-1">
                <span className="text-4xl font-bold text-gray-900">$995/week</span>
              </div>
              <p className="text-sm text-gray-600">(+5% of Ad Spend)</p>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-black flex items-center justify-center mt-0.5">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm text-gray-700">Channel Setup & Strategy</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-black flex items-center justify-center mt-0.5">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm text-gray-700">Multi-Channel (LinkedIn, Meta, Google)</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-black flex items-center justify-center mt-0.5">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm text-gray-700">High-Converting Funnel Assets</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-black flex items-center justify-center mt-0.5">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm text-gray-700">Retargeting Campaigns</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-black flex items-center justify-center mt-0.5">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm text-gray-700">Multiple A/B Tests/Month</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-black flex items-center justify-center mt-0.5">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm text-gray-700">Advanced Automation & Lead Scoring</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-black flex items-center justify-center mt-0.5">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm text-gray-700">End-to-End CRO</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-black flex items-center justify-center mt-0.5">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm text-gray-700">Custom Reporting</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-black flex items-center justify-center mt-0.5">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm text-gray-700">Bi-Weekly Strategy + Funnel Review</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-black flex items-center justify-center mt-0.5">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm text-gray-700">Dedicated Growth Pod (PM + Ads + Strategy)</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-black flex items-center justify-center mt-0.5">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm text-gray-700">Custom UTM & Attribution Setup</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-black flex items-center justify-center mt-0.5">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm text-gray-700">ABM Targeting Support</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-black flex items-center justify-center mt-0.5">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm text-gray-700">Conversion Tracking Audit + Troubleshooting</span>
              </div>
            </div>

            <p className="text-xs text-gray-500 mb-6">*For custom plan, book strategy call</p>
            <Button className="w-full py-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 bg-black hover:bg-gray-800 text-white">
              Get Started
            </Button>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-sm">All plans include 60-day money back guarantee</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
