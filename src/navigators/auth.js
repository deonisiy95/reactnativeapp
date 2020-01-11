import {createSwitchNavigator} from 'react-navigation';

import Login from '../../src/auth/controllers/login';
import Signup from '../../src/auth/controllers/signup';

export default createSwitchNavigator({
  login: {
    screen: Login
  },
  signup: {
    screen: Signup
  }
})
