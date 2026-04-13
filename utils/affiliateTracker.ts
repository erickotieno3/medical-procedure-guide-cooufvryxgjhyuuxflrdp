import { Linking } from 'react-native';
import { MEDISAVE_CONFIG, MedisaveProduct, FEATURED_PRODUCTS } from '../config/medisaveConfig';

export const buildAffiliateUrl = (
  slug: string,
  source: string = 'app',
  procedureId?: string
): string => {
  const affiliateId = MEDISAVE_CONFIG.AFFILIATE_ID;
  const params = new URLSearchParams({
    [MEDISAVE_CONFIG.AFFILIATE_PARAM]: affiliateId,
    utm_source: 'medical_procedure_guide_app',
    utm_medium: 'affiliate',
    utm_campaign: source,
    ...(procedureId && { utm_content: procedureId }),
  });
  return `${MEDISAVE_CONFIG.BASE_URL}/products/${slug}?${params.toString()}`;
};

export const buildCategoryUrl = (categorySlug: string, source: string = 'store'): string => {
  const params = new URLSearchParams({
    [MEDISAVE_CONFIG.AFFILIATE_PARAM]: MEDISAVE_CONFIG.AFFILIATE_ID,
    utm_source: 'medical_procedure_guide_app',
    utm_medium: 'affiliate',
    utm_campaign: source,
  });
  return `${MEDISAVE_CONFIG.BASE_URL}/${categorySlug}?${params.toString()}`;
};

export const openAffiliateLink = async (url: string): Promise<void> => {
  try {
    const supported = await Linking.canOpenURL(url);
    if (supported) await Linking.openURL(url);
    else console.warn('Cannot open URL:', url);
  } catch (error) {
    console.error('Error opening affiliate link:', error);
  }
};

export const openProductLink = async (
  product: MedisaveProduct,
  source: string = 'store',
  procedureId?: string
): Promise<void> => {
  const url = buildAffiliateUrl(product.slug, source, procedureId);
  await openAffiliateLink(url);
};

export const openCategoryLink = async (
  category: { slug: string },
  source: string = 'store'
): Promise<void> => {
  const url = buildCategoryUrl(category.slug, source);
  await openAffiliateLink(url);
};

export const getProductsForProcedure = (
  procedureCategory: string
): MedisaveProduct[] => {
  return FEATURED_PRODUCTS.filter(
    (p) => p.procedures.includes(procedureCategory) || p.procedures.includes('general')
  );
};
