import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { AffiliateTag } from './AffiliateDisclosure';
import { openProductLink, openCategoryLink } from '../../utils/affiliateTracker';
import { MedisaveProduct } from '../../config/medisaveConfig';

export const InlineProductCard = ({
  product, procedureId, style,
}: { product: MedisaveProduct; procedureId?: string; style?: object }) => (
  <TouchableOpacity
    style={[styles.inlineCard, style]}
    onPress={() => openProductLink(product, 'procedure_inline', procedureId)}
  >
    <View style={styles.inlineImageBox}>
      <Image source={{ uri: product.image }} style={styles.inlineImage} resizeMode="contain" />
    </View>
    <View style={styles.inlineContent}>
      <View style={styles.row}>
        <AffiliateTag />
        {product.badge && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{product.badge}</Text>
          </View>
        )}
      </View>
      <Text style={styles.inlineName} numberOfLines={2}>{product.name}</Text>
      <Text style={styles.inlineBrand}>{product.brand}</Text>
      <View style={styles.row}>
        <Text style={styles.inlinePrice}>£{product.price.toFixed(2)}</Text>
        <TouchableOpacity style={styles.inlineBtn}
          onPress={() => openProductLink(product, 'procedure_inline', procedureId)}>
          <Text style={styles.inlineBtnText}>View →</Text>
        </TouchableOpacity>
      </View>
    </View>
  </TouchableOpacity>
);

export const ProductCard = ({ product, style }: { product: MedisaveProduct; style?: object }) => (
  <TouchableOpacity
    style={[styles.card, style]}
    onPress={() => openProductLink(product, 'store')}
  >
    <View style={styles.imageBox}>
      <Image source={{ uri: product.image }} style={styles.image} resizeMode="contain" />
      {product.badge && (
        <View style={styles.imageBadge}>
          <Text style={styles.imageBadgeText}>{product.badge}</Text>
        </View>
      )}
      <View style={styles.adTag}><AffiliateTag /></View>
    </View>
    <View style={styles.cardContent}>
      <Text style={styles.brand}>{product.brand}</Text>
      <Text style={styles.name} numberOfLines={2}>{product.name}</Text>
      <View style={styles.row}>
        <Text style={styles.price}>£{product.price.toFixed(2)}</Text>
        <TouchableOpacity style={styles.buyBtn}
          onPress={() => openProductLink(product, 'store')}>
          <Text style={styles.buyBtnText}>Shop Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  </TouchableOpacity>
);

export const MedisaveBanner = ({
  onPress, featuredText = 'Shop Medical Supplies',
}: { onPress: () => void; featuredText?: string }) => (
  <TouchableOpacity style={styles.banner} onPress={onPress}>
    <View style={{ flex: 1 }}>
      <AffiliateTag />
      <Text style={styles.bannerTitle}>Medisave UK</Text>
      <Text style={styles.bannerSub}>{featuredText}</Text>
      <Text style={styles.bannerCta}>Browse Products →</Text>
    </View>
    <View style={styles.bannerRight}>
      <Text style={{ fontSize: 36 }}>🩺</Text>
      <Text style={styles.bannerComm}>Earn 5% back*</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 6 },
  inlineCard: {
    flexDirection: 'row', backgroundColor: '#F8FAFF',
    borderRadius: 10, borderWidth: 1, borderColor: '#DBEAFE', padding: 10, marginVertical: 8,
  },
  inlineImageBox: { width: 70, height: 70, borderRadius: 8, overflow: 'hidden', backgroundColor: '#EFF6FF' },
  inlineImage: { width: '100%', height: '100%' },
  inlineContent: { flex: 1, marginLeft: 10 },
  badge: { backgroundColor: '#DCFCE7', borderRadius: 3, paddingHorizontal: 5, paddingVertical: 2 },
  badgeText: { fontSize: 9, fontWeight: '700', color: '#166534' },
  inlineName: { fontSize: 13, fontWeight: '600', color: '#1E3A5F', lineHeight: 18, marginTop: 4 },
  inlineBrand: { fontSize: 11, color: '#6B7280', marginTop: 2 },
  inlinePrice: { fontSize: 14, fontWeight: '700', color: '#2563EB', flex: 1 },
  inlineBtn: { backgroundColor: '#2563EB', borderRadius: 6, paddingHorizontal: 10, paddingVertical: 4 },
  inlineBtnText: { color: '#fff', fontSize: 12, fontWeight: '600' },
  card: {
    backgroundColor: '#fff', borderRadius: 12,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08, shadowRadius: 8, elevation: 3, width: 160, marginRight: 12,
  },
  imageBox: { height: 140, backgroundColor: '#F3F4F6', borderTopLeftRadius: 12, borderTopRightRadius: 12, overflow: 'hidden' },
  image: { width: '100%', height: '100%' },
  imageBadge: { position: 'absolute', top: 8, left: 8, backgroundColor: '#2563EB', borderRadius: 4, paddingHorizontal: 6, paddingVertical: 3 },
  imageBadgeText: { color: '#fff', fontSize: 9, fontWeight: '700' },
  adTag: { position: 'absolute', top: 8, right: 8 },
  cardContent: { padding: 10 },
  brand: { fontSize: 10, color: '#9CA3AF', fontWeight: '600', textTransform: 'uppercase', letterSpacing: 0.5 },
  name: { fontSize: 13, fontWeight: '600', color: '#111827', marginTop: 3, lineHeight: 18 },
  price: { fontSize: 15, fontWeight: '700', color: '#2563EB', flex: 1 },
  buyBtn: { backgroundColor: '#EFF6FF', borderRadius: 6, paddingHorizontal: 8, paddingVertical: 4 },
  buyBtnText: { color: '#2563EB', fontSize: 11, fontWeight: '700' },
  banner: {
    flexDirection: 'row', backgroundColor: '#1E3A5F',
    borderRadius: 12, padding: 16, marginHorizontal: 16, marginVertical: 8,
  },
  bannerTitle: { color: '#fff', fontSize: 16, fontWeight: '800', marginTop: 6 },
  bannerSub: { color: '#93C5FD', fontSize: 12, marginTop: 2 },
  bannerCta: { color: '#60A5FA', fontSize: 13, fontWeight: '700', marginTop: 10 },
  bannerRight: { alignItems: 'center', justifyContent: 'center', paddingLeft: 16 },
  bannerComm: { color: '#93C5FD', fontSize: 10, marginTop: 4, textAlign: 'center' },
});
