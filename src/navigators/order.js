import {createStackNavigator} from 'react-navigation-stack';

import Details from '../order/controllers/Details';
import OrderList from '../order/controllers/OrderList';

export default createStackNavigator({
  orderList: {
    screen: OrderList
  },
  details: {
    screen: Details
  }
});
