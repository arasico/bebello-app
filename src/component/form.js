import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import Splash from '../../splashStart';

export default class Logo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          txtEmail: 'null',
          txtPassword: 'null',
          validated : false,
          messageText :' 0',

        };
      }

    render() { 

      return (
        
         <View style={styles.continer} >
         <Text> {this.state.messageText}</Text>
              <TextInput  style={styles.inputBox}
               underlineColorAndroid='rgba(0,0,0,0)'
               placeholder="E-mail" 
               onChangeText={(text) => this.setState({txtEmail:text})} 
               
               />

               <TextInput  style={styles.inputBox}
               underlineColorAndroid='rgba(0,0,0,0)'
               placeholder="Password" 
               secureTextEntry
               
               /> 

               <TouchableOpacity style={styles.Button} onPress={this.submitLogin} >
                   <Text style={styles.buttonText} >
                   {this.props.type} 
                   </Text>
               </TouchableOpacity>
         </View>
         


      );
    } 

    submitLogin = () =>{
     

        if(this.state.txtEmail=='null')
        {
            this.setState({messageText: 'pleas isnert true email '});
            this.setState({validated: false});
        }
        else
        {
            this.setState({validated: true});
        }
        if(this.state.validated == true)
        {
            alert('login sucses');
        }
         if(this.state.validated != true)
        {
            alert('login not suchses');
        }
     

        // AsyncStorage.setItem('user', 'login');
        // Actions.splashKey({});
        
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