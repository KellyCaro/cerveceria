import React from 'react';
import { Modal, View, Text, TouchableOpacity, Image } from 'react-native';
import ItemCerveceriaStyles from './estilos/ItemCerveceriaStyles'; 

const CustomModal = ({ modalVisible, closeModal, item }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}
    >
      <View style={ItemCerveceriaStyles.modalContainer}>
        <View style={ItemCerveceriaStyles.modalContent}>
        <Image
            source={image}
            style={ItemCerveceriaStyles.imageStyle}
            />
          <Text style={ItemCerveceriaStyles.subtitulo}>{item.title}</Text>
          <Text>Descripción: {item.description}</Text>
          
          <TouchableOpacity onPress={closeModal}>
            <Text style={ItemCerveceriaStyles.title}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
