import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const navigation = useNavigation();

  const handlePress = async () => {
    try {
      // Tu lógica de autenticación aquí...

      // Si la autenticación es exitosa, navega a la pantalla de Cervezas
      navigation.navigate('Main');
    } catch (error) {
      Alert.alert('Error', 'Ha ocurrido un error durante la autenticación.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cerveceria</Text>
      <Text style={styles.subtitulo}>Ingresa a tu cuenta</Text>
      <TextInput 
        placeholder='Digita tu usuario' 
        style={styles.textInput} 
        onChangeText={text => setUsuario(text)}
        value={usuario}
      />
      <TextInput 
        placeholder='Digita tu Contraseña' 
        style={styles.textInput} 
        onChangeText={text => setContraseña(text)}
        value={contraseña}
        secureTextEntry={true} // Para ocultar la contraseña
      />
      <Button title="Presionar" onPress={handlePress} />
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '40%'
  },
  titulo: {
    fontSize: 50,
    color: '#5B3A29',
    fontWeight: 'bold',
    marginVertical: 30
  },
  subtitulo: {
    fontSize: 20,
    color: '#5B3A29',
  },
  textInput: {
    borderColor: '#5B3A29',
    borderWidth: 2,
    borderRadius: 30,
    padding: 5,
    marginTop: 15,
    width: '80%'
  },
});

export default Login;
