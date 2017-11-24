import React, { Component } from 'react';
import {AppRegistry , View , Text} from 'react-native';

 

import App from './App'
import Routs from './src/Routs/index'


class rnapp extends Component {
	render() {
		return (
	<App />
		);
	}
}
AppRegistry.registerComponent('rnapp', () => rnapp);

 