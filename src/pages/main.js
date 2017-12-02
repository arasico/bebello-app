import {
  StackNavigator
} from 'react-navigation';

import DrawerStack from './stacks/drawerStack';

const Navigator = StackNavigator({
  drawerStack: {screen: DrawerStack}
}, {
  headerMode: 'none',
  initialRouteName: 'drawerStack'
})


 export default Navigator;

// import React,{Component} from 'react';

// import {
//   StackNavigator
// } from 'react-navigation';

// import DrawerStack from './stacks/drawerStack';



//export default Navigator;
// import MainPage from './screen3';




// export default class main extends Component {

//   render(){
   
//     const Navigator = StackNavigator({
//         drawerStack: {screen: DrawerStack}
//       }, {
//         headerMode: 'none',
//         initialRouteName: 'drawerStack'
//       })
    
//     return(
//         <Navigator >
           
//         </Navigator>
//     );
//   }

// }
  
