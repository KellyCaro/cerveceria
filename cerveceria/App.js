import React,{ useState } from 'react';

import AppBar from './src/componentes/AppBar';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Cervezas from './src/componentes/ListadoCervezas';
import Login from './src/componentes/Login';
import Main from './src/componentes/Main';





const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="/" options={{ headerShown: false }}  component={Login} />
        <Stack.Screen name="Cervezas" options={{ headerShown: false }}  component={Cervezas} />
        <Stack.Screen name="Main"  component={Main} />
        <Stack.Screen name="AppBar" component={AppBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App