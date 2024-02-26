import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, Text, TouchableOpacity, TextInput, View } from 'react-native';
import ItemCerveceria from './ItemCerveceria';
import ListadoStyles from '../componentes/estilos/ListadoCervezasStyles';

const Cervezas = () => {
  const [cervezas, setCervezas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchCervezas = async () => {
    try {
      const response = await fetch('https://api.openbrewerydb.org/v1/breweries');
      if (!response.ok) {
        throw new Error('Error al obtener los datos');
      }
      const json = await response.json();
      if (json && json.length > 0) {
        setCervezas(json);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCervezas();
  }, []);

  const handleFilterPress = () => {
    // Aquí puedes agregar la lógica para filtrar las cervezas
    console.log('Filtrar cervezas');
    // Por ahora, solo mostraré un mensaje de alerta
  };

  const filteredCervezas = cervezas.filter(cerveza =>
    cerveza.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (text) => {
    setSearchTerm(text);
  };

  if (loading) {
    return <Text style={ListadoStyles.loadingText}>Cargando...</Text>;
  }

  if (error) {
    return <Text style={ListadoStyles.errorText}>Error: {error}</Text>;
  }

  return (
    <View style={ListadoStyles.container}>
      <FlatList
        data={filteredCervezas}
        renderItem={({ item: repo }) => (
          <ItemCerveceria {...repo}/>   
        )}
        ListHeaderComponent={
          <TouchableOpacity style={ListadoStyles.filterButton} onPress={handleFilterPress}>
            <TextInput
              style={ListadoStyles.textInput}
              placeholder="Buscar cerveceria..."
              onChangeText={handleSearchChange}
              value={searchTerm}
            />
          </TouchableOpacity>
        }
      />
    </View>
  );
};

export default Cervezas;
