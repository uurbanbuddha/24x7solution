// Mock data for 24x7solution.in

export const clientTestimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    position: 'CEO, TechStart India',
    company: 'TechStart India',
    avatar: 'https://ui-avatars.com/api/?name=Rajesh+Kumar&background=38bdf8&color=fff&size=128',
    text: 'The lead quality improved by 340% within 60 days. Their AI-powered system filtered out tire-kickers and brought us decision-makers ready to buy.',
    rating: 5,
    metric: '340% increase in lead quality',
    industry: 'B2B SaaS'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    position: 'Marketing Director',
    company: 'EduTech Solutions',
    avatar: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=a855f7&color=fff&size=128',
    text: 'Their CRO audit uncovered 12 conversion killers on our site. After implementing changes, our demo bookings tripled in one month.',
    rating: 5,
    metric: '3x demo bookings',
    industry: 'EdTech'
  },
  {
    id: 3,
    name: 'Amit Patel',
    position: 'Founder',
    company: 'GrowthHack Agency',
    avatar: 'https://ui-avatars.com/api/?name=Amit+Patel&background=10b981&color=fff&size=128',
    text: 'From zero to 500+ qualified B2B leads in 90 days. The performance marketing campaigns were ROI-positive from day one.',
    rating: 5,
    metric: '500+ leads in 90 days',
    industry: 'Agency'
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    position: 'VP Sales',
    company: 'CloudSync Systems',
    avatar: 'https://ui-avatars.com/api/?name=Sneha+Reddy&background=fb923c&color=fff&size=128',
    text: 'Best investment we made. The custom dashboard gives real-time visibility into every lead, and the conversion rate speaks for itself.',
    rating: 5,
    metric: '67% higher conversion',
    industry: 'B2B Software'
  }
];

export const caseStudiesData = [
  {
    id: 1,
    title: 'SaaS Company Scales to $600K ARR',
    client: 'Anonymous SaaS',
    industry: 'B2B SaaS',
    challenge: 'Zero inbound leads, high CAC',
    solution: 'Implemented multi-channel lead gen + conversion optimization',
    results: {
      metric1: '$600K',
      label1: 'Annual Recurring Revenue',
      metric2: '12%',
      label2: 'Trial-to-Paid Conversion',
      metric3: '60 days',
      label3: 'Time to Achieve'
    },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
  },
  {
    id: 2,
    title: 'E-commerce Store 10x Revenue',
    client: 'Fashion Retailer',
    industry: 'E-commerce',
    challenge: 'Low ROAS on Meta ads',
    solution: 'Performance marketing overhaul + retargeting strategy',
    results: {
      metric1: '10.2x',
      label1: 'Revenue Growth',
      metric2: '4.8x',
      label2: 'ROAS Improvement',
      metric3: '90 days',
      label3: 'Implementation Time'
    },
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop'
  },
  {
    id: 3,
    title: 'EdTech Platform: 2,000 Qualified Leads',
    client: 'Online Learning Platform',
    industry: 'EdTech',
    challenge: 'High lead volume but low qualification',
    solution: 'AI-based lead scoring + nurturing sequences',
    results: {
      metric1: '2,000+',
      label1: 'Qualified Leads',
      metric2: '45%',
      label2: 'Lead Quality Score',
      metric3: '$21',
      label3: 'Cost Per Qualified Lead'
    },
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop'
  }
];

export const trustedBrandsData = [
  { name: 'Amazon AWS', logo: 'https://logo.clearbit.com/aws.amazon.com' },
  { name: 'Microsoft', logo: 'https://logo.clearbit.com/microsoft.com' },
  { name: 'Shopify', logo: 'https://logo.clearbit.com/shopify.com' },
  { name: 'HubSpot', logo: 'https://logo.clearbit.com/hubspot.com' },
  { name: 'Salesforce', logo: 'https://logo.clearbit.com/salesforce.com' },
  { name: 'Stripe', logo: 'https://logo.clearbit.com/stripe.com' }
];

