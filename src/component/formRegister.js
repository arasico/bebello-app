import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';


export default class FormRegister extends Component {
 

    render() {
      return (
          <View style={styles.continer} >
              <Text style={styles.titleTextSignup} >Sign Up</Text>
                  <TextInput  style={styles.inputBox}
               underlineColorAndroid='rgba(0,0,0,0)'
               placeholder="Name" 
               
               />
              <TextInput  style={styles.inputBox}
               underlineColorAndroid='rgba(0,0,0,0)'
               placeholder="E-mail" 
               
               />

               <TextInput  style={styles.inputBox}
               underlineColorAndroid='rgba(0,0,0,0)'
               placeholder="Password" 
               secureTextEntry
               
               />

               <TouchableOpacity style={styles.Button} >
                   <Text style={styles.buttonText} >
                       {this.props.type}
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

            titleTextSignup:{
                color:'#fff',
                fontWeight:'700',
                fontSize:20,
                


            },
      

     
    
    
    });