import React, { useState } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity,
  StyleSheet, FlatList, SafeAreaView,
} from 'react-native';
import { AffiliateDisclosureBanner, AffiliateDisclosureModal } from '../../components/medisave/AffiliateDisclosure';
import { ProductCard } from '../../components/medisave/MedisaveProductCard';
import { STORE_CATEGORIES, FEATURED_PRODUCTS } from '../../config/medisaveConfig';
import { openCategoryLink } from '../../utils/affiliateTracker';

export default function MedisaveStoreScreen() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showDisclosure, setShowDisclosure] = useState(false);

  const filtered = selectedCategory === 'all'
    ? FEATURED_PRODUCTS
    : FEATURED_PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Medisave UK</Text>
            <Text style={styles.subtitle}>Professional Medical Supplies</Text>
          </View>
          <TouchableOpacity onPress={() => setShowDisclosure(true)} style={styles.infoBtn}>
            <Text style={{ fontSize: 20 }}>ℹ️</Text>
          </TouchableOpacity>
        </View>

        <AffiliateDisclosureBanner />

        <View style={styles.statsRow}>
          {[['5%','Commission'],['90','Day Cookie'],['UK','Based']].map(([val, label], i) => (
            <React.Fragment key={label}>
              {i > 0 && <View style={styles.divider} />}
              <View style={styles.stat}>
                <Text style={styles.statVal}>{val}</Text>
                <Text style={styles.statLabel}>{label}</Text>
              </View>
            </React.Fragment>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Browse by Category</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingLeft: 16 }}>
          <TouchableOpacity
            style={[styles.chip, selectedCategory === 'all' && styles.chipActive]}
            onPress={() => setSelectedCategory('all')}
          >
            <Text style={[styles.chipText, selectedCategory === 'all' && styles.chipTextActive]}>All</Text>
          </TouchableOpacity>
          {STORE_CATEGORIES.map((cat) => (
            <TouchableOpacity
              key={cat.id}
              style={[styles.chip, selectedCategory === cat.id && styles.chipActive]}
              onPress={() => { setSelectedCategory(cat.id); openCategoryLink(cat, 'store_category'); }}
            >
              <Text style={{ fontSize: 14, marginRight: 4 }}>{cat.icon}</Text>
              <Text style={[styles.chipText, selectedCategory === cat.id && styles.chipTextActive]}>{cat.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>Featured Products</Text>
        <FlatList
          data={filtered} horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 8 }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProductCard product={item} />}
        />

        <TouchableOpacity style={styles.browseAll}
          onPress={() => openCategoryLink({ slug: '' }, 'browse_all')}>
          <Text style={styles.browseAllText}>Browse Full Medisave Catalogue →</Text>
        </TouchableOpacity>

        <View style={styles.legalFooter}>
          <Text style={styles.legalText}>
            * 5% commission on qualifying purchases. 90-day referral window.
            Prices approximate and subject to change.
          </Text>
          <TouchableOpacity onPress={() => setShowDisclosure(true)}>
            <Text style={styles.legalLink}>View Full Disclosure</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <AffiliateDisclosureModal visible={showDisclosure} onClose={() => setShowDisclosure(false)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, paddingBottom: 10 },
  title: { fontSize: 24, fontWeight: '800', color: '#1E3A5F' },
  subtitle: { fontSize: 13, color: '#6B7280', marginTop: 2 },
  infoBtn: { padding: 8 },
  statsRow: { flexDirection: 'row', backgroundColor: '#1E3A5F', marginHorizontal: 16, borderRadius: 12, padding: 16, marginTop: 8 },
  stat: { flex: 1, alignItems: 'center' },
  statVal: { fontSize: 20, fontWeight: '800', color: '#fff' },
  statLabel: { fontSize: 11, color: '#93C5FD', marginTop: 2 },
  divider: { width: 1, backgroundColor: '#2D5A8E' },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: '#111827', marginHorizontal: 16, marginTop: 20, marginBottom: 10 },
  chip: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 20, paddingHorizontal: 14, paddingVertical: 7, marginRight: 8, borderWidth: 1, borderColor: '#E5E7EB' },
  chipActive: { backgroundColor: '#2563EB', borderColor: '#2563EB' },
  chipText: { fontSize: 13, color: '#374151', fontWeight: '500' },
  chipTextActive: { color: '#fff', fontWeight: '700' },
  browseAll: { backgroundColor: '#EFF6FF', borderRadius: 10, padding: 14, alignItems: 'center', marginHorizontal: 16, marginTop: 16, borderWidth: 1, borderColor: '#BFDBFE' },
  browseAllText: { color: '#2563EB', fontWeight: '700', fontSize: 14 },
  legalFooter: { padding: 16, marginTop: 8, borderTopWidth: 1, borderTopColor: '#E5E7EB' },
  legalText: { fontSize: 10, color: '#9CA3AF', lineHeight: 16 },
  legalLink: { fontSize: 11, color: '#2563EB', marginTop: 6, fontWeight: '600' },
});
