const API_URL = process.env.REACT_APP_BACKEND_URL;

export const SITE_CONFIG = {
  name: '24x7 Solution',
  domain: '24x7solution.in',
  url: 'https://www.24x7solution.in',
  tagline: 'Always On. Always Growing.',
  description: '24x7 Solution is a performance marketing agency that runs your paid social, lead generation & Google Ads around the clock.',
  email: 'hello@24x7solution.in',
  calendlyUrl: 'https://calendly.com/24x7solution',
  social: {
    linkedin: 'https://linkedin.com/company/24x7solution',
    instagram: 'https://instagram.com/24x7solution',
    facebook: 'https://facebook.com/24x7solution',
    twitter: 'https://x.com/24x7solution',
    youtube: 'https://youtube.com/@24x7solution',
  }
};

export const API_ENDPOINTS = {
  contact: `${API_URL}/api/contact`,
  audit: `${API_URL}/api/audit`,
  newsletter: `${API_URL}/api/newsletter`,
};

export const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
];
