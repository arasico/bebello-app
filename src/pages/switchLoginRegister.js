import React, {Component} from 'react'; 
import {View , Text , Button  } from 'react-native';
import { Router , Scene } from  'react-native-router-flux'; 

import Login1 from './login';
import Signup1 from './signup';
import Main from './main';
import SearchResualt from './searchResualt';
import Test1 from './test';
 

export default class Routs extends Component {
    render (){
    
        return (
            
        <Router>
          <Scene key="root"> 
            <Scene key="loginKey"  component={Login1} title="login" hideNavBar direction="left" /> 
            <Scene key="signupKey"  component={Signup1} title="Signup1" hideNavBar /> 
            <Scene key="mainKey"  component={Main}   title="Home" hideNavBar /> 
            <Scene key="searchResualtKey"  component={SearchResualt} title="Search resualt"  hideNavBar /> 
            <Scene key="test"  component={Test1} title="test" hideNavBar /> 
          </Scene>
        </Router>
 
        );
    }
     }
