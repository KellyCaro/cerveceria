import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Alert, Text } from 'react-native'; // Asegúrate de importar Text desde 'react-native'
import { useNavigation } from '@react-navigation/native';

import loginStyles from '../componentes/LoginStyles'; // Importa los estilos de Login

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const navigation = useNavigation();

  const handlePress = async () => {
    try {
      navigation.navigate('Main');
    } catch (error) {
      Alert.alert('Error', 'Ha ocurrido un error durante la autenticación.');
    }
  };

  return (
    <View style={loginStyles.container}>
      <Text style={loginStyles.titulo}>Cerveceria</Text>
      <Text style={loginStyles.subtitulo}>Ingresa a tu cuenta</Text>
      <TextInput 
        placeholder='Digita tu usuario' 
        style={loginStyles.textInput} 
        onChangeText={text => setUsuario(text)}
        value={usuario}
      />
      <TextInput 
        placeholder='Digita tu Contraseña' 
        style={loginStyles.textInput} 
        onChangeText={text => setContraseña(text)}
        value={contraseña}
        secureTextEntry={true} // Para ocultar la contraseña
      />
      <TouchableOpacity style={loginStyles.botones} onPress={handlePress}>
        <Text style={loginStyles.textoBoton}>Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
