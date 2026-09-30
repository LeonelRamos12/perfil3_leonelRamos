import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InfoRow from '../components/InfoRow';
import Button from '../components/Button';
import useStudentInfo from '../hooks/useStudentInfo';

export default function StudentScreen({ navigation }) {
  const student = useStudentInfo();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Datos del Estudiante</Text>
        <InfoRow label="Nombre" value={student.nombre} />
        <InfoRow label="Carnet" value={student.carnet} />
        <InfoRow label="Sección y grupo" value={`Sección ${student.seccion} - Grupo ${student.grupo}`} />
      </View>

      <Button title="Ver personajes" onPress={() => navigation.navigate('Api')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f1f5f9', padding: 20, justifyContent: 'center' },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 28,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  title: { fontSize: 22, fontWeight: 'bold', color: '#1e293b', marginBottom: 8 },
});