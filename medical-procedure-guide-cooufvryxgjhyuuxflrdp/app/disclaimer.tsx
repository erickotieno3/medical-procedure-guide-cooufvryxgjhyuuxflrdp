import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function DisclaimerScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>Medical Disclaimer</Text>
        <Text style={styles.subtitle}>Please read carefully before use</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Educational Purpose Only</Text>
        <Text style={styles.text}>
          Medical Procedure Guide provides surgical and medical procedure
          references based on globally recognized medical guidelines including
          those from Johns Hopkins Medicine, NHS UK, and Mayo Clinic.
        </Text>
        <Text style={styles.text}>
          This content is intended for <Text style={styles.bold}>educational
          and reference purposes only</Text> and does not constitute medical
          advice, diagnosis, or treatment.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Not a Substitute for Professional Advice</Text>
        <Text style={styles.text}>
          Always consult a qualified and licensed healthcare professional before
          making any medical decisions or taking any medical action. Never
          disregard professional medical advice or delay seeking it because of
          information you have read in this app.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>No Official Affiliation</Text>
        <Text style={styles.text}>
          This app is not officially affiliated with, endorsed by, or connected
          to Johns Hopkins Medicine, NHS UK, Mayo Clinic, or any other medical
          institution referenced herein.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Emergency Situations</Text>
        <Text style={styles.text}>
          In case of a medical emergency, immediately call your local emergency
          services (e.g., 911, 999, 112) or go to the nearest emergency room.
          Do not rely on this app in emergency situations.
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          By using this app, you acknowledge and agree to this disclaimer.
        </Text>
        <Text style={styles.footerText}>
          &copy; 2026 Hyrise Crown. All rights reserved.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f0f4f8" },
  content: { padding: 20, paddingBottom: 40 },
  header: {
    backgroundColor: "#1a5276",
    borderRadius: 12,
    padding: 24,
    marginBottom: 16,
    alignItems: "center",
  },
  title: { fontSize: 24, fontWeight: "bold", color: "#fff", marginBottom: 4 },
  subtitle: { fontSize: 14, color: "#aed6f1" },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 18,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1a5276",
    marginBottom: 8,
  },
  text: { fontSize: 14, color: "#444", lineHeight: 22 },
  bold: { fontWeight: "bold", color: "#1a5276" },
  footer: {
    marginTop: 10,
    alignItems: "center",
    padding: 16,
  },
  footerText: { fontSize: 12, color: "#888", textAlign: "center", marginBottom: 4 },
});
