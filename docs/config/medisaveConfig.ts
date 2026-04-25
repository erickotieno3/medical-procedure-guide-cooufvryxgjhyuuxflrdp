// ============================================================
// MEDISAVE AFFILIATE CONFIGURATION
// Auto-generated: 2026-04-13 13:58:28
// Affiliate ID: 
// ============================================================

export interface MedisaveConfig {
  enabled: boolean;
  affiliateId: string;
  trackingUrl: string;
  commissionRate: number;
  cookieDays: number;
  legalText: string;
  productCategories: string[];
}

export const medisaveConfig: MedisaveConfig = {
  enabled: process.env.MEDISAVE_ENABLED === "true",
  affiliateId: process.env.MEDISAVE_AFFILIATE_ID || "",
  trackingUrl: process.env.MEDISAVE_TRACKING_URL || "",
  commissionRate: ,
  cookieDays: ,
  legalText: "Contains affiliate links to Medisave UK medical supplies. We earn a commission on qualifying purchases.",
  productCategories: [
    "surgical-instruments",
    "diagnostic-equipment",
    "first-aid",
    "mobility-aids",
    "wound-care",
    "ppe"
  ]
};

// Validation helper
export function isMedisaveEnabled(): boolean {
  return medisaveConfig.enabled && 
         !!medisaveConfig.affiliateId && 
         medisaveConfig.affiliateId !== "";
}

export function getAffiliateUrl(productUrl: string): string {
  const separator = productUrl.includes('?') ? '&' : '?';
  return ${productUrl}ref=;
}
