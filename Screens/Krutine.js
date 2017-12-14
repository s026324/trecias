import React from 'react';
import { Text,View } from 'react-native';
import KrutineJSON from '../src/Components/KrutineJSON.js';

  export default class Krutine extends React.Component {
    static navigationOptions = {
      title : 'Krutinei'
    };
    render() {
      return (
        <View
          style={{flex:1}}>
          
          <KrutineJSON />
         
          </View>
      );
      
    }
  }