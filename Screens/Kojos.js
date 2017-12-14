import React from 'react';
import { Text,View } from 'react-native';
import KojosJSON from '../src/Components/KojosJSON.js';

  export default class Kojos extends React.Component {
    static navigationOptions = {
      title : 'Kojoms'
    };
    render() {
      return (
        <View
          style={{flex:1}}>
          
          <KojosJSON />
         
          </View>
      );
      
    }
  }