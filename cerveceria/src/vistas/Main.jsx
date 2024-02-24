import React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ItemCerveceria from './ItemCerveceria';

import Cervezas from './ListadoCervezas';


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarStyle: styles.tabBar, // Aplica el estilo de la barra de pestañas
      tabBarLabelStyle: styles.tabBarLabel, // Aplica el estilo del texto de las pestañas
    }}
  >
      <Tab.Screen name="Cervecerias" component={Cervezas} />
      <Tab.Screen name="Favoritos" component={ItemCerveceria} />
      
    </Tab.Navigator>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'brown',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  tabBar: {
    backgroundColor: '#fff',
  },
  tabBarLabel: {
    color: 'black',
    fontSize: 16,
  },
});

export default function Navegacion() {
  return (
    
      <MyTabs />
    
  );
}
