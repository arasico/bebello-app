import {
    StackNavigator
} from 'react-navigation';
import {
    TouchableHighlight,
    Text,
    View
} from 'react-native'
import React from 'react';
import {Icon} from 'react-native-elements';
import DrawerScreen from './drawerScreen';

const DrawerNavigation = StackNavigator({
    DrawerStack: {screen: DrawerScreen}
}, {
    headerMode: 'float',
    navigationOptions: ({navigation}) => ({
        headerStyle: {
            backgroundColor: 'rgb(40, 45, 85)',
            paddingLeft: 10,
            paddingRight: 10
        }, 
        headerTintColor: '#fff', 
        headerTitleStyle: { textAlign: 'center', alignSelf: 'center', fontWeight: 'normal', fontSize: 20, color: '#fcfcfc' },
        title:'Home',
        headerCenter:<View><Text>yase </Text> </View>,
        headerLeft: <View>
               
            <Icon  name="menu" size={35} color="#fff"
                onPress={() => {
                    if(navigation.state.index === 0){
                        navigation.navigate('DrawerOpen');
                    } else {
                        navigation.navigate('DrawerClose');
                    }
                }}>
                
                

            </Icon>

            
        </View>,

         headerRight: <View>
               
            <Icon  name="search" size={35} color="#fff"
                onPress={() => {
                    if(navigation.state.index === 0){
                        navigation.navigate('DrawerOpen');
                    } else {
                        navigation.navigate('DrawerClose');
                    }
                }}>
                
                
            </Icon>

            
        </View>,
    })
})

export default DrawerNavigation;