import React, { Component } from "react";
import { FlatList, Text, View , TouchableOpacity , StyleSheet } from "react-native";
import { List, ListItem , Header , SearchBar  } from "react-native-elements";

import { Actions } from  'react-native-router-flux'; 
// API : http://starsapp.ir/api/v1/stars
export default class Main extends Component {
  
  render() {
    return (
      <View>
            <Text>Main Page</Text>

            <TouchableOpacity style={styles.Button} onPress={()=> Actions.searchResualtKey({})} >
            <Text style={styles.buttonText} >
             Search Resualt
            </Text>
        </TouchableOpacity>
            
      </View>
    );
  }
}






const styles = StyleSheet.create({
  
  
  
      continer:{ 
          flexGrow:1,
          justifyContent:'center',
          alignItems:'center',
  
      },

      inputBox:{
          width:300,
          backgroundColor:'rgba(255,255,255,0.3)',
          borderRadius:25,
          paddingHorizontal:15,
          fontSize:16,
          color:'#ffffff',
          marginVertical:16,

      },

      buttonText:{
              fontSize:16,
              fontWeight:'700',
              color:'#ffffff',
              textAlign:'center',


      },

      Button:{
          backgroundColor:'#007c91',
          width:300,
          borderRadius:25,
          paddingVertical :14,
          marginVertical:10,



      },

    

   
  
  
  });