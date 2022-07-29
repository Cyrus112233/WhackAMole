import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Square from './components/Square';

export default function App(){
  return (
    <View Style={StyleSheet.container}>
      <Text>Whack-A-Mole App</Text>
      <View style={StyleSheet.game}>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'row',
    alignItems:'center',
    justifyContent: 'center',
  },
  game: {
    flexDirection:'row',
    flexWrap: 'wrap',
    width: 300,
  }
})