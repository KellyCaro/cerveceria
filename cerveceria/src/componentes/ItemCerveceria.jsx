import React,{useState} from 'react';
import { StyleSheet,FlatList, Text, 
  View, TextInput, Button, Alert, StatusBar,Modal,Image,ImageBackgroundComponent,TouchableOpacity } from 'react-native';
import prueba from '../../DatosPrueba/prueba';
import Constants from 'expo-constants'
import { Ionicons } from '@expo/vector-icons';


const ItemCerveceria = (item) => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleStarPress = () => {
    setModalVisible(true);
  };
const handleAddToFavorites = () => {
    // Agregar lógica para guardar el ítem en favoritos
    // Por ejemplo, podrías agregar el ítem a un estado de favoritos
    setFavoritos([...favoritos, item]);
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
            
            <Image
            source={require('./images/1.jpg')} // Ruta de la imagen
            style={styles.imageStyle} // Estilos de la imagen
          />
           <Text style={styles.subtitulo}>{item.name}</Text>
          <Text>País: {item.country}</Text>
          <Text>Ciudad: {item.city}</Text>
          <Text>URL: {item.state}</Text>
          <Text>Direccion: {item.street||'No disponible'}</Text>
          <Text>Teléfono: {item.phone}</Text>
          
          <Text>URL: {item.website_url}</Text>

          <TouchableOpacity style={styles.container} onPress={() => setModalVisible(false)}>
              <View style={styles.container}>
                <Text style={styles.title}>Añadir a favoritos</Text>
                <Ionicons name="star-outline" size={40} color='brown' ></Ionicons>

              </View>
          </TouchableOpacity>
            
          <TouchableOpacity style={styles.container } onPress={() => setModalVisible(false)}>
              <Text style={styles.title}>Cerrar</Text>
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
      paddingBottom:2,
      marginRight:15
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
    imageStyle: {
      width: 200, // Ancho de la imagen
      height: 200, // Alto de la imagen
      resizeMode: 'cover', // Ajuste de la imagen
      borderRadius:100,
      marginBottom:30
       // Margen inferior para separar la imagen del contenido siguiente
    },
    titulo: {
      fontSize: 50,
      color: '#5B3A29',
      fontWeight: 'bold',
      marginVertical: 30
    },
    subtitulo: {
      fontSize: 30,
      fontWeight:'bold',
      color:'#5B3A29',
      paddingBottom:10
    }


  });




export default ItemCerveceria;
