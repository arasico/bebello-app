import {DrawerNavigator , navigationOptions} from 'react-navigation';
import React from 'react';

import {Icon} from 'react-native-elements';

import Screen1 from '../searchResualt';
import Screen2 from '../screen2';
import Screen3 from '../screen3'; 

const DrawerScreen = DrawerNavigator({
    'Home': {screen: Screen1}, 
    'Setting': {screen: Screen2},
    'Screen3': {screen: Screen3},
    'Contact Us': {screen: Screen2},
    'suport': {screen: Screen2},
}, {
    headerMode: 'none',
    drawerPosition:'left', 

    contentOptions: {
        activeTintColor: 'red',
        activeBackgroundColor:'#000'
    },
    

});
 

export default DrawerScreen;