import React, { useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { toast } from '../hooks/use-toast';
import { motion } from 'framer-motion';

// Zeigarnik Effect - Multi-step progress creates completion urge
const LeadCaptureForm = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1
    name: '',
    email: '',
    phone: '',
    // Step 2
    company: '',
    website: '',
    companySize: '',
    // Step 3
    service: '',
    budget: '',
    timeline: '',
    // Step 4
    challenges: ''
  });

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateStep = () => {
    if (step === 1) {
      if (!formData.name || !formData.email || !formData.phone) {
        toast({ title: 'Please fill all fields', variant: 'destructive' });
        return false;
      }
      // Email validation
      if (!/\S+@\S+\.\S+/.test(formData.email)) {
        toast({ title: 'Please enter a valid email', variant: 'destructive' });
        return false;
      }
    }
    if (step === 2) {
      if (!formData.company || !formData.companySize) {
        toast({ title: 'Please fill all required fields', variant: 'destructive' });
        return false;
      }
    }
    if (step === 3) {
      if (!formData.service || !formData.budget) {
        toast({ title: 'Please select service and budget', variant: 'destructive' });
        return false;
      }
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep()) {
      if (step < totalSteps) {
        setStep(step + 1);
      } else {
        handleSubmit();
      }
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: 'Success! 🎉',
        description: 'Your growth audit request has been received. We\'ll contact you within 24 hours!',
      });
      // Reset form
      setStep(1);
      setFormData({
        name: '', email: '', phone: '', company: '', website: '',
        companySize: '', service: '', budget: '', timeline: '', challenges: ''
      });
    }, 2000);
  };

  return (
    <section id="lead-form" className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Progress Bar - Zeigarnik Effect */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className="flex items-center flex-1">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                    step >= s
                      ? 'bg-gradient-to-br from-blue-500 to-purple-500 text-white'
                      : 'bg-gray-800 text-gray-500'
                  }`}>
                    {s}
                  </div>
                  {s < 4 && (
                    <div className={`flex-1 h-1 mx-2 transition-all duration-300 ${
                      step > s ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gray-800'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <p className="text-sm text-gray-400 mt-2 text-center">
              Step {step} of {totalSteps} - {Math.round(progress)}% Complete
            </p>
          </div>

          {/* Form Card */}
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-blue-500/20 shadow-2xl shadow-blue-500/10"
          >
            {/* Step 1: Contact Info */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">Let's Get Started</h2>
                  <p className="text-gray-400">Tell us who you are</p>
                </div>
                <div>
                  <Label htmlFor="name" className="text-gray-300">Full Name*</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="mt-1 bg-slate-900/50 border-gray-700 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-300">Work Email*</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="mt-1 bg-slate-900/50 border-gray-700 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-gray-300">Phone Number*</Label>
                  <Input
                    id="phone"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="mt-1 bg-slate-900/50 border-gray-700 text-white"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Company Info */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">About Your Company</h2>
                  <p className="text-gray-400">Help us understand your business</p>
                </div>
                <div>
                  <Label htmlFor="company" className="text-gray-300">Company Name*</Label>
                  <Input
                    id="company"
                    placeholder="Your Company Pvt Ltd"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="mt-1 bg-slate-900/50 border-gray-700 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="website" className="text-gray-300">Website (Optional)</Label>
                  <Input
                    id="website"
                    placeholder="www.yourcompany.com"
                    value={formData.website}
                    onChange={(e) => handleInputChange('website', e.target.value)}
                    className="mt-1 bg-slate-900/50 border-gray-700 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="companySize" className="text-gray-300">Company Size*</Label>
                  <Select value={formData.companySize} onValueChange={(value) => handleInputChange('companySize', value)}>
                    <SelectTrigger className="mt-1 bg-slate-900/50 border-gray-700 text-white">
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1-10 employees</SelectItem>
                      <SelectItem value="11-50">11-50 employees</SelectItem>
                      <SelectItem value="51-200">51-200 employees</SelectItem>
                      <SelectItem value="201-500">201-500 employees</SelectItem>
                      <SelectItem value="500+">500+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Step 3: Service & Budget */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">What Do You Need?</h2>
                  <p className="text-gray-400">Select your primary interest</p>
                </div>
                <div>
                  <Label htmlFor="service" className="text-gray-300">Service Interested In*</Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                    <SelectTrigger className="mt-1 bg-slate-900/50 border-gray-700 text-white">
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lead-gen">Lead Generation</SelectItem>
                      <SelectItem value="web-dev">Website/App Development</SelectItem>
                      <SelectItem value="performance-marketing">Performance Marketing</SelectItem>
                      <SelectItem value="seo">SEO</SelectItem>
                      <SelectItem value="cro">Conversion Optimization</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="budget" className="text-gray-300">Monthly Budget*</Label>
                  <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                    <SelectTrigger className="mt-1 bg-slate-900/50 border-gray-700 text-white">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10-25k">₹10,000 - ₹25,000</SelectItem>
                      <SelectItem value="25-50k">₹25,000 - ₹50,000</SelectItem>
                      <SelectItem value="50-100k">₹50,000 - ₹1,00,000</SelectItem>
                      <SelectItem value="100k+">₹1,00,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="timeline" className="text-gray-300">When to Start?</Label>
                  <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                    <SelectTrigger className="mt-1 bg-slate-900/50 border-gray-700 text-white">
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">ASAP</SelectItem>
                      <SelectItem value="1-2weeks">1-2 weeks</SelectItem>
                      <SelectItem value="1month">Within a month</SelectItem>
                      <SelectItem value="exploring">Just exploring</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Step 4: Challenges */}
            {step === 4 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">Final Step!</h2>
                  <p className="text-gray-400">Tell us about your biggest challenge</p>
                </div>
                <div>
                  <Label htmlFor="challenges" className="text-gray-300">What's your #1 growth challenge?</Label>
                  <textarea
                    id="challenges"
                    rows={5}
                    placeholder="e.g., We're getting traffic but conversions are low..."
                    value={formData.challenges}
                    onChange={(e) => handleInputChange('challenges', e.target.value)}
                    className="mt-1 w-full bg-slate-900/50 border border-gray-700 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8">
              {step > 1 && (
                <Button
                  variant="ghost"
                  onClick={() => setStep(step - 1)}
                  className="text-gray-400 hover:text-white"
                >
                  Back
                </Button>
              )}
              <div className="flex-1"></div>
              <Button
                onClick={handleNext}
                disabled={loading}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/50"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : step === totalSteps ? (
                  'Submit & Get Free Audit'
                ) : (
                  <>
                    Continue
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </motion.div>

          {/* Trust Signal */}
          <p className="text-center text-sm text-gray-500 mt-6">
            🔒 Your information is 100% secure. We never share your data.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureForm;