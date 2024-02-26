import { StyleSheet } from 'react-native';

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '40%',
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
  botones: {
    backgroundColor: '#5B3A29',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  textoBoton: {
    color: 'white',
    fontSize: 16,
  }
});

export default loginStyles;
