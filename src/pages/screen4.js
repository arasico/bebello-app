import React , {Component} from 'react';
import { View , Text , TouchableOpacity ,     StyleSheet , Alert , TextInput , AsyncStorage,    }  from 'react-native';
 




export default class Screen4 extends Component {

 


render(){
 

    return(
        <View>
               <TouchableOpacity   onPress={this.saveData}  >
                   <Text>Save Data</Text>
                   
                </TouchableOpacity>


                <TouchableOpacity   onPress={this.showData}  >
                   <Text>show Data</Text>
                   
                </TouchableOpacity>
        </View>

    );
}

saveData(){
    // alert('Test is ok');

    let user ='aras';
    AsyncStorage.setItem('user', user);
    alert('save data');
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
