import React from 'react';
import { StyleSheet,FlatList, Text, View, TextInput, Button, Alert, StatusBar } from 'react-native';
import prueba from '../../DatosPrueba/prueba';
import ItemCerveceria from './ItemCerveceria';


const Cervezas = () => {
  return (
  
    
    <FlatList 
    
    style={styles.container}
    data={prueba}
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
