import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, Modal, ScrollView,
} from 'react-native';
import { MEDISAVE_CONFIG } from '../config/medisaveConfig';

export const AffiliateDisclosureBanner = ({ style }: { style?: object }) => (
  <View style={[styles.banner, style]}>
    <Text style={styles.bannerIcon}>ℹ️</Text>
    <Text style={styles.bannerText}>
      <Text style={styles.bold}>Affiliate Disclosure: </Text>
      {MEDISAVE_CONFIG.DISCLOSURE_TEXT}
    </Text>
  </View>
);

export const AffiliateDisclosureModal = ({
  visible, onClose,
}: { visible: boolean; onClose: () => void }) => (
  <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
    <View style={styles.overlay}>
      <View style={styles.modal}>
        <ScrollView>
          <Text style={styles.modalTitle}>Affiliate Disclosure</Text>

          <Text style={styles.sectionTitle}>Our Partnership with Medisave UK</Text>
          <Text style={styles.body}>
            Medical Procedure Guide participates in the Medisave UK affiliate programme.
            We earn a small commission (5%) when you purchase products through links in
            our app, at no additional cost to you.
          </Text>

          <Text style={styles.sectionTitle}>Why We Recommend Medisave</Text>
          <Text style={styles.body}>
            We only recommend Medisave because they are a trusted UK supplier of
            professional medical equipment. Recommendations are based on clinical
            relevance — not commission rates.
          </Text>

          <Text style={styles.sectionTitle}>How It Works</Text>
          <Text style={styles.body}>
            {`• When you click a product link, you go to Medisave's website\n• A 90-day referral cookie is placed\n• If you purchase within 90 days, we earn 5% commission\n• Your price is never affected`}
          </Text>

          <Text style={styles.sectionTitle}>Your Rights</Text>
          <Text style={styles.body}>
            You are never obligated to purchase through our links. You may visit
            www.medisave.co.uk directly. This disclosure complies with UK ASA guidelines,
            FTC regulations, and Google Play Store policies.
          </Text>
        </ScrollView>
        <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
          <Text style={styles.closeBtnText}>I Understand</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

export const AffiliateTag = () => (
  <View style={styles.tag}>
    <Text style={styles.tagText}>AD</Text>
  </View>
);

const styles = StyleSheet.create({
  banner: {
    flexDirection: 'row', alignItems: 'flex-start',
    backgroundColor: '#EFF6FF', borderLeftWidth: 3, borderLeftColor: '#2563EB',
    padding: 12, borderRadius: 6, marginVertical: 8, marginHorizontal: 16,
  },
  bannerIcon: { fontSize: 14, marginRight: 8, marginTop: 1 },
  bannerText: { flex: 1, fontSize: 12, color: '#1E40AF', lineHeight: 18 },
  bold: { fontWeight: '700' },
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' },
  modal: {
    backgroundColor: '#fff', borderTopLeftRadius: 20, borderTopRightRadius: 20,
    padding: 24, maxHeight: '80%',
  },
  modalTitle: { fontSize: 20, fontWeight: '700', color: '#111827', marginBottom: 16 },
  sectionTitle: { fontSize: 14, fontWeight: '700', color: '#374151', marginTop: 16, marginBottom: 6 },
  body: { fontSize: 13, color: '#6B7280', lineHeight: 20 },
  closeBtn: {
    backgroundColor: '#2563EB', borderRadius: 10,
    padding: 14, alignItems: 'center', marginTop: 20,
  },
  closeBtnText: { color: '#fff', fontWeight: '700', fontSize: 15 },
  tag: {
    backgroundColor: '#FEF3C7', borderRadius: 3,
    paddingHorizontal: 5, paddingVertical: 2,
  },
  tagText: { fontSize: 9, fontWeight: '800', color: '#92400E', letterSpacing: 0.5 },
});
