import React from 'react';
import {
    Button,
     Text,
     View,
     TouchableHighlight,
     Image 
    } 
     from 'react-native';


export default class App extends React.Component {
    static navigationOptions = {
            alignItems: 'center',
           };
    render() {
  const {navigate} = this.props.navigation;
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#A9F5E1',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
<Text style={{    color:'black',fontSize:20}}>Pasirinkite ka norite treniruoti:</Text>
  <Image style={{width: 120, height: 120,}}
      source={{uri:'http://cdn.marketplaceimages.windowsphone.com/v8/images/75b1a044-6125-4a49-af99-cca91b69cab2?imageType=ws_icon_large'}}

      />  

<Button title="Krutine" onPress={ ()=> navigate('Krutine')}/>



  <Image style={{width: 120, height: 120,}}
      source={{uri:'https://www.shareicon.net/data/128x128/2016/05/11/763481_medical_512x512.png'}}
      />      
      <Button title="Rankos" onPress={ ()=> navigate('Rankos')}/>



  <Image style={{width: 120, height: 120,}}
      source={{uri:'https://www.shareicon.net/data/128x128/2015/11/09/669451_people_512x512.png'}}
      />      
<Button title="Kojos" onPress={ ()=> navigate('Kojos')}/>

  </View>
  
  );
}
}
        
      