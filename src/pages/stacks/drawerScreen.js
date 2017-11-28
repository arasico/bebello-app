import {DrawerNavigator , navigationOptions} from 'react-navigation';
import React from 'react';

import {Icon} from 'react-native-elements';

import Screen1 from '../searchResualt';
import Screen2 from '../screen2';
import Screen3 from '../login'; 

const DrawerScreen = DrawerNavigator({
    'Home': {screen: Screen1}, 
    'Setting': {screen: Screen2},
    'About us': {screen: Screen2},
    'Contact Us': {screen: Screen2},
    'suport': {screen: Screen2},
    'profile': {screen: Screen2},
    'log ot': {screen: Screen2},
}, {
    headerMode: 'none',
    drawerPosition:'left', 

    contentOptions: {
        activeTintColor: 'red',
        activeBackgroundColor:'#000'
    },
    

});
 

export default DrawerScreen;