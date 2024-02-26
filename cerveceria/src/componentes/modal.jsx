import React from 'react';
import { Modal, View, Text, TouchableOpacity, Image } from 'react-native';
import ItemCerveceriaStyles from './estilos/ItemCerveceriaStyles'; // Importa los estilos del modal

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
            source={image} // Utiliza la prop 'image' como fuente de la imagen
            style={ItemCerveceriaStyles.imageStyle}
            />
          <Text style={ItemCerveceriaStyles.subtitulo}>{item.title}</Text>
          <Text>Descripción: {item.description}</Text>
          {/* Aquí puedes mostrar más información del item según tus necesidades */}
          <TouchableOpacity onPress={closeModal}>
            <Text style={ItemCerveceriaStyles.title}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
