import React, { Component } from 'react';
import {View, Text, TextInput, TouchableOpacity , StyleSheet } from 'react-native';
import DeviceInfo from 'react-native-device-info'; 


export default class Screen2 extends Component {
 
    render() {


        fetch('https://mywebsite.com/endpoint/', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              firstParam: 'yourValue',
              secondParam: 'yourOtherValue',
            })
          })


        var x = DeviceInfo.getUniqueID();
       
        return ( 
            <View>
                
             <Text>
            Device Unique ID UUID:{ DeviceInfo.getUniqueID() }
           
            </Text>
               <Text>
               Device User Agen :{ DeviceInfo.getUserAgent() }
              
               </Text>
               
               <Text>
               Device Local ID:{ DeviceInfo.getDeviceLocale() }
              
               </Text>
               <Text>
               Device Local ID: Bebele toro sag bekhore :)
               {x}
              
               </Text>





               <TextInput  style={styles.inputBox}
               underlineColorAndroid='rgba(0,0,0,0)'
               placeholder="Password" 
               secureTextEntry
               
               /> 

               <TouchableOpacity style={styles.Button} onPress={()=> Actions.mainKey({})} >
                   <Text style={styles.buttonText} >
                    Send
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