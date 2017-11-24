import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity
} from 'react-native'; 
import {
    StackNavigator,
  } from 'react-navigation';
import {Actions } from 'react-native-router-flux';
import Logo from '../component/logo';
import Form from '../component/formRegister';
//import Login from './login';



 
export default class Signup extends Component {
    
        
        render() {
            
          return (
                <View style={styles.continer} > 
                        
                       <Logo />
                       <Form type="signup" />
    
                       <View  style={styles.signupTextCont} >
                           <Text style={styles.signupText} >Already have account? </Text>
                           <Text style={styles.signUp} onPress={() => Actions.loginKey({}) }>Sign In</Text>
                      
                       </View>
                </View>
          );
        }
    }
    
  
   

 
 




const styles = StyleSheet.create({



    continer:{
        backgroundColor:'#00acc1',
        flex:1,
        alignItems:'center',
        justifyContent:'center', 
    },
 
    signupTextCont:{
        flexGrow:1,
        alignItems:'flex-end',
        justifyContent:'center', 
        marginVertical:16, 
        flexDirection:'row',


    },
    signupText:{
        fontSize:16,
        color:'#007c91',
        


    },

    signUp:{

        fontSize:20,
        fontWeight:'700',



    },
    buttonText:{
        fontSize:16,
        fontWeight:'700',
        color:'#ffffff',
        textAlign:'center',
    
    
    },

    buttonContiner:{
        backgroundColor:'#007c91',
        width:300,
        borderRadius:25,
        paddingVertical :14,
        marginVertical:10,
    
    
      },


});

 