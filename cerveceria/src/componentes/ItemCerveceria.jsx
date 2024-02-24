import React,{useState} from 'react';
import { StyleSheet,FlatList, Text, 
  View, TextInput, Button, Alert, StatusBar,Modal,TouchableOpacity } from 'react-native';
import prueba from '../../DatosPrueba/prueba';
import Constants from 'expo-constants'
import { Ionicons } from '@expo/vector-icons';


const ItemCerveceria = (item) => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleStarPress = () => {
    setModalVisible(true);
  };

  return (
    
    <View key={item.name} style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text>Pais: {item.country}</Text>
        <Text>Telefono: {item.phone}</Text>
        <Text>Url: {item.website_url}</Text>
      </View>
      <TouchableOpacity onPress={handleStarPress}>
        <View style={styles.iconContainer}>
        <Ionicons name="beer-outline" size={40} color='brown' ></Ionicons>

        </View>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Contenido de la modal</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  
    
  );
};

 

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      paddingVertical: 10,
     

      
      
    },

    textContainer:{
      flex:1
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
    iconContainer: {
      marginRight: 30,
      
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semi-transparente
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      width: '80%',
      alignItems: 'center',
    },


  });




export default ItemCerveceria;
