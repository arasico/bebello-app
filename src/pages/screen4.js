import React , {Component} from 'react';
import { View , Text , TouchableOpacity ,     StyleSheet , Alert , TextInput , AsyncStorage,    }  from 'react-native';
 




export default class Screen4 extends Component {
  
 
 exit_function = () => {

    
     try{
    Alert.alert(
     'Your Text',
     this.state.my_input_text
   );
}
catch(error){
    alert(error);
}
 }
 
saveData = () => {
    // alert('Test is ok'); 
    
    AsyncStorage.setItem('user', this.state.my_input_text);
    alert('save.');
}
state = {
    curTime: null,
}
componentWillMount(){
    // let user = await AsyncStorage.getItem('user');
    // this.setState({curTime : await AsyncStorage.getItem('user')});
    this.showData();
}

 

render(){
    

    return(
        <View>

          <Text>
              010{this.state.curTime}
          </Text>

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
        const user = await AsyncStorage.getItem('user');
        this.setState({curTime: user})
        alert(user);

    }
    catch(error)   {
        alert(error);

    }
}

}
