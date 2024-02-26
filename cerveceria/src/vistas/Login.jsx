import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Alert, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import loginStyles from '../componentes/estilos/LoginStyles';
import prueba from '../../DatosPrueba/prueba'; // Importa los datos del archivo JSON

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const navigation = useNavigation();

  const handlePress = () => {
    
    const usuarioEncontrado = prueba.find(user => user.nombreUsuario === usuario && user.contrasena === contraseña);
    if (usuarioEncontrado) {
      
      navigation.navigate('Main');
    } else {
      
      Alert.alert('Error', 'Usuario no registrado. Verifica tus credenciales.');
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
        secureTextEntry={true}
      />
      <TouchableOpacity style={loginStyles.botones} onPress={handlePress}>
        <Text style={loginStyles.textoBoton}>Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
