import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';

import { Router , Scene } from  'react-native-router-flux';

import Page1 from './Page1'; 


export default class Routs extends Component {
render (){

    return (

    <Router>
      <Scene key="root">
        <Scene key="page1" component={Page1} title="Page1"/> 
      </Scene>
    </Router>
    );
}
 }