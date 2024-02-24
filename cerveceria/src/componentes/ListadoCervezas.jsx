
import React, { useState, useEffect } from 'react';

import { StyleSheet,FlatList, Text, View, TextInput, Button, Alert, StatusBar } from 'react-native';
import prueba from '../../DatosPrueba/prueba';
import ItemCerveceria from './ItemCerveceria';


const Cervezas = () => {
  const [cervezas, setCervezas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }


  return (
  
    
    <FlatList 
    
    style={styles.container}
    data={cervezas}
    //ItemSeparatorComponent={()=><Text></Text>}
    renderItem={({ item: repo }) => (
        
        <ItemCerveceria {...repo}/>   
    )}
>

   
    </FlatList>

  )
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // //marginTop: StatusBar.currentHeight || 0,
     marginLeft: 20,
     marginRight: 20,
     marginBottom:20,
    
    //borderTopColor: '#5B3A29', 
    borderRightColor: '#5B3A29', 
    borderLeftColor: '#5B3A29', 
    //border: 2,
    //borderRadius: 15
}

}
)



export default Cervezas;
