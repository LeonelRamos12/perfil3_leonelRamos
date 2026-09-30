import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function InfoRow({ label, value }) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  label: { fontSize: 13, color: '#64748b', textTransform: 'uppercase', marginBottom: 2 },
  value: { fontSize: 18, color: '#0f172a', fontWeight: '600' },
});