import React, {Component} from 'react';
import {Text, View, Switch, TouchableNativeFeedback} from 'react-native';
import {SwipeRow} from 'react-native-swipe-list-view';
import styles from './styles';

export default class OrderItem extends Component {
  render() {
    const {name, details, navigation} = this.props;
    return (
      <SwipeRow rightOpenValue={-100} leftOpenValue={0} disableRightSwipe={true}>
        <View style={styles.hiddenContainer}>
          <Text>Delete</Text>
        </View>
        <TouchableNativeFeedback onPress={() => navigation.navigate('details', {name})}>
          <View style={styles.container}>
            <View>
              <Text style={styles.name} numberOfLines={1} ellipsizeMode='middle'>
                {name}
              </Text>
              <Text style={styles.details}>{`(${details})`}</Text>
            </View>
            <Switch style={styles.switch} value={true} />
          </View>
        </TouchableNativeFeedback>
      </SwipeRow>
    );
  }
}
