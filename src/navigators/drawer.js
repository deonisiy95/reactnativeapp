import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Button} from 'react-native';
import React from 'react';

import orderNavigator from '../navigators/order';

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

const MyDrawerNavigator = createDrawerNavigator({
  Home: orderNavigator,
  Notifications: {
    screen: MyNotificationsScreen,
  },
});

export default createAppContainer(MyDrawerNavigator);
