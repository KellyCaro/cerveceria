import React, { useState } from 'react';
import { StyleSheet, FlatList, Text, View, TouchableOpacity } from 'react-native';

const Favoritos = ({ favoritos }) => {
    return (
      <View>
        <Text>Lista de favoritos:</Text>
        <FlatList
          data={favoritos}
          renderItem={({ item }) => (
            <View>
              <Text>{item.name}</Text> 
            </View>
          )}
          keyExtractor={(item) => item.id.toString()} 
        />
      </View>
    );
  };
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Favoritos;
