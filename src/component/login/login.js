import React , {Component} from 'react';
import {Text , View , StyleSheet , Image , KeyboardAvoidingView  } from 'react-native';


import LoginForm from './loginForm';



export default class login  extends Component {
    render (){
        return(
            <KeyboardAvoidingView behavior="padding" style={style.continer}>
             

                    <Image style={style.bgImage} 
                    source={require('../../image/bg-login.png')} >
                     <View style={style.logoContiner} > 
                        <Image 
                        style={style.logo}
                        source={ require('../../image/logo.png')} 
                        />
                     </View>

                     <View style={style.formContiner} >

                         <LoginForm />


                     </View>

                     </Image>

         
                </KeyboardAvoidingView>

        );


    }


}

const style = StyleSheet.create({


            continer : {
                flexDirection:'row',
                backgroundColor:'#3498db',
            },
            logoContiner:{
                alignItems:'center',
                flexGrow:1, 
                justifyContent:'center', 


                

            },
       

            logo:{  
                width:200,
                height:250,
                marginTop:5,
                

            },
            bgImage:{  
                flex: 1, 
                width: null,  
                height:null, 
                
              
                
            }



});

