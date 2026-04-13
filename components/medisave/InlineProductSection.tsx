import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { InlineProductCard } from './AffiliateDisclosure';
import { AffiliateDisclosureBanner } from './AffiliateDisclosure';
import { getProductsForProcedure } from '../../utils/affiliateTracker';

interface Props {
  procedureCategory: string;
  procedureId: string;
}

export const InlineProductSection = ({ procedureCategory, procedureId }: Props) => {
  const products = getProductsForProcedure(procedureCategory);
  if (products.length === 0) return null;

  return (
    <View style={styles.section}>
      <View style={styles.header}>
        <Text style={styles.title}>🛒 Recommended Equipment</Text>
        <Text style={styles.sub}>via Medisave UK</Text>
      </View>
      <AffiliateDisclosureBanner style={{ marginHorizontal: 0, marginTop: 8 }} />
      {products.map((product) => (
        <InlineProductCard
          key={product.id}
          product={product}
          procedureId={procedureId}
          style={{ marginTop: 8 }}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginTop: 24, marginBottom: 8, backgroundColor: '#F8FAFF',
    borderRadius: 12, padding: 14, borderWidth: 1, borderColor: '#DBEAFE',
  },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  title: { fontSize: 14, fontWeight: '700', color: '#1E3A5F' },
  sub: { fontSize: 11, color: '#6B7280' },
});
