import React, { Component } from 'react';
import {Alert, TouchableOpacity, ActivityIndicator, ListView, Text, View, StyleSheet, Platform, Image, Button, Linking } from 'react-native';

export default class InfoList3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

  GetItem (Alert1) {
    
    Alert.alert(Alert1);
   
  }   
  

componentDidMount() {
    return fetch('https://api.myjson.com/bins/l4etn')
    .then((response) => response.json())
    .then((repsonseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
            isLoading: false,
            dataSource: ds.cloneWithRows(repsonseJson.Rankos),
        }, function() {
            //veiksmas su nauju state
        });
        })
        .catch((error) => {
            console.error(error);
        });
    }
    
ListViewItemSeparator = () => {
   return (
     <View
       style={{
         height: .5,
         width: "100%",
         backgroundColor: "blue",
       }}
     />
   );
 }

    render() {
        if(this.state.isLoading) {
            return (
                <View >
                <ActivityIndicator />
                </View>
            );
        }

        return (
    //         <View style={styles.MainContainer}>
 
    //    <ListView
 
    //      dataSource={this.state.dataSource}
 
    //      renderSeparator= {this.ListViewItemSeparator}
 
    //      renderRow={(rowData) =>
 

            

            
    //     <View style={{ flexDirection: 'column',marginLeft:50}}>


 



    <View style={styles.MainContainer}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
          <View style={{flex:1,flexDirection: 'column',marginLeft:50}} >

<Text style={[styles.pavadinimai]}>{rowData.Pavadinimas1}</Text>

  <Image source = {{uri : rowData.Paveikslelis1}} style={styles.kazkoks}/>

          <TouchableOpacity onPress={this.GetItem.bind(this, rowData.Alert1)}> 
         <Text style={styles.alertboxai} >{'SKAITYTI PLACIAU'}</Text>        
          </TouchableOpacity>



          <Text style={[styles.pavadinimai]}>{rowData.Pavadinimas2}</Text>

  <Image source = {{uri : rowData.Paveikslelis2}} style={styles.kazkoks}/>
 

          <TouchableOpacity onPress={this.GetItem.bind(this, rowData.Alert2)}> 
         <Text style={styles.alertboxai} >{'SKAITYTI PLACIAU'}</Text>        
          </TouchableOpacity>
          

          <Text style={[styles.pavadinimai]}>{rowData.Pavadinimas3}</Text>

  <Image source = {{uri : rowData.Paveikslelis3}} style={styles.kazkoks}/>
 

          <TouchableOpacity onPress={this.GetItem.bind(this, rowData.Alert3)}> 
         <Text style={styles.alertboxai} >{'SKAITYTI PLACIAU'}</Text>        
          </TouchableOpacity>
          
          </View>
          

          }
        />
      </View>
        // </View>
        //  }
        //  />
        // </View>
            );


        }
    }
const styles = StyleSheet.create({
 

kazkoks:{
    alignItems:'center',
  width:250,
  height:250,
},
alertboxai:{
    fontSize:22,
    color:'blue',
    fontWeight:'bold',
    margin: 15
},
MainContainer:{
    alignItems:'center',
    backgroundColor: '#A9F5E1',
    
},
pavadinimai:{
    color:'#0B0B61',
   fontSize:20,
   fontWeight:'bold' 
}

 
});