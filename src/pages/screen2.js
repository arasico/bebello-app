import React, { Component } from 'react';
import {View, Text} from 'react-native';
import DeviceInfo from 'react-native-device-info';


class Screen2 extends Component {
 
    render() {
        
       
        return ( 
            <View>
             <Text>
            Device Unique ID UUID:{ DeviceInfo.getUniqueID() }
           
            </Text>
               <Text>
               Device User Agen :{ DeviceInfo.getUserAgent() }
              
               </Text>
               
               <Text>
               Device Local ID:{ DeviceInfo.getDeviceLocale() }
              
               </Text>
               <Text>
               Device Local ID: Bebele toro sag bekhore :)
              
               </Text>
             </View>
         );
    }
}


export default Screen2;