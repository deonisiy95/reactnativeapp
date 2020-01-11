import React, {Component} from 'react';
import {StyleSheet, Text, View, Switch, TouchableOpacity} from 'react-native';
import {grayscale100, grayscale35, borderColor} from '../../../core/styles/global';

export default class OrderItem extends Component {
  render() {
    const {name, details} = this.props;
    return (
      <View style={styles.container}>
        <View stile={styles.info}>
          <Text style={styles.name} numberOfLines={1} ellipsizeMode='middle'>
            {name}
          </Text>
          <Text style={styles.details}>{`(${details})`}</Text>
        </View>
        <Switch style={{flexGrow: 1}}value={true} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 8,
    paddingTop: 8,
    maxWidth: '100%'
  },
  info: {
    flexGrow: 1,
  },
  name: {
    fontSize: 20,
    color: grayscale100,
    flexShrink: 2,
  },
  details: {
    marginTop: 0,
    color: grayscale35,
    fontSize: 16
  }
});
