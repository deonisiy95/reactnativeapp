import React, {Component} from 'react';
import {Text, View, Switch, TouchableOpacity} from 'react-native';
import styles from './styles';

export default class OrderItem extends Component {
  render() {
    const {name, details, navigation} = this.props;
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('details', {name})}
      >
        <View style={styles.container}>
          <View>
            <Text style={styles.name} numberOfLines={1} ellipsizeMode='middle'>
              {name}
            </Text>
            <Text style={styles.details}>{`(${details})`}</Text>
          </View>
          <Switch style={styles.switch} value={true} />
        </View>
      </TouchableOpacity>
    );
  }
}
