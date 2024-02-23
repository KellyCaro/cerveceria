import React from 'react';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import Cervezas from './src/componentes/ListadoCervezas';
import Login from './src/componentes/Login';
import Main from './src/componentes/Main';
import { NativeRouter } from 'react-router-native';
export default function App() {
  return <NativeRouter>
    <Login />
  </NativeRouter>
}
