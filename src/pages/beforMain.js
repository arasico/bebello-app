import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';
import SplashScreen from './src/component/splashScreen';
import SwitchLoginRegister from './src/pages/switchLoginRegister';
import MainPage from './main';


 

class SplashStart extends Component{
	render(){
	 
		 
			return(
				//TODO: change duration to 3K ms
			 
				<MainPage>
   
			   </MainPage>
			   
			 
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

export default SplashStart;