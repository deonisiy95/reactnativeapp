import {createSwitchNavigator} from 'react-navigation';

import Details from '../order/controllers/Details';
import OrderList from '../order/controllers/OrderList';

export default createSwitchNavigator({
  orderList: {
    screen: OrderList,
  },
  details: {
    screen: Details,
  },
})
