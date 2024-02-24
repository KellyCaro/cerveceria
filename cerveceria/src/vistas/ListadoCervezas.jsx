import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, Text, 
TouchableOpacity,TextInput } from 'react-native';
import prueba from '../../DatosPrueba/prueba';
import ItemCerveceria from './ItemCerveceria';
import { Ionicons } from '@expo/vector-icons';
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
    return <Text>Cargando...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <FlatList
      style={styles.container}
      data={filteredCervezas}
      renderItem={({ item: repo }) => (
        <ItemCerveceria {...repo}/>   
      )}
      ListHeaderComponent={
        <TouchableOpacity style={styles.filterButton} onPress={handleFilterPress}>
          <TextInput
          style={styles.textInput}
          placeholder="Buscar cerveza..."
          onChangeText={handleSearchChange}
          value={searchTerm}
        />
        </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  textInput: {
   
    borderBottomWidth: 3,
    borderBottomColor: '#5B3A29',
    
    padding: 5,
    marginTop: 15,
    width: '100%'

  }
});

export default Cervezas;
