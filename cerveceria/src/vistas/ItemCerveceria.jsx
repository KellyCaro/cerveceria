import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Modal, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ItemCerveceriaStyles from '../componentes/ItemCerveceriaStyles'; 

const ItemCerveceria = (item) => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleStarPress = () => {
    setModalVisible(true);
  };

  return (
    <View key={item.name} style={ItemCerveceriaStyles.container}>
      <View style={ItemCerveceriaStyles.textContainer}>
        <Text style={ItemCerveceriaStyles.title}>{item.name}</Text>
        <Text>Pais: {item.country}</Text>
        <Text>Telefono: {item.phone}</Text>
        <Text>Url: {item.website_url}</Text>
      </View>
      <TouchableOpacity onPress={handleStarPress}>
        <View style={ItemCerveceriaStyles.iconContainer}>
          <Ionicons name="beer-outline" size={40} color='brown' />
        </View>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={ItemCerveceriaStyles.modalContainer}>
          <View style={ItemCerveceriaStyles.modalContent}>
            <Image
              source={require('../componentes/images/1.jpg')} // Ruta de la imagen
              style={ItemCerveceriaStyles.imageStyle} // Estilos de la imagen
            />
            <Text style={ItemCerveceriaStyles.subtitulo}>{item.name}</Text>
            <Text>País: {item.country}</Text>
            <Text>Ciudad: {item.city}</Text>
            <Text>URL: {item.state}</Text>
            <Text>Direccion: {item.street || 'No disponible'}</Text>
            <Text>Teléfono: {item.phone}</Text>
            <Text>URL: {item.website_url || 'No disponible'}</Text>
            <TouchableOpacity style={ItemCerveceriaStyles.container} onPress={() => setModalVisible(false)}>
              <View style={ItemCerveceriaStyles.container}>
                <Text style={ItemCerveceriaStyles.title}>Añadir a favoritos</Text>
                <Ionicons name="star-outline" size={40} color='brown' />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={ItemCerveceriaStyles.container} onPress={() => setModalVisible(false)}>
              <Text style={ItemCerveceriaStyles.title}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ItemCerveceria;