export const liveActivityData = [
  { user: 'Rahul from Mumbai', action: 'just booked a free audit', time: '2 minutes ago' },
  { user: 'Meena from Bangalore', action: 'signed up for Lead Gen', time: '5 minutes ago' },
  { user: 'Karthik from Delhi', action: 'started a project', time: '8 minutes ago' },
  { user: 'Anjali from Pune', action: 'downloaded case study', time: '12 minutes ago' },
  { user: 'Vikram from Hyderabad', action: 'booked a strategy call', time: '15 minutes ago' }
];

export const pricingPlansData = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$1,997',
    period: 'per month',
    description: 'Perfect for small businesses getting started',
    features: [
      'Lead Generation Dashboard',
      'Up to 100 leads/month',
      'Email Support (48hr response)',
      'Basic Analytics',
      'Monthly Reports',
      'CRM Integration (1 platform)'
    ],
    cta: 'Start Free Trial',
    popular: false
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '$4,997',
    period: 'per month',
    description: 'Most popular for scaling businesses',
    features: [
      'Everything in Starter',
      'Up to 500 leads/month',
      'Priority Support (24hr response)',
      'Advanced Analytics & A/B Testing',
      'CRM Integration (unlimited)',
      'Dedicated Account Manager',
      'Bi-weekly strategy calls',
      'Custom landing pages (2/month)'
    ],
    cta: 'Get Started',
    popular: true,
    savings: 'Save $12,000/year'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '$9,997',
    period: 'per month',
    description: 'For businesses that need everything',
    features: [
      'Everything in Growth',
      'Unlimited leads',
      '24/7 Priority Support',
      'Custom Integrations',
      'White-label Solutions',
      'Dedicated Team (3 people)',
      'Weekly strategy sessions',
      'Custom development hours (20/month)',
      'API access',
      'Training & onboarding'
    ],
    cta: 'Contact Sales',
    popular: false
  }
];

export const faqData = [
  {
    id: 1,
    question: 'How quickly can I see results?',
    answer: 'Most clients see qualified leads within 7-14 days of campaign launch. Full optimization takes 60-90 days as we gather data and refine targeting.'
  },
  {
    id: 2,
    question: 'What makes your lead generation different?',
    answer: 'We use AI-powered lead scoring combined with human qualification. This means you only pay for leads that match your ICP and show genuine buying intent.'
  },
  {
    id: 3,
    question: 'Do you offer guarantees?',
    answer: 'Yes! We offer a 60-day money-back guarantee on our Growth and Enterprise plans. If you don\'t see measurable improvement in lead quality or volume, we refund 100%.'
  },
  {
    id: 4,
    question: 'Can I cancel anytime?',
    answer: 'Absolutely. All plans are month-to-month with no long-term contracts. Cancel anytime with 30 days notice.'
  },
  {
    id: 5,
    question: 'What industries do you work with?',
    answer: 'We specialize in B2B SaaS, E-commerce, EdTech, and Professional Services. Our system adapts to any industry with a defined ICP.'
  },
  {
    id: 6,
    question: 'Do you provide reporting?',
    answer: 'Yes! You get 24/7 access to your dashboard with real-time metrics. Plus monthly strategy reports and quarterly business reviews.'
  }
];

export const blogPosts = [
  {
    id: 1,
    title: 'How AI is Revolutionizing B2B Lead Generation in 2025',
    excerpt: 'Discover the latest AI techniques that are transforming how businesses capture and qualify leads.',
    author: 'Team 24x7',
    date: '2025-01-15',
    readTime: '8 min read',
    category: 'Lead Generation',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop'
  },
  {
    id: 2,
    title: '10 CRO Tactics That Increased Our Client\'s Conversions by 340%',
    excerpt: 'A deep dive into the conversion optimization strategies that delivered massive results.',
    author: 'Team 24x7',
    date: '2025-01-10',
    readTime: '12 min read',
    category: 'CRO',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
  },
  {
    id: 3,
    title: 'The Complete Guide to Performance Marketing in 2025',
    excerpt: 'Everything you need to know about running profitable Meta and Google Ads campaigns.',
    author: 'Team 24x7',
    date: '2025-01-05',
    readTime: '15 min read',
    category: 'Performance Marketing',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
  }
];
