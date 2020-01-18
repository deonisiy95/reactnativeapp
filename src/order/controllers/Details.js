import React from 'react';
import {Text} from 'react-native';

export default class MyHomeScreen extends React.Component {
  render() {
    return (
      <>
        <Text>{this.props.navigation.getParam('name')}</Text>
      </>
    );
  }
}
