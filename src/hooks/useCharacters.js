import { useState, useEffect, useCallback } from 'react';

const API_URL = 'https://rickandmortyapi.com/api/character';

export default function useCharacters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  const fetchCharacters = useCallback(async () => {
    try {
      setError(null);
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`Error ${response.status}`);
      }
      const data = await response.json();
      setCharacters(data.results);
    } catch (err) {
      setError(err.message || 'No se pudo cargar la información');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  const refresh = useCallback(() => {
    setRefreshing(true);
    fetchCharacters();
  }, [fetchCharacters]);

  const retry = useCallback(() => {
    setLoading(true);
    fetchCharacters();
  }, [fetchCharacters]);

  return { characters, loading, refreshing, error, refresh, retry };
}