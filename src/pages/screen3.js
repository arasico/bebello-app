import React , {Component} from 'react';
import { View , Text , TouchableOpacity , StyleSheet , Alert , TextInput}  from 'react-native';
 




export default class Screen3 extends Component {


    _onPressButton() {
 

        fetch('http://api.bebello.ir/api/v1/auth/register', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'agent': 'android',
              'uuid': 'bebello-ar',
            },
            body: JSON.stringify({
            email: 'aras.armasdasdani2014@gmail.com',  
            password: '01110111',
            name: 'aras'})
          }).then(response => {

            if (response.status === 200) {
            
                return response.json();

            } else { 
                return response.json();
            }
          })
          .then((responseData) => {
            Alert.alert(                              
                 JSON.stringify(responseData.token[0].token)
            )
        })

        


          .then(response => {
            console.debug(response);
            // ...
          }).catch(error => {
            console.error(error);
           
           }).done();
          
      } 


 

render(){

   

    return(
            <View>
                   <TouchableOpacity style={styles.continer}
                               onPress={this._onPressButton}
                               >
                        <Text>Send Post</Text>
                    </TouchableOpacity>
<Text>-----------------------</Text>
<TextInput placeholder="email" />
 
                </View>

    );
}



}



const styles = StyleSheet.create({

continer:{
    backgroundColor:'red',
    width :200,
    height :100,
    alignContent:'center',
    textAlign:'center',



},


});
