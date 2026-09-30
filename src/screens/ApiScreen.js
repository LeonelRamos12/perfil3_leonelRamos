import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import CharacterCard from '../components/CharacterCard';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import useCharacters from '../hooks/useCharacters';

export default function ApiScreen() {
  const { characters, loading, refreshing, error, refresh, retry } = useCharacters();

  if (loading) return <Loading message="Cargando personajes..." />;
  if (error) return <ErrorMessage message={error} onRetry={retry} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={characters}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <CharacterCard character={item} />}
        contentContainerStyle={styles.list}
        refreshing={refreshing}
        onRefresh={refresh}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f1f5f9' },
  list: { padding: 16 },
});