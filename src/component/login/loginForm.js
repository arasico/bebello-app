import React , {Component} from 'react';
import {Text , View , StyleSheet , Image , TextInput , TouchableOpacity } from 'react-native';



export default class loginForm  extends Component {
            render(){


                return(
                        <View style={style.continer} > 
                                <Text style={style.title} >Bebello </Text>
                                <TextInput  
                                style={style.input} 
                                placeholder="Username"
                                placeholderTextColor="#fcfcfc"
                                underlineColorAndroid="transparent"
                                returnKeyType="next"
                                />
                                <TextInput  
                                style={style.input} 
                                placeholder="Password"
                                placeholderTextColor="#fcfcfc"
                                underlineColorAndroid="transparent"
                                returnKeyType="go"
                                secureTextEntry
                                
                                />

                                <TouchableOpacity style={style.buttomContainer} >
                                     <Text style={style.buttomText} >LOGIN</Text>
                                </TouchableOpacity>
                                <Text style={style.creatAccountText} >You Dont Have Account ? </Text>
                            
                        </View>


                );

            }

}


const style=StyleSheet.create({

            continer:{
           padding:20,


            },
            title:{
                    fontSize:40,
                    color:'#fcfcfc',
                    alignItems:'center',
                    textAlign:'center', 
                    flexGrow:1,
                    marginBottom:20,

            },
            input:{
                    
                color:'#fcfcfc',
                marginBottom:20,
                backgroundColor:'rgba(200,200,200,0.4)',
                borderRadius: 10, 
                paddingLeft:15,


            },
            buttomContainer:{
                backgroundColor:'#fcfcfc',
                borderRadius: 50, 
                marginBottom:10,
               




            },
            buttomText:{
                    fontSize:20,
                    textAlign:'center', 
                    padding:15,


            },
            creatAccountText:{
                    fontSize:20,
                    padding:10,
                   textAlign:'center',





            },

});