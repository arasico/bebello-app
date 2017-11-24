import {DrawerNavigator , navigationOptions} from 'react-navigation';
import React from 'react';

import {Icon} from 'react-native-elements';

import Screen1 from '../searchResualt';
import Screen2 from '../screen2'; 

const DrawerScreen = DrawerNavigator({
    Home: {screen: Screen1},
    Main: {screen: Screen2}
}, {
    headerMode: 'none',
    drawerPosition:'left',
})

export default DrawerScreen;