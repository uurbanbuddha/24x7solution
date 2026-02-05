import React, { useState } from 'react';
import { ArrowRight, Rocket } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from '../hooks/use-toast';
import { trustedBrands } from '../mockData';

const Hero = () => {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companySize: '',
    adSpend: '',
    preferredTime: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleContinue = () => {
    if (formStep === 1) {
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.companySize) {
        toast({ title: 'Please fill all required fields', variant: 'destructive' });
        return;
      }
      setFormStep(2);
    } else if (formStep === 2) {
      if (!formData.adSpend) {
        toast({ title: 'Please select your ad spend', variant: 'destructive' });
        return;
      }
      setFormStep(3);
    } else if (formStep === 3) {
      toast({ title: 'Form submitted successfully! We\'ll be in touch soon.', variant: 'success' });
      setFormStep(1);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        companySize: '',
        adSpend: '',
        preferredTime: ''
      });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="relative container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="text-sm font-medium text-gray-600 tracking-wide uppercase">B2B SaaS Marketing Agency</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              A Performance-Led SaaS Agency To Get You{' '}
              <span className="text-blue-600 block mt-2">High Quality Demos</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              <span className="font-semibold text-gray-900">12 B2B SaaS got 2250* leads</span> (in 5 months). 
              <span className="font-semibold text-gray-900"> 75 leads/month.</span> You could be next.
            </p>

            {/* Trusted Brands Carousel */}
            <div className="pt-8">
              <p className="text-sm font-medium text-gray-500 mb-6">Trusted by 37+ Leading SaaS Brands</p>
              <div className="flex flex-wrap gap-8 items-center">
                {trustedBrands.slice(0, 6).map((brand, index) => (
                  <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                    <img src={brand.logo} alt={brand.name} className="h-8 w-auto object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            {/* Progress Steps */}
            <div className="flex items-center justify-between mb-8">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center flex-1">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold transition-all duration-300 ${
                    formStep >= step ? 'bg-black text-white' : 'bg-gray-100 text-gray-400'
                  }`}>
                    {step}
                  </div>
                  <div className="ml-3">
                    <p className={`text-xs font-medium ${
                      formStep >= step ? 'text-gray-900' : 'text-gray-400'
                    }`}>
                      {step === 1 ? 'Info' : step === 2 ? 'Ad Spend' : 'Book Call'}
                    </p>
                  </div>
                  {step < 3 && (
                    <div className={`flex-1 h-0.5 mx-3 ${
                      formStep > step ? 'bg-black' : 'bg-gray-200'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold mb-3 leading-tight">
              Stop Hoping For Meetings. Start Engineering Them.
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Used by VWO, Dell, Cyble, Acadly, and 40+ B2B and SaaS brands for Pipeline generation
            </p>

            {/* Form Step 1 */}
            {formStep === 1 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="firstName">First Name*</Label>
                  <Input
                    id="firstName"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name*</Label>
                  <Input
                    id="lastName"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address*</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="companySize">Company Size*</Label>
                  <Select value={formData.companySize} onValueChange={(value) => handleInputChange('companySize', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-50">1 - 50 employees</SelectItem>
                      <SelectItem value="50-500">50 - 500 employees</SelectItem>
                      <SelectItem value="500-5000">500 - 5000 employees</SelectItem>
                      <SelectItem value="5000+">5000+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Form Step 2 */}
            {formStep === 2 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="adSpend">Monthly Ad Spend*</Label>
                  <Select value={formData.adSpend} onValueChange={(value) => handleInputChange('adSpend', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select your monthly ad spend" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-5k">$0 - $5,000</SelectItem>
                      <SelectItem value="5k-20k">$5,000 - $20,000</SelectItem>
                      <SelectItem value="20k-50k">$20,000 - $50,000</SelectItem>
                      <SelectItem value="50k+">$50,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Form Step 3 */}
            {formStep === 3 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="preferredTime">Preferred Call Time*</Label>
                  <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange('preferredTime', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select preferred time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12 PM - 3 PM)</SelectItem>
                      <SelectItem value="evening">Evening (3 PM - 6 PM)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            <Button 
              onClick={handleContinue} 
              className="w-full mt-6 bg-black hover:bg-gray-800 text-white font-semibold py-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              {formStep === 3 ? 'Book Call' : 'Continue'}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <p className="text-xs text-gray-500 mt-4 text-center">
              Get a detailed analysis of your current challenges and future goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;