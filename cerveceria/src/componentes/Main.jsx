import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ItemCerveceria from './ItemCerveceria';

import Cervezas from './ListadoCervezas';


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Cervecerias" component={Cervezas} />
      <Tab.Screen name="Favoritos" component={ItemCerveceria} />
      
    </Tab.Navigator>
    
  );
}

export default function Navegacion() {
  return (
    
      <MyTabs />
    
  );
}
