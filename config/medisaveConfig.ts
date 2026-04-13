// ============================================================
// MEDISAVE AFFILIATE CONFIG
// Auto-implementation ready: replace AFFILIATE_ID when approved
// ============================================================

export const MEDISAVE_CONFIG = {
  // TODO: Auto-replaced by scripts/activateAffiliate.ts when approved
  AFFILIATE_ID: process.env.EXPO_PUBLIC_MEDISAVE_AFFILIATE_ID || 'PENDING_APPROVAL',
  BASE_URL: 'https://www.medisave.co.uk',
  AFFILIATE_PARAM: 'ref',
  COMMISSION_RATE: 0.05,
  COOKIE_DURATION_DAYS: 90,
  CURRENCY: 'GBP',
  IS_ACTIVE: process.env.EXPO_PUBLIC_MEDISAVE_AFFILIATE_ID !== undefined &&
             process.env.EXPO_PUBLIC_MEDISAVE_AFFILIATE_ID !== 'PENDING_APPROVAL',

  DISCLOSURE_TEXT:
    'This app contains affiliate links to Medisave UK. We may earn a 5% commission if you purchase through these links, at no extra cost to you.',
  BRAND_NAME: 'Medisave UK',
  BRAND_COUNTRY: 'United Kingdom',
};

export const PROCEDURE_PRODUCT_MAP: Record<string, string[]> = {
  cardiac: ['stethoscopes', 'ecg', 'blood-pressure'],
  respiratory: ['stethoscopes', 'pulse-oximeters', 'nebulisers'],
  diagnostic: ['otoscopes', 'ophthalmoscopes', 'diagnostic-sets'],
  surgery: ['gloves', 'surgical-instruments', 'disposables'],
  emergency: ['first-aid', 'aed', 'emergency-kits'],
  nursing: ['gloves', 'disposables', 'nursing-equipment'],
  general: ['diagnostic-sets', 'gloves', 'disposables'],
};

export const STORE_CATEGORIES = [
  { id: 'stethoscopes', label: 'Stethoscopes', icon: '🩺', slug: 'stethoscopes' },
  { id: 'diagnostic', label: 'Diagnostic Sets', icon: '🔦', slug: 'diagnostic-equipment' },
  { id: 'gloves', label: 'Medical Gloves', icon: '🧤', slug: 'medical-gloves' },
  { id: 'first-aid', label: 'First Aid Kits', icon: '🩹', slug: 'first-aid-kits' },
  { id: 'otoscopes', label: 'Otoscopes', icon: '👂', slug: 'otoscopes' },
  { id: 'blood-pressure', label: 'BP Monitors', icon: '💓', slug: 'blood-pressure-monitors' },
];

export interface MedisaveProduct {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  slug: string;
  category: string;
  procedures: string[];
  badge?: string;
}

export const FEATURED_PRODUCTS: MedisaveProduct[] = [
  {
    id: 'littmann-classic',
    name: 'Littmann Classic III Stethoscope',
    brand: 'Littmann',
    price: 89.99,
    image: 'https://www.medisave.co.uk/images/littmann-classic-iii.jpg',
    slug: 'littmann-classic-iii-stethoscope',
    category: 'stethoscopes',
    procedures: ['cardiac', 'respiratory', 'general'],
    badge: 'Best Seller',
  },
  {
    id: 'welch-allyn-otoscope',
    name: 'Welch Allyn Diagnostic Otoscope',
    brand: 'Welch Allyn',
    price: 124.99,
    image: 'https://www.medisave.co.uk/images/welch-allyn-otoscope.jpg',
    slug: 'welch-allyn-diagnostic-otoscope',
    category: 'otoscopes',
    procedures: ['diagnostic'],
    badge: 'Professional',
  },
  {
    id: 'latex-gloves-box',
    name: 'Medical Latex Examination Gloves (100)',
    brand: 'Medisave',
    price: 12.99,
    image: 'https://www.medisave.co.uk/images/latex-gloves.jpg',
    slug: 'medical-latex-examination-gloves',
    category: 'gloves',
    procedures: ['surgery', 'nursing', 'general'],
    badge: 'Essential',
  },
  {
    id: 'hse-first-aid-kit',
    name: 'HSE First Aid Kit (10 Person)',
    brand: 'Medisave',
    price: 24.99,
    image: 'https://www.medisave.co.uk/images/hse-first-aid-kit.jpg',
    slug: 'hse-first-aid-kit-10-person',
    category: 'first-aid',
    procedures: ['emergency'],
    badge: 'HSE Compliant',
  },
];
