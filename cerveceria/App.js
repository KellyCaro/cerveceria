import React,{ useState } from 'react';

import AppBar from './src/vistas/AppBar';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Cervezas from './src/vistas/ListadoCervezas';
import Login from './src/vistas/Login';
import Main from './src/vistas/Main';





const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="/" options={{ headerShown: false }}  component={Login} />
        <Stack.Screen name="Cervezas" options={{ headerShown: false }}  component={Cervezas} />
        <Stack.Screen name="Main"  component={Main} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App