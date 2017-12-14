import React from 'react';
import {StyleSheet, Text,TouchableHighlight, Image,View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { ScrollView } from 'react-native';
//import Pratimai from './src/Components/PratimaiJSON.js';
import Krutine from './Screens/Krutine';
//import Rankos from './Screens/Rankos'
import HomeScreen from './Screens/HomeScreen';




const ManoScreenai = StackNavigator({
  Home: { screen: HomeScreen },
  Krutine : {screen: Krutine}
 // Rankos : {screen: Rankos}
//   PratimaiKo : {screen: PratimuKoScreen},
//   PratimaiNu : {screen: PratimuNuScreen},
//   Kardio : {screen : KardioScreen},
//   PratimaiPe : {screen : PratimuPeScreen}
});

export default class App extends React.Component {
  render() {
    return (     
<ManoScreenai />     
          )  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});