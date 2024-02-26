import { StyleSheet } from 'react-native';

const ItemCerveceriaStyles = StyleSheet.create({
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
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
      },
      modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
        
      },
      imageStyle: {
        width: 200, 
        height: 200, 
        resizeMode: 'cover', 
        borderRadius:100,
        marginBottom:30
         
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

export default ItemCerveceriaStyles;
