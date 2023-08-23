import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import styles from './styles';

interface Pokemon {
  name: string;
  url: string;
}

export function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
        setPokemons(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPokemons();
  }, []);

  useEffect(() => {
    const filteredPokemons = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPokemons(filteredPokemons);
  }, [searchTerm, pokemons]);

  const handleSearch = (text: string) => {
    setSearchTerm(text);
  };

  const navigation = useNavigation(); // Initialize the useNavigation hook

  const handleNavigationPokemonDetail = (pokemonId: number) => {
    navigation.navigate('About', {
      pokemonId,
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        onChangeText={handleSearch}
        placeholder="Search Pokémon"
      />
      <FlatList
        data={filteredPokemons}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.pokemonItem}
            onPress={() => handleNavigationPokemonDetail(Number(item.url.split('/')[6]))}
          >
            <Text style={styles.pokemonName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
