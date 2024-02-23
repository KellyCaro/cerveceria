import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, StatusBar } from 'react-native';
import prueba from '../../DatosPrueba/prueba';
const Cervezas = () => {
  return (
      
    <View >
       {prueba.map(repo =>(
           <View key={repo.id}>
                <Text>{repo.name}</Text>
           </View>
       ))}
      
    </View>
  )
};



export default Cervezas;
