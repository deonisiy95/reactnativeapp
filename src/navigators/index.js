import {createAppContainer} from 'react-navigation';
import {createSwitchNavigator} from 'react-navigation';
import authNavigator from './auth';
import drawerNavigator from './drawer';

const appNavigator = createSwitchNavigator({
  auth: authNavigator,
  drawer: drawerNavigator
}, {
  initialRouteName: 'auth'
});

export default createAppContainer(appNavigator)
