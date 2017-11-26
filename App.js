import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';

//start spalsh page for index 
import SplashStart from './splashStart'; 
import Main from './src/pages/main';
//import MainMyApp from './src/MyApp/main';

 

 

class App extends Component{
	render(){ 
		return(
 		<SplashStart/>

		)
  
	
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#000000',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	splashScreenContainer: {
		backgroundColor:'red',
	}
});

export default App;