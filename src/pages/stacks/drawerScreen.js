import {DrawerNavigator , navigationOptions} from 'react-navigation';
import React from 'react';

import {Icon} from 'react-native-elements';

import Screen1 from '../searchResualt';
import Screen2 from '../screen2';
import Screen3 from '../screen3'; 
import Screen4 from '../screen4'; 

const DrawerScreen = DrawerNavigator({
    'Home': {screen: Screen1}, 
    'Setting': {screen: Screen2},
    'Screen3': {screen: Screen3},
    'screen4': {screen: Screen4},
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