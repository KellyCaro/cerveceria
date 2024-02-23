import React from 'react';
import { StyleSheet, Text,View } from 'react-native';
import { Tabs } from 'expo-router';
import Login from './Login';



const AppBarTab = ({ to, children }) => {
    return (
      <Link to={to} style={styles.tab}>
        <Text style={styles.tabText}>{children}</Text>
      </Link>
    );
  }
  
  
  const AppBar = () => {
    return (
      <Tabs>
          <Tabs.Screen name="Login" component={Login}/>
      </Tabs>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      paddingHorizontal: 20,
      paddingVertical: 10,
      backgroundColor: '#5B3A29', // Color de fondo de la barra de navegación
      marginTop:30
    },
    tab: {
      paddingHorizontal: 10,
    },
    tabText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff', // Color del texto de los elementos de la barra de navegación
    },
  });
  


export default AppBar;
