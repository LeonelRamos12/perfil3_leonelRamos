import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './Button';

export default function ErrorMessage({ message, onRetry }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Algo salió mal</Text>
      <Text style={styles.message}>{message}</Text>
      {onRetry && <Button title="Reintentar" onPress={onRetry} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#dc2626', marginBottom: 8 },
  message: { fontSize: 15, color: '#475569', marginBottom: 20, textAlign: 'center' },
});