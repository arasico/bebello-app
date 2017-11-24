import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button,

} from 'react-native';
import {  StackNavigator, } from 'react-navigation';
import {Actions } from 'react-native-router-flux';

import Logo from '../component/logo';
import Form from '../component/form';
//import Signup from './signup';

  
export default class login extends Component {
constructor(props){
    super(props);
    this.state= {} ;

}

    render() { 
      return (
            <View style={styles.continer} > 
                    
                   <Logo /> 
                   <Form type="login" />

                            <View  style={styles.signupTextCont} >
                                <Text style={styles.signupText} >Don't have Account yet ? </Text>
                                <Text style={styles.signUp}  onPress={() => Actions.signupKey({}) } >Sign Up</Text>   
                              
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
        color:'#282828',



    },


});




