// 24x7solution.in Configuration

export const SITE_CONFIG = {
  name: '24x7solution',
  domain: '24x7solution.in',
  title: 'High-Intent Lead Generation & Digital Growth Agency',
  description: 'Performance marketing and digital growth solutions for B2B and B2C businesses',
  email: 'hello@24x7solution.in',
  phone: '+91-XXXXXXXXXX',
};

export const SERVICES = [
  {
    id: 'lead-gen',
    title: 'High-Intent Lead Generation',
    description: 'AI-powered lead qualification and nurturing system',
    icon: 'Target',
    features: [
      'Multi-channel lead capture',
      'AI-based lead scoring',
      'Automated follow-up sequences',
      'CRM integration'
    ],
    price: '₹25,000/month',
    recommended: true
  },
  {
    id: 'web-dev',
    title: 'Custom Website & App Development',
    description: 'High-converting websites and applications',
    icon: 'Code',
    features: [
      'Custom design & development',
      'SEO-optimized architecture',
      'Mobile-first approach',
      'Performance optimization'
    ],
    price: '₹1,50,000 - ₹5,00,000'
  },
  {
    id: 'performance-marketing',
    title: 'Performance Marketing',
    description: 'Data-driven Meta & Google Ads campaigns',
    icon: 'TrendingUp',
    features: [
      'Campaign strategy & setup',
      'A/B testing & optimization',
      'Real-time analytics',
      'ROI-focused approach'
    ],
    price: '₹30,000/month + Ad Spend'
  },
  {
    id: 'seo',
    title: 'SEO & Content Strategy',
    description: 'Organic growth through search optimization',
    icon: 'Search',
    features: [
      'Technical SEO audit',
      'Content optimization',
      'Link building',
      'Local SEO'
    ],
    price: '₹20,000/month'
  },
  {
    id: 'cro',
    title: 'Conversion Rate Optimization',
    description: 'Turn more visitors into customers',
    icon: 'BarChart',
    features: [
      'Funnel analysis',
      'A/B testing',
      'UX improvements',
      'Analytics setup'
    ],
    price: '₹35,000/month'
  }
];

export const COLOR_PALETTE = {
  primary: {
    dark: '#0f172a', // Deep blue-black (stability, trust)
    light: '#1e293b'
  },
  accent: {
    neon: '#38bdf8', // Neon blue (action, energy)
    electric: '#a855f7', // Electric purple (innovation)
    orange: '#fb923c' // Electric orange (CTA - Von Restorff)
  },
  trust: '#10b981', // Green (success, verification)
  background: {
    dark: '#020617',
    light: '#f8fafc'
  }
};

// Mock Stripe Configuration
export const STRIPE_CONFIG = {
  publishableKey: 'pk_test_mock_24x7solution',
  plans: [
    {
      id: 'starter',
      name: 'Starter',
      price: 15000,
      interval: 'month',
      features: [
        'Lead Generation Dashboard',
        'Up to 100 leads/month',
        'Email Support',
        'Basic Analytics'
      ]
    },
    {
      id: 'growth',
      name: 'Growth',
      price: 35000,
      interval: 'month',
      features: [
        'Everything in Starter',
        'Up to 500 leads/month',
        'Priority Support',
        'Advanced Analytics',
        'CRM Integration',
        'Dedicated Account Manager'
      ],
      recommended: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 75000,
      interval: 'month',
      features: [
        'Everything in Growth',
        'Unlimited leads',
        '24/7 Support',
        'Custom Integrations',
        'White-label Solutions',
        'Dedicated Team'
      ]
    }
  ]
};

// Supabase Mock Configuration
export const SUPABASE_CONFIG = {
  url: 'https://mock.supabase.co',
  anonKey: 'mock_anon_key_24x7solution'
};

export const SOCIAL_PROOF = {
  totalLeads: 10500,
  activeClients: 47,
  avgROI: 320,
  yearsFounded: 2020
};
