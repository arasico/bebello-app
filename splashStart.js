import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	AsyncStorage
} from 'react-native';
import SplashScreen from './src/component/splashScreen';
import SwitchLoginRegister from './src/pages/switchLoginRegister';
import MainPage from './src/pages/main';


 

class SplashStart extends Component{
	state = {
		curentSTS: null,
	}
	componentWillMount(){
		// let user = await AsyncStorage.getItem('user');
		// this.setState({curTime : await AsyncStorage.getItem('user')});
		this.showData();
	}


	showData = async () =>{
		
			try{
				const user = await AsyncStorage.getItem('user');
				this.setState({curentSTS: user})
				//alert(user);
		
			}
			catch(error)   {
				alert(error);
		
			}
		}




 

	render(){
		
		if (this.state.curentSTS =="login"){
			return(
				//TODO: change duration to 3K ms
				<SplashScreen >
				<MainPage>
   
			   </MainPage>
			   
			   </SplashScreen>
			)
		}else{
		return(
	

<SplashScreen >
<SwitchLoginRegister>

</SwitchLoginRegister>

</SplashScreen>
		)
	}
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