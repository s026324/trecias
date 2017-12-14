import React from 'react';
import { Text,View } from 'react-native';
import RankosJSON from '../src/Components/RankosJSON.js';

  export default class Rankos extends React.Component {
    static navigationOptions = {
      title : 'Rankoms'
    };
    render() {
      return (
        <View
          style={{flex:1}}>
          
          <RankosJSON />
         
          </View>
      );
      
    }
  }