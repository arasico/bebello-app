import { StackNavigator  } from 'react-navigation';




import Screen1 from '../MyApp/pages/screen1';
import Screen2 from '../MyApp/pages/screen2';
import Screen3 from '../MyApp/pages/screen3';
import Screen4 from '../MyApp/pages/screen4';
import Screen5 from '../MyApp/pages/screen5';




export const Stack1 = StackNavigator({

Screen1:{
    screen:Screen1,
},
Screen2:{
    screen:Screen2,
}, 
Screen3:{
    screen:Screen3,
}, 
Screen4:{
    screen:Screen4,
}, 
Screen5:{
    screen:Screen5,
}, 



});

export const Stack2 = StackNavigator({
    
    Screen4:{
        screen:Screen4,
    },
    Screen5:{
        screen:Screen5,
    }, 
  
    
    
    
    });
