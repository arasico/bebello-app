import React , {Component} from 'react';
import { View , Text , TouchableOpacity , StyleSheet , Alert}  from 'react-native';
 




export default class Screen3 extends Component {
    state = {
        responseBody:[]
};


    _onPressButton() {

        let customBody = {email: 'aras.armani2014@gmail.com',  
        password: '01110111',
        name: 'aras'};
        

        fetch('http://api.bebello.ir/api/v1/auth/Register', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded',
              'agent': 'android',
              'uuid': 'bebello-araso-bekhore',
            },
            body: JSON.stringify({
            email: 'aras.armani2014@gmail.com',  
            password: '01110111',
            name: 'aras'})
          }).then(response => {
              
            if (response.status === 200) {
            
                return response.json();

            } else { 
                throw new Error('Something went wrong on api server!');
            }
          })
          .then((responseData) => {
            Alert.alert(                              
                "Blood pressure data",
                "Blood pressure data - " + JSON.stringify(responseData)
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
