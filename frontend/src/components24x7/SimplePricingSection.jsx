import React, { useState } from 'react';
import { Check, Star, CreditCard, Lock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../components/ui/dialog';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { toast } from '../hooks/use-toast';

const SimplePricingSection = () => {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [paymentData, setPaymentData] = useState({
    name: '',
    email: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const plans = [
    {
      id: 'growth',
      name: 'Growth Plan',
      price: '$4,997',
      period: '/month',
      description: 'Perfect for scaling B2B & Service businesses',
      features: [
        'Up to 500 qualified leads/month',
        'AI-powered lead scoring',
        'Sales-ready decision makers',
        'Dedicated account manager',
        'Bi-weekly strategy calls',
        'CRM integration',
        'Advanced analytics dashboard',
        '60-day money-back guarantee'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise Plan',
      price: '$9,997',
      period: '/month',
      description: 'For businesses ready to dominate',
      features: [
        'Unlimited qualified leads',
        'AI-powered lead scoring',
        'Sales-ready decision makers',
        'Dedicated growth team',
        'Weekly strategy sessions',
        'Full CRM integration',
        'Custom dashboard & reporting',
        'White-label solutions',
        '60-day money-back guarantee'
      ],
      popular: false
    }
  ];

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setIsPaymentOpen(true);
  };

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();
    setPaymentLoading(true);

    // Validate
    if (!paymentData.name || !paymentData.email || !paymentData.cardNumber) {
      toast({ title: 'Please fill all fields', variant: 'destructive' });
      setPaymentLoading(false);
      return;
    }

    // Simulate payment processing
    setTimeout(() => {
      setPaymentLoading(false);
      setIsPaymentOpen(false);
      toast({
        title: 'Payment Successful! 🎉',
        description: `You've subscribed to ${selectedPlan.name}. Check your email for next steps.`
      });
      // Reset form
      setPaymentData({ name: '', email: '', cardNumber: '', expiry: '', cvv: '' });
    }, 2000);
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple Pricing.
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Predictable Results.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose your growth plan. Cancel anytime. 60-day money-back guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-8 transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-br from-blue-600 to-purple-600 transform md:scale-105 shadow-2xl shadow-blue-500/50 border-2 border-blue-400'
                  : 'bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-gray-700 hover:border-gray-600'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-2 shadow-lg">
                    <Star className="h-4 w-4 fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-3">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-xl text-gray-300">{plan.period}</span>
                </div>
                <p className={`text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-400'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                      plan.popular ? 'bg-white/20' : 'bg-blue-500/20'
                    }`}>
                      <Check className={`h-4 w-4 ${plan.popular ? 'text-white' : 'text-blue-400'}`} />
                    </div>
                    <span className={`text-sm ${plan.popular ? 'text-white' : 'text-gray-300'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                onClick={() => handleSelectPlan(plan)}
                className={`w-full py-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white'
                }`}
              >
                Get Started Now
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 flex items-center justify-center space-x-4">
            <span className="flex items-center">
              <Lock className="h-4 w-4 mr-2 text-green-400" />
              Secure Payment
            </span>
            <span>•</span>
            <span>60-Day Guarantee</span>
            <span>•</span>
            <span>Cancel Anytime</span>
          </p>
        </div>
      </div>

      {/* Payment Modal */}
      <Dialog open={isPaymentOpen} onOpenChange={setIsPaymentOpen}>
        <DialogContent className="bg-slate-900 border-gray-700 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              Subscribe to {selectedPlan?.name}
            </DialogTitle>
            <DialogDescription className="text-gray-400">
              Complete your payment to start generating leads
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handlePaymentSubmit} className="space-y-4 mt-4">
            <div>
              <Label htmlFor="name" className="text-gray-300">Full Name*</Label>
              <Input
                id="name"
                placeholder="John Doe"
                value={paymentData.name}
                onChange={(e) => setPaymentData({ ...paymentData, name: e.target.value })}
                className="mt-1 bg-slate-800 border-gray-700 text-white"
                required
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-gray-300">Email Address*</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@company.com"
                value={paymentData.email}
                onChange={(e) => setPaymentData({ ...paymentData, email: e.target.value })}
                className="mt-1 bg-slate-800 border-gray-700 text-white"
                required
              />
            </div>

            <div>
              <Label htmlFor="cardNumber" className="text-gray-300">Card Number*</Label>
              <div className="relative">
                <Input
                  id="cardNumber"
                  placeholder="4242 4242 4242 4242"
                  value={paymentData.cardNumber}
                  onChange={(e) => setPaymentData({ ...paymentData, cardNumber: e.target.value })}
                  className="mt-1 bg-slate-800 border-gray-700 text-white"
                  maxLength={19}
                  required
                />
                <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="expiry" className="text-gray-300">Expiry*</Label>
                <Input
                  id="expiry"
                  placeholder="MM/YY"
                  value={paymentData.expiry}
                  onChange={(e) => setPaymentData({ ...paymentData, expiry: e.target.value })}
                  className="mt-1 bg-slate-800 border-gray-700 text-white"
                  maxLength={5}
                  required
                />
              </div>
              <div>
                <Label htmlFor="cvv" className="text-gray-300">CVV*</Label>
                <Input
                  id="cvv"
                  placeholder="123"
                  value={paymentData.cvv}
                  onChange={(e) => setPaymentData({ ...paymentData, cvv: e.target.value })}
                  className="mt-1 bg-slate-800 border-gray-700 text-white"
                  maxLength={4}
                  required
                />
              </div>
            </div>

            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">Plan:</span>
                <span className="text-white font-semibold">{selectedPlan?.name}</span>
              </div>
              <div className="flex justify-between items-center text-lg font-bold">
                <span className="text-gray-400">Total:</span>
                <span className="text-white">{selectedPlan?.price}/month</span>
              </div>
            </div>

            <Button
              type="submit"
              disabled={paymentLoading}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-6 rounded-xl transition-all duration-300"
            >
              {paymentLoading ? 'Processing...' : `Pay ${selectedPlan?.price}`}
            </Button>

            <p className="text-xs text-gray-500 text-center">
              <Lock className="h-3 w-3 inline mr-1" />
              Secured by Stripe. Your information is encrypted and secure.
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default SimplePricingSection;
