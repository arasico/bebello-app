import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';





class LoginScreen extends React.Component {
    static  navigationOptions = { 
      header: null ,
   
    };
   
    render() {
      const { navigate } = this.props.navigation;
  
     
      return (
      <View style={styles.continer} >
       <TouchableOpacity style={styles.buttonContiner} onPress={() => navigate('Login') } >
         <Text   >Login</Text>
       </TouchableOpacity>
  
      
   
      </View>
      );
    }
  }



  


export default class Logo extends Component {
    render() {
      return (
          <View style={styles.continer} >
         <Image  style={{width:120, height:120}}
         source={require('../image/logos.png')}
         />
            <Text style={styles.logoText} > Welcome to Bebello</Text>
         </View>
      );
    }
}

const styles = StyleSheet.create({
    
    
    
        continer:{ 
            flexGrow:1,  
            justifyContent:'flex-end',
            alignItems:'center',


    
        },

        logoText:{

                fontSize:18,
                color:'rgba(255,255,255,0.5)',
                marginVertical:10,


        },

     
    
    
    });