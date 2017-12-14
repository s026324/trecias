import React from 'react';
import {StyleSheet, Text,TouchableHighlight, Image,View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { ScrollView } from 'react-native';
import Krutine from './Screens/Krutine';
import Rankos from './Screens/Rankos';
import Kojos from './Screens/Kojos'
import HomeScreen from './Screens/HomeScreen';



const ManoScreenai = StackNavigator({
  Home: { screen: HomeScreen },
  Krutine : {screen: Krutine},
  Rankos : {screen: Rankos},
  Kojos :{screen: Kojos}

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
  },



});