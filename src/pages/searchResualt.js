import React, { Component } from "react";
import { FlatList, Text, View , TouchableOpacity, StyleSheet } from "react-native";
import { List, ListItem , Header , SearchBar,Icon  } from "react-native-elements";
import {Actions} from 'react-native-router-flux';

// API : http://starsapp.ir/api/v1/stars
export default class SearchResualt extends Component {
  state = {
    data: []
  };

  componentWillMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch("http://starsapp.ir/api/v1/stars");
    const json = await response.json();
    this.setState({ data: json.data });
  };

  render() {
    return (
      <View>
          <Header
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'Search Resualt', style: { color: '#fff' } }}
  rightComponent={ 
                  <Icon
                    name={'home'}
                    color={'#ffffff'} 
                    onPress={() => Actions.mainKey({})} 
                  />

  }
 


 
     />
<SearchBar 
lightTheme
round
  placeholder='Type Here...' />
        <List>
          <FlatList
            data={this.state.data}
            keyExtractor={(x, i) => i}
            renderItem={({ item }) =>
              <ListItem
                roundAvatar
                avatar={{ uri: item.image }}
                title={`${item.name}    ${item.bio}`}
              />}
          />
        </List>
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