import React from 'react';
import {Text} from 'react-native';
import {mainColor} from '../../core/styles/global';

export default class MyHomeScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    const headerTitle = 'Details';
    const headerStyle = {backgroundColor: mainColor};
    const headerTitleStyle = {fontWeight: 'bold'};
    return {headerTitle, headerStyle, headerTitleStyle};
  };
  render() {
    return (
      <>
        <Text>{this.props.navigation.getParam('name')}</Text>
      </>
    );
  }
}
