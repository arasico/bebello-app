import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
// for get user UUID and User Agent and User device info
import DeviceInfo from 'react-native-device-info'; 


export default class FormRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
          txtName: 'null',
          txtEmail: 'null',
          txtPassword: 'null',
          validated : false,

        };
      }

    render() {
      return (
          <View style={styles.continer} >
               <Text>
            Device UUID:{ DeviceInfo.getUniqueID() }
           
            </Text>
               <Text>
               Device User Agen :{ DeviceInfo.getSystemName() }
              
               </Text>
              <Text style={styles.titleTextSignup} >Sign Up</Text>
                  <TextInput  style={styles.inputBox}
               underlineColorAndroid='rgba(0,0,0,0)'
               placeholder="Name" 
               onChangeText={(text) => this.setState({txtName:text})} 
               
               />
              <TextInput  style={styles.inputBox}
               underlineColorAndroid='rgba(0,0,0,0)'
               placeholder="E-mail" 
               keyboardType="email-address"
               onChangeText={(text) => this.setState({txtEmail:text})} 
    
               
               />

               <TextInput  style={styles.inputBox}
               underlineColorAndroid='rgba(0,0,0,0)'
               placeholder="Password" 
               onChangeText={(text) => this.setState({txtPassword:text})} 
               secureTextEntry
               
               />

               <TouchableOpacity style={styles.Button} onPress={this.submitRegister} >
                   <Text style={styles.buttonText} >
                       {this.props.type}
                   </Text>

               </TouchableOpacity>
         </View>
      );
    }


    submitRegister = () => {
       // alert(DeviceInfo.getSystemName());
       if(this.state.txtName == 'null' || this.state.txtEmail=='null' || this.state.txtPassword=='null' )
       {
       alert('please insert your information!');
       }else{

     alert('succes')
       }

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