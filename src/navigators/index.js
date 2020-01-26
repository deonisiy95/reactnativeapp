import {createAppContainer} from 'react-navigation';
import {createSwitchNavigator} from 'react-navigation';
import authNavigator from './auth';
import drawerNavigator from './drawer';
import authLoading from '../index';

const appNavigator = createSwitchNavigator({
  auth: authNavigator,
  drawer: drawerNavigator,
  authLoading: authLoading
}, {
  initialRouteName: 'authLoading'
});

export default createAppContainer(appNavigator)
