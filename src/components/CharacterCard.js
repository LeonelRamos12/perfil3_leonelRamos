import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const STATUS_COLORS = {
  Alive: '#16a34a',
  Dead: '#dc2626',
  unknown: '#64748b',
};

export default function CharacterCard({ character }) {
  const { name, status, species, gender, origin, image } = character;

  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>{name}</Text>
        <View style={styles.statusRow}>
          <View style={[styles.dot, { backgroundColor: STATUS_COLORS[status] || '#64748b' }]} />
          <Text style={styles.text}>{status} - {species}</Text>
        </View>
        <Text style={styles.text}>Género: {gender}</Text>
        <Text style={styles.text} numberOfLines={1}>Origen: {origin?.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 14,
    marginBottom: 12,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  image: { width: 110, height: 110 },
  info: { flex: 1, padding: 12, justifyContent: 'center' },
  name: { fontSize: 17, fontWeight: 'bold', color: '#0f172a', marginBottom: 4 },
  statusRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 2 },
  dot: { width: 9, height: 9, borderRadius: 5, marginRight: 6 },
  text: { fontSize: 13, color: '#475569', marginTop: 1 },
});