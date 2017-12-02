import React , {Component} from 'react';
import { View , Text , TouchableOpacity ,     StyleSheet , Alert , TextInput , AsyncStorage,    }  from 'react-native';
 




export default class Screen4 extends Component {

 
 exit_function = () => {
    Alert.alert(
     'Your Text',
     this.state.my_input_text
   );
 }
 
saveData = () => {
    // alert('Test is ok'); 
    
    AsyncStorage.setItem('user', this.state.my_input_text);
    alert('save.');
}

render(){
 

    return(
        <View>
               <TouchableOpacity   onPress={this.saveData}  >
                   <Text>Save Data</Text>
                   
                </TouchableOpacity>


                <TouchableOpacity   onPress={this.showData}  >
                   <Text>show Data</Text>
                   
                </TouchableOpacity>

                <TextInput 
                placeholder="Insert valuy" 
                onChangeText={(text) => this.setState({my_input_text:text})}
                />
                <TouchableOpacity  onPress={this.exit_function}  >
                   <Text>show meessage</Text>
                   
                </TouchableOpacity>
               

              



 

        </View>

    );
}


 

showData = async () =>{

    try{
        let user = await AsyncStorage.getItem('user');
        alert(user);

    }
    catch(error)   {
        alert(error);

    }
}

}
