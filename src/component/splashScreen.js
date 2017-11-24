/**
 * Created by aviad on 6/15/2016.
 */

import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Animated
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

class SplashScreen extends Component{

	constructor(props){
		super(props);
		this.state = {
			done: false,
			fadeAnim: new Animated.Value(0), // init opacity 0
		}
	}

	timer() {
		setTimeout(()=>{
			this.setState({
				done: true
			});
		},this.props.duration || 1000)
	}
	componentDidMount(){
		Animated.timing(          // Uses easing functions
			this.state.fadeAnim,    // The value to drive
			{toValue: 1}            // Configuration
		).start();                // Don't forget start!
		this.timer();
	}
	render(){
		return(
			this.state.done ?
				// If done -> Show all nested
				({...this.props.children})
				:
				// Display Splash Screen
				(
					 
					<Image style={style.bgImage} 
                    source={require('../image/bg-splash.png')} >
                     <View style={style.logoContiner} > 
                        <Image 
                        style={style.logo}
                        source={ require('../image/logo.png')} 
                        />
						<Text style={style.logoText} >Bebello.ir</Text>
                     </View>



                     </Image>
				)

		);
	}

}

const style = StyleSheet.create({
	continer : {
		flexDirection:'row',
		backgroundColor:'#3498db',
	},
	logoContiner:{
		alignItems:'center',
		flexGrow:1, 
		justifyContent:'center', 
 
	},


	logo:{  
		width:300,
		height:350,
		marginTop:5,
		

	},
	bgImage:{  
		flex: 1, 
		width: null,  
		height:null, 
		
	  
		
	},
	logoText:{
		color:'#fff',
		fontSize:35,

	},



});
const gradientColor =	['#D129BA', '#6B2162' , '#45153f'];

export default SplashScreen