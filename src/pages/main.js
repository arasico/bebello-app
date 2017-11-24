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