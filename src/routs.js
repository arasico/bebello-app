import React, { Component } from 'react';
import {Router , Scene ,Stack  } from 'react-native-router-flux';

import Login from './pages/login';
import Register from './pages/signup';



export default class Routs extends Component (){

    render(){

        return(
            <Router>
                <Stack key="root">
                    <Scene key="login" component={Login} title="Login" initial={true}/>
                    <Scene key="register" component={Register} title="Register"/>
                     
                </Stack>
            </Router>

        );
    }
}
