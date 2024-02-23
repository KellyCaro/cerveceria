import React from 'react';
import { StyleSheet,FlatList, Text, View, TextInput, Button, Alert, StatusBar } from 'react-native';
import prueba from '../../DatosPrueba/prueba';
import Constants from 'expo-constants'


const ItemCerveceria = (item) => {
  return (
  
        <View key={item.name}  style={styles.container }>
            
            <Text style={styles.title}>{item.name}</Text>
            <Text>Pais: {item.country}</Text>
            <Text>Telefono:{item.phone}</Text>
            <Text>Url: {item.website_url}</Text>

            
           
        </View>
    )}


 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      marginLeft:20,
     

      
      
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      paddingLeft:40,
      
      
    },
    title: {
      fontSize: 17,
      fontWeight:'bold',
      color:'#5B3A29',
      paddingBottom:2
    },


  });




export default ItemCerveceria;
